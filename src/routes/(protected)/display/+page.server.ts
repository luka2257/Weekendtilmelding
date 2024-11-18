import { getAllUsers } from "$lib/server/bruger";
import { getAllTilmeldinger } from "$lib/server/db/db";
import { loggedInUser } from "$lib/server/stores";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = ({ params }) => {
	return {
		brugere: getAllUsers(),
        tilmeldinger: getAllTilmeldinger()
	};
};

export const actions = {
	logout: async({ request }) => {
	  loggedInUser.set(null);
	  throw redirect(303, '/');
	}
  };