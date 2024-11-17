import { pgTable, varchar } from "drizzle-orm/pg-core"

export const Rum = pgTable( "rooms", {
    værelseNr: varchar("værelsesnummer", { length: 255 }).primaryKey(),
    kode: varchar("adganskode", { length: 255 }).notNull(),
    navn: varchar("personNavn", { length: 255 }).notNull()
});

// export const Tilmelding = pgTable( "tilmelding", {
//     værelseNr: varchar("værelsesnummer", { length: 255 }).primaryKey(),
//     kode: varchar("adganskode", { length: 255 }).notNull(),
//     navn: varchar("personNavn", { length: 255 }).notNull()
// });