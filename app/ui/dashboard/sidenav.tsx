import Link from "next/link";
import Image from "next/image";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import JCVD from "@/public/assets/jean-claude-van-damme.jpeg";
import { ButtonPrimary } from "../buttons";
import { signOut } from "@/auth";

export default function SideNav() {

  return (
    <div className="flex h-full justify-between md:flex-col py-4 md:px-0 px-2">
      
      {/* AVATAR & NAME */}
      <div className=' hidden md:flex flex-col self-center mb-2 '>
        <div className="relative w-10 h-10 md:w-24 md:h-24 rounded-full overflow-hidden">
          <Image
            src={JCVD}
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover"
            alt="Profile picture"
          />
        </div>
        <p className='text-center pt-2 text-xl'>JCVD</p>
      </div>

      {/* NAV LIST */}
      <div className="flex md:flex-col gap-2 mr-2">
        <NavLinks />
      </div>

      
      {/* SIGN OUT & INDEX */}
      <div className="flex flex-col gap-2 justify-center">
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className="flex justify-center"
        >
          <ButtonPrimary>
            <PowerIcon className="w-6" />
            <p className="hidden md:block">Sign Out</p>
          </ButtonPrimary>
        </form>

        <div className="hidden md:flex justify-center w-full">
          <Link
            className="text-2xl"
            href="/"
          >
            WeeGift
          </Link>
        </div>
      </div>

    </div>
  )
}