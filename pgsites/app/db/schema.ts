import { integer, pgTable, varchar, serial, doublePrecision } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  rating: varchar({ length: 255 }).notNull(),
  clubId: integer('club_id').notNull().references(() => club.id)  // Foreign key to Club
});


// Club table
export const club = pgTable('clubs', {
  id: serial('id').primaryKey(),           // Club ID as a primary key
  name: varchar('name', { length: 255 })    // Club name
});

// Site table
export const site = pgTable('sites', {
  id: serial('id').primaryKey(),            // Site ID as a primary key
  name: varchar('name', { length: 255 }),    // Site name
  clubId: integer('club_id').notNull().references(() => club.id), // Foreign key to Club
  latitude: doublePrecision('latitude'),     // Latitude for location
  longitude: doublePrecision('longitude'),    // Longitude for location
  rating: varchar({ length: 255 }).notNull(),
});
