import type { Bruger } from "$lib/types";
import { brugereStore } from "./stores";

//#region stores and subscriptions
let brugerStoreValue: Bruger[] = [];
brugereStore.subscribe((value: Bruger[]) => {
    brugerStoreValue = value;
})
//#endregion


export function isUser(værelse: string, adgangskode: string): boolean {
    let result: boolean = false;
    brugerStoreValue.forEach((bruger: Bruger) => {
        (bruger.værelse === værelse  && bruger.adgangskode === adgangskode) ? result = true : false;
    });
    return result;
}

export function getUser(værelse: string): Bruger | null {
    let result: Bruger | null = null;
    brugerStoreValue.forEach((bruger: Bruger) => {
        (bruger.værelse === værelse) ? result = bruger : false;
    });
    return result;
}

export function getAllUsers() {
    return brugerStoreValue;
}