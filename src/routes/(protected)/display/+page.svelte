<script lang="ts">
    import TilmeldingerTable from "$lib/components/TilmeldingerTable.svelte";
    export let data;
</script>
<div class="mt-16 w-screen">
    {#await data.tilmeldinger}
        <p>Henter tilmeldinger...</p>
    {:then tilmeldinger}
        <TilmeldingerTable {tilmeldinger}></TilmeldingerTable>
    {/await}
</div>