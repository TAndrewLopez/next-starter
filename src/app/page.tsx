import options from "@/config/auth";
import { getServerSession } from "next-auth";
import { FiPackage } from "react-icons/fi";

import { redirect } from "next/navigation";

import { LoginClient } from "@/components/login-client";

const LandingPage = async () => {
  const session = await getServerSession(options);
  if (session) return redirect("/profile");

  return (
    <div className="flex h-full">
      <div className="m-4 flex flex-1 rounded-lg">
        <div className="hidden flex-1 flex-col justify-between rounded-bl-lg rounded-tl-lg border-b border-l border-t bg-neutral-100 p-10 dark:border-neutral-800 dark:bg-zinc-900 lg:flex">
          <div className="flex items-center gap-x-2">
            <FiPackage className="size-5" />
            <p>Next.js Starter</p>
          </div>
          <div>
            <p>
              &quot;This library has saved me countless hours of work and helped
              me deliver stunning designs to my clients faster than ever
              before.&quot;
            </p>
            <p className="text-right font-semibold">- D. Quincy</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border p-10 dark:border-neutral-800 lg:rounded-bl-none lg:rounded-tl-none">
          <LoginClient />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
