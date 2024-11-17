import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { POSTGRES_URL } from "$env/static/private";
import { Rum } from "./schema";
import { eq, and } from 'drizzle-orm';


const queryClient = postgres(POSTGRES_URL);
export const db = drizzle(queryClient, { schema });

export async function doesRoomExist(roomNr: string, password: string): Promise<boolean> {
    const result = await db.select().from(schema.Rum).where(and(eq(Rum.værelsesnummer, roomNr), eq(Rum.adganskode, password)));
    if (result.length > 0) {
        return true;
    } else {
        return false;
    }
}