<script>
  import { goto } from "$app/navigation";
</script>

<!-- Padding to give a percentage distance from the top -->
<div class="h-1/6"></div>
<!-- Content of login page -->
<div class="flex flex-col w-80 gap-1">
  <h1 class="font-bold text-xl">Login: Weekendtilmelding</h1>
  <div class="flex justify-between">
    <p>Værelsesnummer:</p>
    <input class="border rounded-sm border-gray-400" type="text" />
  </div>
  <div class="flex justify-between">
    <p>Adgangskode:</p>
    <input class="border rounded-sm border-gray-400" type="text" />
  </div>
  <button
    on:click={() => goto("/options")}
    class="bg-gray-100 w-max pl-2 pr-2 rounded border border-gray-400 self-end"
    >Log ind</button
  >
</div>
<!-- Horizontal line below content -->
<div class="w-80 border-t border-gray-400 mt-2"></div>
