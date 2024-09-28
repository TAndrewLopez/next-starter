import db from "@/db";
import { requireAuth } from "@/utils/require-auth";
import { FaRegUserCircle } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GuestbookClient from "./page.client";

const GuestbookPage = async () => {
  await requireAuth();
  const entries = await db.query.GuestbookEntries.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt);
    },
    with: {
      Users: true,
    },
  });
  return (
    <Card className="mx-auto mt-4 max-w-[550px] overflow-auto">
      <CardHeader>
        <CardTitle>Welcome to the guestbook.</CardTitle>
        <CardDescription>A simple starter for Next.js</CardDescription>
      </CardHeader>
      <CardContent>
        <GuestbookClient />
        {entries.map((entry) => (
          <Card className="mt-4" key={entry.id}>
            <CardHeader className="flex flex-row items-center gap-x-4">
              <Avatar>
                <AvatarImage src={entry.Users.image} />
                <AvatarFallback>
                  <FaRegUserCircle className="size-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{entry.Users.name}</CardTitle>
                <CardDescription>{entry.Users.email}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{entry.message}</p>
            </CardContent>
            <CardFooter className="flex flex-row gap-x-3 text-sm text-muted-foreground">
              <p>{entry.createdAt.toLocaleString()}</p>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default GuestbookPage;
