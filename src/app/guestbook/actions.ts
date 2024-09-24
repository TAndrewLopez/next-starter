"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import options from "@/config/auth";
import db from "@/db";
import { GuestbookEntries, InsertGuestbookEntrySchema } from "@/db/schema";
import { requireAuth } from "@/utils/require-auth";
import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth";

export const createGuestbookEntry = async (
  prevState: unknown,
  formData: FormData
) => {
  await requireAuth();
  const entry = parseWithZod(formData, {
    schema: InsertGuestbookEntrySchema,
  });

  if (entry.status !== "success") {
    return entry.reply();
  }

  const session = (await getServerSession(options))!;

  await db.insert(GuestbookEntries).values({
    userId: session.user.id,
    message: entry.value.message,
  });

  revalidatePath("/guestbook");
  redirect("/guestbook");
};
