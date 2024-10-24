export interface Weekendtilmelding {
    navn: string,
    værelse: string,
    erTilstede: boolean,
    meals: {
        FreAf: boolean,
        FreKa: boolean,
        LørMo: boolean,
        LørMi: boolean,
        LørEf: boolean,
        LørAf: boolean,
        LørKa: boolean,
        SønMo: boolean,
        SønMi: boolean,
        SønEf: boolean,
        SønAf: boolean,
        SønKa: boolean
    },
    kommentar: string,
    gæst: {
        navn: string,
        værelse: string,
        besked: string
    }
}