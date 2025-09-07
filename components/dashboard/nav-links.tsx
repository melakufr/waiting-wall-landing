



'use client';

import * as React from "react";
import { Users, Home, Mail, DollarSign, UserCheck } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation based on your Prisma models
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Subscribers', href: '/dashboard/subscribers', icon: Mail },
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Investors', href: '/dashboard/investors', icon: DollarSign },
  { name: 'Verifications', href: '/dashboard/verifications', icon: UserCheck },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}