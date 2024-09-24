"use client";

import Link from "next/link";

import { useSession } from "next-auth/react";
import { FiPackage } from "react-icons/fi";

import { ModeToggle } from "../dark-mode/mode-toggle";
import { AuthButton } from "./auth-button";

export const Navbar = () => {
  const { status } = useSession();

  type PagesType = "/" | "/profile";
  type itemType = { label: string; href: PagesType };

  const menuItems: itemType[] = [{ label: "Home", href: "/" }];

  if (status === "authenticated") {
    menuItems.push({ label: "Profile", href: "/profile" });
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
        <ModeToggle />
        <AuthButton minimal={false} />
      </div>
    </nav>
  );
};
