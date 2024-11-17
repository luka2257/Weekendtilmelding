<script lang="ts">
    export let data;
</script>


<h1>Brugere</h1>
{#each data.brugere as bruger}
    <div>{bruger.navn}, {bruger.værelse}, {bruger.adgangskode}</div>
{/each}
<h1 class="mt-20">Tilmeldinger</h1>
{#await data.tilmeldinger}
    Henter tilmeldinger
{:then tilmeldinger}     
    {#each tilmeldinger as tilmelding}
    <div class="mb-5">
        {JSON.stringify(tilmelding)}
    </div>
    {/each}
{/await}