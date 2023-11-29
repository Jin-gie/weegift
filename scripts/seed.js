const { db } = require('@vercel/postgres');
const {
  users,
  kitties,
  kittyParticipants
} = require("../app/lib/placeholder-data.js");
const bcrypt = require('bcrypt');


async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers
    }
    
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedKitties(client) {
  try {
    // Ensure the "uuid-ossp" extension is available
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "kitties" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS kitties (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        creator_id UUID NOT NULL,
        creation_date DATE NOT NULL,
        ending_date DATE NOT NULL,
        closed BOOLEAN NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        picture_url VARCHAR(255) NOT NULL,
        contain_gifts BOOLEAN NOT NULL,
        sharing_link VARCHAR(255) NOT NULL,
        current_amount INT NOT NULL,
        display_amount BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "kitties" table`);

    // Insert data into the "kitties" table
    const insertedKitties = await Promise.all(
      kitties.map((kitty) =>
        client.sql`
          INSERT INTO kitties (
            creator_id, 
            creation_date, 
            ending_date, 
            closed, 
            title, 
            description, 
            picture_url, 
            contain_gifts, 
            sharing_link, 
            current_amount, 
            display_amount
          )
          VALUES (
            ${kitty.creator_id},
            ${kitty.creation_date},
            ${kitty.ending_date},
            ${kitty.closed},
            ${kitty.title},
            ${kitty.description},
            ${kitty.picture_url},
            ${kitty.contain_gifts},
            ${kitty.sharing_link},
            ${kitty.current_amount},
            ${kitty.display_amount}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedKitties.length} kitties`);

    return {
      createTable,
      kitties: insertedKitties,
    };
  } catch (error) {
    console.error('Error seeding kitties:', error);
    throw error;
  }
}

async function seedKittyParticipants(client) {
  try {
    // Ensure the "uuid-ossp" extension is available
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "kitty_participants" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS kitty_participants (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        kitty_id UUID NOT NULL,
        user_id UUID NOT NULL
      );
    `;

    console.log(`Created "kitty_participants" table`);

    // Insert data into the "kitty_participants" table
    const insertedParticipants = await Promise.all(
      kittyParticipants.map((participant) =>
        client.sql`
          INSERT INTO kitty_participants (kitty_id, user_id)
          VALUES (${participant.kitty_id}, ${participant.user_id})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedParticipants.length} kitty participants`);

    return {
      createTable,
      participants: insertedParticipants,
    };
  } catch (error) {
    console.error('Error seeding kitty participants:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedKitties(client);
  await seedKittyParticipants(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occured while attempting to seed the database:',
    err,
  )
});