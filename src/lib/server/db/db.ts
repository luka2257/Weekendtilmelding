import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { POSTGRES_URL } from "$env/static/private";
import { Rum } from "./schema";
import { eq, and } from 'drizzle-orm';
import type { Bruger, Weekendtilmelding } from "$lib/types";
import type { InsertTilmelding } from "./dbTypes";
import { json } from "@sveltejs/kit";


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
    console.log("Inserting into db, got result:");
    const newRow: InsertTilmelding = {
      værelsesnummer: tilmelding.værelse,
      tilmelding: tilmelding
    }
    console.log(await db.insert(schema.Tilmeldinger).values(newRow).returning());
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