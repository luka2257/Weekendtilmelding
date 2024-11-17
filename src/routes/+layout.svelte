<script>
  import "../app.css";
  export let data;
</script>

<div class="flex flex-col items-center font-serif w-screen h-screen">
  {#await data.erTilmeldt}
    <div></div>
  {:then value}
    {#if value}  
      <!-- Navigation Bar -->
      <nav class="bg-gray-800 text-white w-full fixed top-0 left-0 z-50">
        <div class="wrapper-width mx-auto flex justify-between items-center py-3 px-4">
          <!-- Logo -->
          <div class="text-lg font-bold">
            <a href="/" class="hover:text-blue-400">Weekendtilmelding</a>
          </div>
          <!-- Centered Text -->
          <div class="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
            Du er tilmeldt
          </div>
          <!-- Links -->
          <ul class="flex gap-6 items-center text-sm">
            <li><a href="/tilmeld" class="hover:text-blue-400">Ny tilmelding</a></li>
            <li><a href="/display" class="hover:text-blue-400">Vis tilmeldinger</a></li>
            <li>
              <form method="POST" class="inline">
                <button formaction="?/logout" class="text-red-500 hover:text-red-700">Log Out</button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    {/if}
  {/await}
  <slot />
</div>
