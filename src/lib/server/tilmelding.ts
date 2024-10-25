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
    // const tilmelding: Partial<Weekendtilmelding> & Pick<Weekendtilmelding, "navn" | "værelse" | "erTilstede"> = {
    //   navn: data.get("navn") ? String(data.get("navn")) : "",
    //   værelse: data.get("værelse") ? String(data.get("værelse")) : "",
    //   erTilstede: Boolean(data.get("erTilstede")),
    //   meals: {
    //     FreAf: boolean,
    //     FreKa: boolean,
    //     LørMo: boolean,
    //     LørMi: boolean,
    //     LørEf: boolean,
    //     LørAf: boolean,
    //     LørKa: boolean,
    //     SønMo: boolean,
    //     SønMi: boolean,
    //     SønEf: boolean,
    //     SønAf: boolean,
    //     SønKa: boolean,
    //   },
    //   kommentar: string,
    //   gæst: {
    //     navn: string,
    //     værelse: string,
    //     besked: string,
    //   },
    // };
}