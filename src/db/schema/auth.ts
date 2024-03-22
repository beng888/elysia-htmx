import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { organizations } from "./organization";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	password: text("password").notNull(),
	email: text("email").notNull().unique(),
	picture: text("picture"),
	organization_id: integer("organization_id"),
});

export const userRelations = relations(users, ({ one }) => ({
	organization: one(organizations, {
		fields: [users.organization_id],
		references: [organizations.id],
	}),
}));

export const sessions = pgTable("sessions", {
	id: text("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),
});
