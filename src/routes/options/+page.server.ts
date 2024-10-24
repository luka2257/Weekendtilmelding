import { testStore } from '$lib/server/stores.js';

let testStoreValue: string = "";

testStore.subscribe((value: string) => {
    testStoreValue = value;
});

export const actions = {
    indsendTilmelding: async ({ request }) => {
        const data = await request.formData();
        console.log("Guest message: " + data.get("guestMessage"));
        console.log(data.get("erTilstede"));
    },
    fjernGæst: async ({ request }) => {

    }
};