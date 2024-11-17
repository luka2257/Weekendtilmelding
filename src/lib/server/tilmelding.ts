import type { Weekendtilmelding } from "$lib/types";
import { checkIfRoomHasSubmission, db, insertTilmelding, updateTilmelding } from "./db/db";


//#region validation methods
export function validateSubmission(data: FormData): boolean {
    const navn = data.get("navn");
    const værelse = data.get("værelse");
    const erTilstede = data.get("erTilstede");
    if (navn == null || værelse == null || navn == "" || værelse == ""  || erTilstede === null) {
        return false;
    }
    return true;
}
//#endregion


//#region Manipulate weekendtilmelding
export function createWeekendtilmelding(data: FormData): Weekendtilmelding {
    const tilmelding: Weekendtilmelding = {
      navn: String(data.get("navn")),
      værelse: String(data.get("værelse")),
      erTilstede: data.get("erTilstede") === "true" || false, // Default to false
      meals: {
        FreAf: Boolean(data.get("FreAf")),
        FreKa: Boolean(data.get("FreKa")),
        LørMo: Boolean(data.get("LørMo")),
        LørMi: Boolean(data.get("LørMi")),
        LørEf: Boolean(data.get("LørEf")),
        LørAf: Boolean(data.get("LørAf")),
        LørKa: Boolean(data.get("LørKa")),
        SønMo: Boolean(data.get("SønMo")),
        SønMi: Boolean(data.get("SønMi")),
        SønEf: Boolean(data.get("SønEf")),
        SønAf: Boolean(data.get("SønAf")),
        SønKa: Boolean(data.get("SønKa")),
      },
      kommentar: String(data.get("comment")),
      gæst: {
        navn: String(data.get("guestName")),
        værelse: String(data.get("guestRoom")),
        besked: String(data.get("guestMessage")),
      },
      date: new Date()
    };
    console.log("Registreret tilmelding:")
    console.log(tilmelding);
    return tilmelding;
}
//#endregion


//#region manipulate weekendtilmelding store
export async function createAndAddWeekendTilmeldingToStore(data: FormData) {
  const weekendtilmelding: Weekendtilmelding = createWeekendtilmelding(data);
  if (await checkIfRoomHasSubmission(weekendtilmelding.værelse)) {
    updateTilmelding(weekendtilmelding);
  } else {
    insertTilmelding(weekendtilmelding);
  }
}
//#endregion
