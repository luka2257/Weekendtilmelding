import { testStore } from "$lib/server/stores.js";
import { createAndAddWeekendTilmeldingToStore, createWeekendtilmelding, validateSubmission } from "$lib/server/tilmelding";
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
        return { 
          success: false, 
          responseMessage: "Huske at udfylde både navn, værelse og om du er tilstede" 
        }
    } else {
      createAndAddWeekendTilmeldingToStore(data);
      return {
        success: true,
        resposneMessage: "Der var både navn, værelse og tilstede. Weekendtilmelding tilføjet til store"
      }
    }
  },
  fjernGæst: async ({ request }) => {},
};
