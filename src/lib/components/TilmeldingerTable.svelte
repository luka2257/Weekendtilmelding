<script lang="ts">
    export let tilmeldinger;
    let showMealsDropdown = false;
    let selectedMeal = null;

    // You can initialize selectedMeal with the value you need, or manage it dynamically.
</script>

<!-- Table for tilmeldinger -->
<table class="min-w-full border-collapse">
    <thead>
        <tr class="bg-gray-800 text-white">
            <th class="py-2 px-4 border">Navn</th>
            <th class="py-2 px-4 border">Værelse</th>
            <th class="py-2 px-4 border">Tilstede</th>
            <th class="py-2 px-4 border">Meals</th>
            <th class="py-2 px-4 border">Kommentar</th>
            <th class="py-2 px-4 border">Gæst Navn</th>
            <th class="py-2 px-4 border">Gæst Værelse</th>
            <th class="py-2 px-4 border">Gæst Besked</th>
            <th class="py-2 px-4 border">Dato</th>
        </tr>
    </thead>
    <tbody>
        {#each tilmeldinger as tilmelding}
            <tr class="bg-gray-100">
                <td class="py-2 px-4 border">{tilmelding.navn}</td>
                <td class="py-2 px-4 border">{tilmelding.værelse}</td>
                <td class="py-2 px-4 border">{tilmelding.erTilstede ? 'Ja' : 'Nej'}</td>

                <!-- Hamburger-style Dropdown for Meals -->
                <td class="py-2 px-4 border">
                    <!-- Button for triggering the dropdown -->
                    <button on:click={() => showMealsDropdown = !showMealsDropdown} class="bg-white border-2 rounded p-1">
                        ☰
                    </button>

                    {#if showMealsDropdown}
                        <div class="dropdown-menu">
                            {#each Object.entries(tilmelding.meals) as [meal, value]}
                                <div 
                                    role="button"
                                    tabindex="0"
                                    on:keydown={() => {}} 
                                    class="meal-option" 
                                    on:click={() => selectedMeal = meal}
                                >
                                    {meal} - {value ? 'Ja' : 'Nej'}
                                </div>
                            {/each}
                        </div>
                    {/if}
                </td>

                <!-- Kommentar, Gæst, and Date Columns -->
                <td class="py-2 px-4 border">{tilmelding.kommentar}</td>
                <td class="py-2 px-4 border">{tilmelding.gæst.navn}</td>
                <td class="py-2 px-4 border">{tilmelding.gæst.værelse}</td>
                <td class="py-2 px-4 border">{tilmelding.gæst.besked}</td>
                <td class="py-2 px-4 border">{new Date(tilmelding.date).toLocaleDateString()}</td>
            </tr>
        {/each}
    </tbody>
</table>


<style>
    .dropdown-menu {
        position: absolute;
        background-color: white;
        border: 2px solid #ddd;
        padding: 10px;
        width: 150px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }

    .meal-option {
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .meal-option:hover {
        background-color: #f1f1f1;
    }

    button {
        background-color: white;
        border: 2px solid #ccc;
        padding: 8px;
        cursor: pointer;
        font-size: 18px;
        border-radius: 5px;
    }

    button:hover {
        background-color: #f0f0f0;
    }

    /* Ensure dropdown doesn't appear outside the table cell */
    td {
        position: relative;
    }
</style>
