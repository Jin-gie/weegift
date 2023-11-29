const { v4: uuidv4 } = require('uuid');

const generateUUID = () => {
  return uuidv4();
};

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateKittyParticipants = (len) => {
  const participants = [];
  for (let i = 0; i < len; i++) {
    const randomUserIndex = 0;
    const randomKittyIndex = Math.floor(Math.random() * kitties.length);
    const participant = {
      kitty_id: kitties[randomKittyIndex].id,
      user_id: users[randomUserIndex].id,
    };

    // Ensure the creator of a kitty is not a participant of the same kitty
    if (participant.user_id !== kitties[randomKittyIndex].creator_id) {
      participants.push(participant);
    } else {
      i--; // If the creator is selected, decrement i to try again
    }
  }
  return participants;
};

const users = [
  {
    id: generateUUID(),
    name: 'Alice',
    email: 'alice@example.com',
    password: 'password123',
    image_url: 'https://example.com/alice.jpg',
  },
  {
    id: generateUUID(),
    name: 'Bob',
    email: 'bob@example.com',
    password: 'password456',
    image_url: 'https://example.com/bob.jpg',
  },
  {
    id: generateUUID(),
    name: 'Charlie',
    email: 'charlie@example.com',
    password: 'password789',
    image_url: 'https://example.com/charlie.jpg',
  },
  {
    id: generateUUID(),
    name: 'David',
    email: 'david@example.com',
    password: 'passwordabc',
    image_url: 'https://example.com/david.jpg',
  },
  {
    id: generateUUID(),
    name: 'Eva',
    email: 'eva@example.com',
    password: 'passwordefg',
    image_url: 'https://example.com/eva.jpg',
  },
  {
    id: generateUUID(),
    name: 'Frank',
    email: 'frank@example.com',
    password: 'passwordhij',
    image_url: 'https://example.com/frank.jpg',
  },
  {
    id: generateUUID(),
    name: 'Grace',
    email: 'grace@example.com',
    password: 'passwordklm',
    image_url: 'https://example.com/grace.jpg',
  },
  {
    id: generateUUID(),
    name: 'Henry',
    email: 'henry@example.com',
    password: 'passwordnop',
    image_url: 'https://example.com/henry.jpg',
  },
  {
    id: generateUUID(),
    name: 'Ivy',
    email: 'ivy@example.com',
    password: 'passwordqrs',
    image_url: 'https://example.com/ivy.jpg',
  },
  {
    id: generateUUID(),
    name: 'Jack',
    email: 'jack@example.com',
    password: 'passwordtuv',
    image_url: 'https://example.com/jack.jpg',
  },
  {
    id: generateUUID(),
    name: 'Katie',
    email: 'katie@example.com',
    password: 'passwordwxy',
    image_url: 'https://example.com/katie.jpg',
  },
  {
    id: generateUUID(),
    name: 'Liam',
    email: 'liam@example.com',
    password: 'passwordz01',
    image_url: 'https://example.com/liam.jpg',
  },
];

const kitties = [
  {
    id: generateUUID(),
    creator_id: users[0].id,
    creation_date: '2023-01-01',
    ending_date: '2023-12-31',
    closed: false,
    title: 'Birthday Party Kitty',
    description: 'Contributions for Alice\'s birthday party',
    picture_url: 'https://example.com/birthday.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[1].id,
    creation_date: '2023-02-15',
    ending_date: '2023-03-15',
    closed: false,
    title: 'Farewell Party Kitty',
    description: 'Contributions for Bob\'s farewell party',
    picture_url: 'https://example.com/farewell.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[2].id,
    creation_date: '2023-03-01',
    ending_date: '2023-04-01',
    closed: false,
    title: 'Anniversary Celebration Kitty',
    description: 'Contributions for Charlie and David\'s anniversary',
    picture_url: 'https://example.com/anniversary.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[3].id,
    creation_date: '2023-04-15',
    ending_date: '2023-05-15',
    closed: false,
    title: 'Housewarming Kitty',
    description: 'Contributions for Eva and Frank\'s new home celebration',
    picture_url: 'https://example.com/housewarming.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[4].id,
    creation_date: '2023-05-01',
    ending_date: '2023-06-01',
    closed: false,
    title: 'Graduation Party Kitty',
    description: 'Contributions for Grace\'s graduation celebration',
    picture_url: 'https://example.com/graduation.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[5].id,
    creation_date: '2023-06-15',
    ending_date: '2023-07-15',
    closed: false,
    title: 'Summer BBQ Kitty',
    description: 'Contributions for Henry and Ivy\'s summer barbecue',
    picture_url: 'https://example.com/summer-bbq.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[6].id,
    creation_date: '2023-07-01',
    ending_date: '2023-08-01',
    closed: false,
    title: 'Beach Party Kitty',
    description: 'Contributions for Jack and Katie\'s beach party',
    picture_url: 'https://example.com/beach-party.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[7].id,
    creation_date: '2023-08-15',
    ending_date: '2023-09-15',
    closed: false,
    title: 'Backyard Movie Night Kitty',
    description: 'Contributions for Liam\'s backyard movie night',
    picture_url: 'https://example.com/movie-night.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[8].id,
    creation_date: '2023-09-01',
    ending_date: '2023-10-01',
    closed: false,
    title: 'Game Night Kitty',
    description: 'Contributions for Charlie and David\'s game night',
    picture_url: 'https://example.com/game-night.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[9].id,
    creation_date: '2023-10-15',
    ending_date: '2023-11-15',
    closed: false,
    title: 'Pumpkin Carving Kitty',
    description: 'Contributions for Eva and Frank\'s pumpkin carving party',
    picture_url: 'https://example.com/pumpkin-carving.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
  {
    id: generateUUID(),
    creator_id: users[0].id,
    creation_date: '2023-11-01',
    ending_date: '2023-12-01',
    closed: false,
    title: 'Thanksgiving Feast Kitty',
    description: 'Contributions for Alice\'s Thanksgiving feast',
    picture_url: 'https://example.com/thanksgiving-feast.jpg',
    contain_gifts: true,
    sharing_link: generateRandomString(8),
    current_amount: 0,
    display_amount: true,
  },
];

const kittyParticipants = generateKittyParticipants(30);

const kittyHistories = [
  {
    kitty_id: kitties[0].id,
    date: '2023-01-02',
    user_id: users[0].id,
    action: 'creation',
    amount: 0,
  },
  {
    kitty_id: kitties[1].id,
    date: '2023-02-16',
    user_id: users[1].id,
    action: 'creation',
    amount: 0,
  },
  // Add more histories as needed
];

const kittyGifts = [
  {
    title: 'Gift for Alice',
    bought: false,
  },
  {
    title: 'Gift for Bob',
    bought: true,
  },
  // Add more gifts as needed
];

module.exports = {
  users,
  kitties,
  kittyParticipants
}