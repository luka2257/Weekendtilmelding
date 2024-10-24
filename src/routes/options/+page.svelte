<!-- Padding to give a percentage distance from the top -->
<div class="h-1/6"></div>
<!-- Content -->
<div class="flex items-center flex-col w-1/2">
    <div class="flex gap-2 mb-7">
        <h2 class="font-semibold text-sm" >Værelsesnummer 436.</h2>
        <a class="text-blue-700" href="www.google.com">Log ud</a>
    </div>

    <div class="flex justify-between w-full">
        <div class="font-sans">
            <button class="bg-blue-500 text-white pl-2 pr-2 rounded-xl h-max w-max text-xs font-semibold">Gem</button>
            <button class="bg-blue-500 text-white pl-2 pr-2 rounded-xl h-max w-max text-xs font-semibold">Fjern gæst</button>
        </div>
        <div class="flex gap-1">
            <label for="ikkeTilstede">Ikke tilstede i weekenden</label>
            <input type="radio" id="ikkeTilstede" name="ikkeTilstede" value="HTML" />
        </div>
        <div class="flex gap-1">
            <label for="tilstede">Tilstede i weekenden</label>
            <input type="radio" id="tilstede" name="tilstede" value="HTML" />
        </div>
    </div>

    <!-- Grid with 16 columns -->
    <div class="grid-container w-full">
        <!-- Table headers -->
        <div class="col-span-4 text-center gridItemColor gridItemBorder">Navn</div>
        <div class="col-span-4 text-center gridItemColor gridItemBorder">Nr</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Fre <strong class="font-semibold font-sm">Af</strong></div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Fre Ka</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Lør Mo</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Lør <strong class="font-semibold font-sm">Mi</strong></div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Lør Ef</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Lør <strong class="font-semibold font-sm">Af</strong></div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Lør Ka</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Søn Mo</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Søn <strong class="font-semibold font-sm">Mi</strong></div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Søn Ef</div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Søn <strong class="font-semibold font-sm">Af</strong></div>
        <div class="col-span-1 text-center gridItemColor gridItemBorder">Søn Ka</div>
        <!-- Radio buttons and input fields -->
        <div class="col-span-4 text-center"><input class="w-full gridItemBorder" type="text"></div>
        <div class="col-span-4 text-center"><input class="w-full gridItemBorder" type="text"></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="FreAf"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="FreKa"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="LørMo"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="LørMi"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="LørEf"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="LørAf"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="LørKa"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="SønMo"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="SønMi"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="SønEf"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="SønAf"></div></div>
        <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="radio" name="SønKa"></div></div>
        <!-- Last row -->
        <div class="col-span-4 text-center gridItemColor gridItemBorder">Gæsters navne:</div>
        <div class="col-span-12"></div>
        <div class="col-span-4"></div>
    </div>
</div>


<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(20, 1fr); /* Creates 16 equal-width columns */
        gap: 2px; /* Optional: gap between grid items */
    }

    .gridItemColor {
        background-color: #888888;
    }

    .gridItemBorder {
        border-width: 2px;
        border-color: #3b3b3b;
    }
</style>