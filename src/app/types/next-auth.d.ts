import { DefaultSession } from "next-auth";

export type HrefPages = "/" | "/profile" | "/guestbook" | "/dashboard";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
