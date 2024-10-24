

export const actions = {
    indsendTilmelding: async ({ request }) => {
        const data = request.formData();
        console.log(data);
    },
    gørIngeting: async ({ request }) => {
        const data = request.formData();
        console.log("Gør ingenting: " + data);
    }
}