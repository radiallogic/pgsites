import { integer, pgTable, varchar, serial, pgEnum, point } from "drizzle-orm/pg-core";


export const ratingEnum = pgEnum('rating', ['ep', 'cp', 'p', 'ap']);

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  rating: ratingEnum(), 
});

export const clubs = pgTable('clubs', {
  id: serial('id').primaryKey(),        
  name: varchar('name', { length: 255 }),
  primaryContact: integer('user_id').references(() => users.id) 
});

export const sites = pgTable('sites', {
  id: serial('id').primaryKey(),           
  name: varchar('name', { length: 255 }),
  memberStatus: varchar({ length: 255 }), 
  windDegStart: integer(),
  windDegEnd: integer(),

  rating: varchar({ length: 255 }).notNull(), // Not enum because it might have cp +10
  location: point('location', { mode: 'xy' }).notNull(),
  clubId: integer('club_id').references(() => clubs.id),
});

export const users_clubs = pgTable("users", {
  id: integer().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  clubId: integer('club_id').notNull().references(() => clubs.id)
});

export const parking = pgTable('parking', {
  id: serial('id').primaryKey(),           
  name: varchar('name', { length: 255 }),
  location: point('location', { mode: 'xy' }).notNull(),
  notes: varchar({ length: 255 }).notNull(),
});

export const sites_parking = pgTable('sites_parking', {
  id: serial('id').primaryKey(),
  index: integer().notNull(),
  userId: integer('user_id').notNull().references(() => users.id),
  clubId: integer('club_id').notNull().references(() => clubs.id)           
});
