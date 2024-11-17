import type { Rum, Tilmeldinger } from "./schema";


export type InsertRum = typeof Rum.$inferInsert;
export type SelectRum = typeof Rum.$inferSelect;

export type InsertTilmelding = typeof Tilmeldinger.$inferInsert;
export type SelectTilmelding = typeof Tilmeldinger.$inferSelect;
