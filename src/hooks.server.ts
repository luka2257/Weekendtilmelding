import { redirect, type Handle } from '@sveltejs/kit';
import { loggedInUser } from './lib/server/stores';
import { get } from 'svelte/store';


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