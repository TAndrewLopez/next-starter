"use client";

import { signOut, useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLoader2 } from "react-icons/tb";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export const AuthButton = ({ minimal = true }: { minimal?: boolean }) => {
  const { data, status } = useSession();

  if (status === "unauthenticated") return null;

  if (status === "loading") {
    return <TbLoader2 className="size-5 animate-spin" />;
  }

  const logUserOut = () =>
    signOut({
      callbackUrl: "/",
    });

  if (minimal) {
    return <Button onClick={() => logUserOut()}>Sign Out</Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={data?.user?.image || ""} />
          <AvatarFallback>
            <FaRegUserCircle className="size-5" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{data?.user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          className="cursor-pointer focus:bg-red-600 focus:text-white"
          onClick={() => logUserOut()}
        >
          Sign out
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
