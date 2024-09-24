import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { Users } from ".";

export const Sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => Users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});
