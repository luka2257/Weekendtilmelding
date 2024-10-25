import { testStore } from "$lib/server/stores.js";
import { createWeekendtilmelding, validateSubmission } from "$lib/server/tilmelding";
import type { Weekendtilmelding } from "$lib/types.js";

let testStoreValue: string = "";

testStore.subscribe((value: string) => {
  testStoreValue = value;
});

export const actions = {
  indsendTilmelding: async ({ request }) => {
    const data: FormData = await request.formData();

    const dataIsValid: boolean = validateSubmission(data);

    if (!dataIsValid) {
        return { success: false, responseMessage: "Huske at udfylde både navn, værelse og om du er tilstede" }
    }

    const Weekendtilmelding = createWeekendtilmelding(data);

    console.log("Guest message: " + data.get("guestMessage"));
    console.log(data.get("erTilstede"));
  },
  fjernGæst: async ({ request }) => {},
};
