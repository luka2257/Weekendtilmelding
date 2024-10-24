import { writable, type Writable } from "svelte/store";
import type { Weekendtilmelding } from "./types";

export const tilmeldinger: Writable<Weekendtilmelding[]> = writable([]);

export const testStore: Writable<string> = writable("");