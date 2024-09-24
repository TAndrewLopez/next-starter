import { FaRegUserCircle } from "react-icons/fa";
import { TbLoader2 } from "react-icons/tb";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Loading = () => {
  return (
    <Card className="mx-auto mt-4 w-[350px]">
      <CardHeader>
        <FaRegUserCircle className="mx-auto size-10" />
      </CardHeader>

      <CardContent>
        <TbLoader2 className="mx-auto mt-4 size-10 animate-spin" />
      </CardContent>
    </Card>
  );
};

export default Loading;
