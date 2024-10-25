import type { Weekendtilmelding } from "$lib/types";

export function validateSubmission(data: FormData): boolean {
    const navn = data.get("navn");
    const værelse = data.get("værelse");
    const erTilstede = data.get("erTilstede");
    if (navn == null || værelse == null || navn == "" || værelse == ""  || erTilstede === null) {
        return false;
    }
    return true;
}

export function createWeekendtilmelding(data: FormData) {
    const tilmelding: Weekendtilmelding = {
      navn: String(data.get("navn")),
      værelse: String(data.get("værelse")),
      erTilstede: Boolean(data.get("erTilstede")),
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
    };
    console.log("Registreret tilmelding:")
    console.log(tilmelding);
}