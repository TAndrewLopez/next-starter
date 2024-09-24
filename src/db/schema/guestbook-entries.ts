import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { Users } from ".";

export const GuestbookEntries = pgTable("guestbook_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => Users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const guestbookEntriesRelations = relations(
  GuestbookEntries,
  ({ one }) => ({
    Users: one(Users, {
      fields: [GuestbookEntries.userId],
      references: [Users.id],
    }),
  })
);

export const InsertGuestbookEntrySchema = createInsertSchema(
  GuestbookEntries
).omit({
  userId: true,
  createdAt: true,
});
