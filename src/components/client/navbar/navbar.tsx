"use client";

import Link from "next/link";

import { HrefPages } from "@/app/types/next-auth";
import { useSession } from "next-auth/react";
import { FiPackage } from "react-icons/fi";

import { ModeToggle } from "../dark-mode/mode-toggle";
import { AuthButton } from "./auth-button";

export const Navbar = () => {
  const { status } = useSession();

  type itemType = { label: string; href: HrefPages };
  const menuItems: itemType[] = [{ label: "Home", href: "/" }];

  if (status === "authenticated") {
    menuItems.push(
      { label: "Profile", href: "/profile" },
      { label: "Guestbook", href: "/guestbook" }
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
