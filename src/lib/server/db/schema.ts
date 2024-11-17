import type { Weekendtilmelding } from "$lib/types";
import { jsonb, pgTable, varchar } from "drizzle-orm/pg-core"

export const Rum = pgTable( "rooms", {
    værelsesnummer: varchar("værelsesnummer", { length: 255 }).primaryKey(),
    adganskode: varchar("adganskode", { length: 255 }).notNull(),
    personNavn: varchar("personNavn", { length: 255 }).notNull()
});

export const Tilmeldinger = pgTable( "tilmelding", {
    værelsesnummer: varchar("værelsesnummer", { length: 255 }).primaryKey(),
    tilmelding: jsonb().$type<Weekendtilmelding>()
});

// export const Tilmeldinger = pgTable( "tilmelding", {
//     værelsesnummer: varchar("værelsesnummer", { length: 255 }).primaryKey(),
//     tilmelding: varchar("tilmelding", { length: 3000 }).notNull()
// });