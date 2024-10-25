import { getAllUsers } from "$lib/server/bruger";
import { getAllWeekentilmeldinger } from "$lib/server/tilmelding";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = ({ params }) => {
	return {
		brugere: getAllUsers(),
        tilmeldinger: getAllWeekentilmeldinger()
	};
};