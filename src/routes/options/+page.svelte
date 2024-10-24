<!-- Padding to give a percentage distance from the top -->
<div class="h-14"></div>
<!-- Horizontal line above content -->
<div class="w-11/12 border-t border-gray-400 mt-2 mb-6"></div>
<!-- Content -->
<div class="flex items-center flex-col wrapper-width">
    <div class="flex gap-2 mb-7">
        <h2 class="font-semibold text-sm" >Værelsesnummer 436.</h2>
        <a class="text-blue-700" href="/">Log ud</a>
    </div>
    <form method="POST" action="?/fjernGæst">
        <div class="flex justify-between w-full">
            <div class="font-sans">
                <button formaction="?/indsendTilmelding" class="bg-blue-600 text-white pl-2 pr-2 rounded-xl h-max w-max text-xs font-semibold">Gem</button>
                <button class="bg-blue-600 text-white pl-2 pr-2 rounded-xl h-max w-max text-xs font-semibold">Fjern gæst</button>
            </div>
            <div class="flex gap-1">
                <label for="ikkeTilstede">Ikke tilstede i weekenden</label>
                <input type="radio" id="ikkeTilstede" name="erTilstede" value={false} />
            </div>
            <div class="flex gap-1">
                <label for="tilstede">Tilstede i weekenden</label>
                <input type="radio" id="tilstede" name="erTilstede" value={true} />
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
            <div class="col-span-4 text-center"><input class="w-full gridItemBorder" type="text" name="name" placeholder="Skriv dit navn"></div>
            <div class="col-span-4 text-center"><input class="w-full gridItemBorder" type="text" name="roomNumber" placeholder="Skriv dit værelse nr."></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="FreAf"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="FreKa"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="LørMo"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="LørMi"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="LørEf"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="LørAf"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="LørKa"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="SønMo"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="SønMi"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="SønEf"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="SønAf"></div></div>
            <div class="col-span-1 text-center"><div class="w-full gridItemBorder"><input type="checkbox" name="SønKa"></div></div>
            <!-- Last row -->
            <div class="col-span-4 text-center gridItemColor gridItemBorder">Gæsters navne:</div>
            <div class="col-span-12"></div>
            <div class="col-span-4"></div>
        </div>

        <!-- Guests and comments section -->
        <div class="w-full flex justify-between mt-7">
            <!-- Comments -->
            <div class="flex flex-col h-56 w-5/12">
                <p>Kommentarer:</p>
                <div class="flex justify-between h-full">
                    <p>Besked:</p>
                    <textarea name="comment" class="w-72 h-full border-2 border-gray-300 rounded"></textarea>
                </div>
            </div>
            <!-- Guests -->
            <div class="flex flex-col h-56 w-5/12">
                <p>Gæster:</p>
                <div class="flex justify-between">
                    <p>Gæstens navn:</p>
                    <input type="text" name="guestName" placeholder="Hans Hansen" class="border-2 border-gray-300 rounded w-9/12">
                </div>
                <div class="flex justify-between">
                    <p>Værelses nr.:</p>
                    <input type="text" name="guestRoom" placeholder="123" class="border-2 border-gray-300 rounded w-9/12">
                </div>
                <div class="flex justify-between h-full">
                    <p>Besked:</p>
                    <textarea name="guestMessage" placeholder="Skriv hvilke dage gæsten overnatter" class="border-2 border-gray-300 rounded w-9/12"></textarea>
                </div>
            </div>
        </div>
    </form>
</div>
<!-- Horizontal line below content -->
<div class="w-11/12 border-t border-gray-400 mt-6"></div>


<style>
    .wrapper-width {
        width: 1000px;
    }

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