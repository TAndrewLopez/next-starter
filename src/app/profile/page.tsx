import options from "@/config/auth";
import { getServerSession } from "next-auth";
import { FaRegUserCircle } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  return (
    <Card className="mx-auto mt-4 w-[350px]">
      <CardHeader className="flex flex-row items-center gap-x-4">
        <Avatar>
          <AvatarImage src={session?.user?.image || ""} />
          <AvatarFallback>
            <FaRegUserCircle className="size-5" />
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{session?.user?.name}</CardTitle>
          <CardDescription>{session?.user?.email}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
