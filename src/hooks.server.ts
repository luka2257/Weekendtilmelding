import { redirect, type Handle } from '@sveltejs/kit';
import { loggedInUser } from './lib/server/stores';
import { get } from 'svelte/store';
import schedule from 'node-schedule';
import { clearTilmeldinger } from '$lib/server/db/db';


// node-like cronjob for clearing cache.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const job = schedule.scheduleJob('0 5 * * MON', function () {
	//Crontab for every 30th minutes
    clearTilmeldinger();
});


export const handle: Handle = async ({ event, resolve }) => {
    const id = event.route.id ?? '';
    const currentUser = get(loggedInUser); // Read the current value of the store

    // Protect any routes under /(protected)
	if (id.includes('protected') && currentUser == null) {
        throw redirect(303, '/');
	}

	const response = await resolve(event);
	return response;
};