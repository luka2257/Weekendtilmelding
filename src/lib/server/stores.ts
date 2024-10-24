import { writable, type Writable } from "svelte/store";
import type { Bruger, Weekendtilmelding } from "../types";

export const tilmeldingerStore: Writable<Weekendtilmelding[]> = writable([]);

export const brugereStore: Writable<Bruger[]> = writable([]);

export const testStore: Writable<string> = writable("");