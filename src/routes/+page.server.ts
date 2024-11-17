import { isUser } from '$lib/server/bruger.js';
import { doesRoomExist, getUserByRoom } from '$lib/server/db/db';
import { loggedInUser } from '$lib/server/stores';
import type { Bruger } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request }) => {
      const data = await request.formData();
      const værelse: string = String(data.get("værelse"));
      const adgangskode: string = String(data.get("adgangskode"));
      const isRegisteredUser: boolean = await doesRoomExist(værelse, adgangskode);
      if (isRegisteredUser) {
        const bruger: Bruger = await getUserByRoom(værelse);
        loggedInUser.set(bruger);
        redirect(303, "/tilmeld");
      }
    }
  };