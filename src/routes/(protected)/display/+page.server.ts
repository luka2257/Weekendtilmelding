import { getAllUsers } from "$lib/server/bruger";
import { getAllTilmeldinger } from "$lib/server/db/db";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = ({ params }) => {
	return {
		brugere: getAllUsers(),
        tilmeldinger: getAllTilmeldinger()
	};
};