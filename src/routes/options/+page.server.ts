

export const actions = {
    indsendTilmelding: async ({ request }) => {
        const data = await request.formData();
        console.log("Guest message: " + data.get("guestMessage"));
    },
    gørIngeting: async ({ request }) => {}
}