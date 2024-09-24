import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 320 }).unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: varchar("image", { length: 2048 }).notNull(),
});
