import { loggedInUser } from '$lib/server/stores';
import type { Bruger } from '$lib/types';
import { get } from 'svelte/store';
import type { LayoutServerLoad } from './$types';
import { checkIfRoomHasSubmission } from '$lib/server/db/db';

export const load: LayoutServerLoad = async () => {
    const user: Bruger | null = get(loggedInUser);
	return {
		erTilmeldt: (user) ? checkIfRoomHasSubmission(user.værelse) : false
	};
};
