"use client";

import Link from "next/link";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";

export const LoginClient = () => {
  return (
    <div className="mx-auto flex w-[400px] flex-col gap-y-4 rounded border bg-neutral-100 px-6 py-10 text-center dark:border-neutral-800 dark:bg-black">
      <h2 className="text-2xl font-bold">Continue with an account</h2>
      <p className="text-sm font-normal text-muted-foreground">
        Select an authentication method from the available providers.
      </p>

      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/profile",
          })
        }
        className="w-full"
      >
        <FcGoogle className="mr-1.5 size-4" /> Google
      </Button>
      <Button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/profile",
          })
        }
        disabled
        variant="outline"
      >
        <FaGithub className="mr-1.5 size-4" /> GitHub
      </Button>
      <p className="mx-10 text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="cursor-pointer underline hover:text-black dark:hover:text-white"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="cursor-pointer underline hover:text-black dark:hover:text-white"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};
