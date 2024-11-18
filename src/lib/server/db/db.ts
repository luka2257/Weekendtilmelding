import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { POSTGRES_URL } from "$env/static/private";
import { Rum } from "./schema";
import { eq, and } from 'drizzle-orm';
import type { Bruger, Weekendtilmelding } from "$lib/types";
import type { InsertTilmelding, SelectTilmelding } from "./dbTypes";


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

export async function getUserByRoom(roomNr: string): Promise<Bruger> {
    const dbResult = (await db.select().from(Rum).where(eq(Rum.værelsesnummer, roomNr)))[0];
    const user: Bruger = {
        navn: dbResult.personNavn,
        værelse: dbResult.værelsesnummer,
        adgangskode: dbResult.adganskode
    }
    return user;
}

export async function insertTilmelding(tilmelding: Weekendtilmelding) {
    const newRow: InsertTilmelding = {
      værelsesnummer: tilmelding.værelse,
      tilmelding: tilmelding
    }
    await db.insert(schema.Tilmeldinger).values(newRow).returning();
}

export async function updateTilmelding(weekendtilmelding: Weekendtilmelding) {
    // Create the new row
    const newRow: InsertTilmelding = {
        værelsesnummer: weekendtilmelding.værelse,
        tilmelding: weekendtilmelding, // Serialize the object
    };

    // Update the new row where the room matches
    await db.update(schema.Tilmeldinger)
        .set(newRow)
        .where(eq(schema.Tilmeldinger.værelsesnummer, weekendtilmelding.værelse));
}

export async function checkIfRoomHasSubmission(roomNr: string) {
    return (await db.select().from(schema.Tilmeldinger).where(eq(schema.Tilmeldinger.værelsesnummer, roomNr))).length > 0;
}

export async function getAllTilmeldinger(): Promise<Weekendtilmelding[]> {
    const allRows: SelectTilmelding[] = await db.select().from(schema.Tilmeldinger);
    const alleTilmeldinger: Weekendtilmelding[] = allRows.map(row => {
        return row.tilmelding
    });
    return alleTilmeldinger;
}


export async function clearTilmeldinger() {
    await db.delete(schema.Tilmeldinger);
}