import { writable, type Writable } from "svelte/store";
import type { Bruger, Weekendtilmelding } from "../types";

export const tilmeldingerStore: Writable<Weekendtilmelding[]> = writable([]);

export const brugereStore: Writable<Bruger[]> = writable([
    {
        navn: "Lukas Lykke Jensen",
        værelse: "Suite1",
        adgangskode: "MegaFaggot"
    },
    {
        navn: "Lasse Hjøllund Jensen",
        værelse: "Suite2",
        adgangskode: "Maggot"
    },
    {
        navn: "Manuel Østrem Mørch",
        værelse: "Suite3",
        adgangskode: "RoboBitch"
    },
    {
        navn: "Tobias Bro Skuldbøl",
        værelse: "Suite4",
        adgangskode: "BigChungus"
    }
]);

export const testStore: Writable<string> = writable("");