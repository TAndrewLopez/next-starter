"use client";

import { useSession } from "next-auth/react";
import { TbLoader2 } from "react-icons/tb";

import Link from "next/link";

import { HrefPages } from "@/app/types/next-auth";

export const NavLink = () => {
  const { status } = useSession();

  type itemType = { label: string; href: HrefPages };
  const publicPages: itemType[] = [{ label: "Home", href: "/" }];
  const privatePages: itemType[] = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Guestbook", href: "/guestbook" },
  ];

  let menuItems: itemType[] = [];

  if (status === "authenticated") {
    menuItems = [...publicPages.slice(1), ...privatePages];
  }

  if (status === "loading") {
    return (
      <nav className="flex items-center justify-center">
        <TbLoader2 className="size-6 animate-spin" />
      </nav>
    );
  }

  return (
    <ul className="flex gap-x-3">
      {menuItems.map((item, i) => (
        <Link href={item.href} key={`${item.label}-${i}`}>
          {item.label}
        </Link>
      ))}
    </ul>
  );
};
