"use client";

import { useSession } from "next-auth/react";
import { FiPackage } from "react-icons/fi";
import { TbLoader2 } from "react-icons/tb";

import Link from "next/link";

import { HrefPages } from "@/app/types/next-auth";

import { ModeToggle } from "../dark-mode/mode-toggle";
import { AuthButton } from "./auth-button";

export const Navbar = () => {
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
      <nav className="flex items-center justify-center p-4">
        <TbLoader2 className="size-8 animate-spin" />
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-1">
        <FiPackage className="size-5" />
        <p>Next.js Starter</p>
      </div>
      <ul className="flex gap-x-3">
        {menuItems.map((item, i) => (
          <Link href={item.href} key={`${item.label}-${i}`}>
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-x-3">
        <AuthButton minimal={false} />
        <ModeToggle />
      </div>
    </nav>
  );
};
