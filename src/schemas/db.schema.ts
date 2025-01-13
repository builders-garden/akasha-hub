import { sql } from "drizzle-orm";
import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const hubTable = pgTable("hub", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: "hubs_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  description: text(),
  image: text(),
  banner: text(),
  images: text(),
  links: text(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).defaultNow(),
});

// WORKSTATION AND MEETING ROOM TABLE
export const workstationTable = pgTable(
  "workstation",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity({
      name: "workstation_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    hubId: integer("hub_id"),
    slug: varchar({ length: 255 }).notNull(),
    name: varchar({ length: 255 }),
    description: text(),
    capacity: integer(),
    available: boolean(),
    images: text(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    }).defaultNow(),
  },
  (table) => {
    return [
      {
        hubReference: foreignKey({
          columns: [table.hubId],
          foreignColumns: [hubTable.id],
          name: "workstation_hub_fkey",
        }),
      },
    ];
  }
);

export const userTable = pgTable("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: "user_id",
  }),
  privyId: varchar({ length: 255 }).notNull(),
  did: varchar({ length: 255 }), // akasha DID
  name: varchar({ length: 255 }),
  email: varchar({ length: 255 }),
  imageSrc: text("image_src"),
  bannerSrc: text("banner_src"),
  links: text("links")
    .array()
    .$type<string[]>()
    .default(sql`'{}'::text[]`),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).defaultNow(),
});

export const eventTable = pgTable(
  "event",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity({
      name: "event_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    hubId: integer("hub_id"),
    slug: varchar({ length: 255 }).notNull(),
    organizerId: integer("organizer_id"),
    name: varchar({ length: 255 }),
    description: text(),
    image: text(),
    startDate: timestamp("start_date", {
      withTimezone: true,
    }).notNull(),
    endDate: timestamp("end_date", {
      withTimezone: true,
    }),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    }).defaultNow(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
    }).defaultNow(),
  },
  (table) => {
    return [
      {
        hubReference: foreignKey({
          columns: [table.hubId],
          foreignColumns: [hubTable.id],
          name: "workstation_hub_fkey",
        }),
      },
      // TODO: Add organizer reference when there will be a user table
    ];
  }
);
