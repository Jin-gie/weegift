'use client';
import {
  GiftIcon,
  MagnifyingGlassIcon,
  StarIcon,
  BellIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from "next/navigation";

const links = [
  {
    name: 'Kittys', 
    href: '/dashboard',
    icon: GiftIcon
  },
  {
    name: 'Search', 
    href: '/dashboard/search',
    icon: MagnifyingGlassIcon
  },
  {
    name: 'Favorites', 
    href: '/dashboard/favorites',
    icon: StarIcon
  },
  {
    name: 'Notifications', 
    href: '/dashboard/notifications',
    icon: BellIcon
  },
  {
    name: 'Profile', 
    href: '/dashboard/profile',
    icon: UserIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <div 
              key={link.name}
              className='flex flex-col justify-between gap-1 md:flex-row'>
              <div className={
                clsx(
                  "w-full h-2 shrink-0 md:w-2 md:h-full",
                  {'bg-coral rounded-b-md md:rounded-r-lg' : pathname === link.href}    
                )
              }></div>
              <Link
                href={link.href}
                className={
                  clsx(
                    "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm hover:bg-dark-white md:justify-start md:p-2 md:px-3 hover:font-semibold before:block before:absolute before:bg-coral",
                  {
                    'bg-dark-white font-semibold' : pathname === link.href,
                  }
                  )
                }
              >
                <LinkIcon className='w-6' />
                <p className='hidden md:block'>{link.name}</p>
              </Link>
            </div>
          )
        })
      }
    </>
  )
}