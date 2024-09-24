"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { TbLoader2 } from "react-icons/tb";

import { Button } from "../ui/button";

export const AuthButton = () => {
  const { status } = useSession();

  if (status === "loading")
    return <TbLoader2 className="size-5 animate-spin" />;

  if (status === "authenticated")
    return <Button onClick={() => signOut()}>Sign Out</Button>;

  return <Button onClick={() => signIn("google")}>Sign sssIn</Button>;
};
