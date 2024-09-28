import { requireAuth } from "@/utils/require-auth";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = async () => {
  await requireAuth();

  return (
    <Card className="mx-auto mt-4 w-[350px]">
      <CardHeader>
        <CardTitle>Dashboard Page</CardTitle>
        <CardDescription>Content</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DashboardPage;
