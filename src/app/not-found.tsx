import { TbError404 } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NotFoundPage = () => (
  <Card className="mx-auto mt-4 w-[350px]">
    <CardHeader>
      <CardTitle>Was that intentional?</CardTitle>
      <CardDescription>
        It appears you&apos;ve stumbled to somewhere unexpected.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center justify-center">
      <TbError404 className="size-10" />
      <p>This page cannot be found.</p>
    </CardContent>
  </Card>
);

export default NotFoundPage;
