import { isUser } from '$lib/server/bruger.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request }) => {
      const data = await request.formData();
      const værelse: string = String(data.get("værelse"));
      const adgangskode: string = String(data.get("adgangskode"));
      const isRegisteredUser: boolean = isUser(værelse, adgangskode);
      if (isRegisteredUser) {
        redirect(303, "/options");
      }
    }
  };