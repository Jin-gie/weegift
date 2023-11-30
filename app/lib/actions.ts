'use server';
// import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentitalsSignin';
    }
    throw error;
  }
}


// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   try {
//     console.log("signIn");
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid Credentials';      
//         default:
//           return 'Something went wrong';
//       }
//     }
//     throw error;
//   }
// }