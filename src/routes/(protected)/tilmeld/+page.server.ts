import { loggedInUser } from "$lib/server/stores.js";
import { createAndAddWeekendTilmeldingToStore, createWeekendtilmelding, validateSubmission } from "$lib/server/tilmelding";
import { get } from "svelte/store";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = ({ params }) => {
  const currentUser = get(loggedInUser)!; // Read the current value of the store
	return {
		currentUser
	};
};


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
  logout: async({ request }) => {
    loggedInUser.set(null);
    throw redirect(303, '/');
  }
};
