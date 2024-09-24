import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LandingPage = () => {
  return (
    <Card className="mx-auto mt-4 w-[350px]">
      <CardHeader>
        <CardTitle>Next.js Starter</CardTitle>
        <CardDescription>A simple starter for Next.js</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter className="flex justify-between">Footer</CardFooter>
    </Card>
  );
};

export default LandingPage;
