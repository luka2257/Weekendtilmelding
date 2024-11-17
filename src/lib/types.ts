export interface Weekendtilmelding {
    navn: string,
    værelse: string,
    erTilstede: boolean,
    meals: Meals,
    kommentar: string,
    gæst: {
        navn: string,
        værelse: string,
        besked: string
    }
    date: Date
}

export interface Meals {
    FreAf: boolean,
    FreKa: boolean,
    LørMo: boolean,
    LørMi: boolean,
    LørAf: boolean,
    LørKa: boolean,
    SønMo: boolean,
    SønMi: boolean,
    SønEf: boolean,
    SønAf: boolean,
    SønKa: boolean
    LørEf: boolean,
}


export interface Bruger {
    navn: string,
    værelse: string,
    adgangskode: string
}