<template>
    <nav class="fixed bottom-0 inset-x-0 bg-gray-900 text-gray-500 text-xs uppercase font-serif flex jestify-between font-rubik">
        <nuxt-link to="/" class="nav-link w-full block py-2 px-2 text-center hover:bg-gray-800 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-6 mb-1 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
</svg>
            Surat
        </nuxt-link>
        <nuxt-link to="/tahlil" class="nav-link w-full block py-2 px-2 text-center hover:bg-gray-800 transition duration-300">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-7 mb-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
            Doa Tahlil
        </nuxt-link>
        <!-- <nuxt-link to="/dailydoa" class="nav-link w-full block py-2 px-2 text-center hover:bg-gray-800 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-6 mb-1 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
</svg>
            Doa Harian
        </nuxt-link> -->
        <nuxt-link to="/about" class="nav-link w-full block py-2 px-2 text-center hover:bg-gray-800 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-6 mb-1 mx-auto" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
</svg>
            Tentang
        </nuxt-link>
    </nav>
</template>

<style scoped>
    a.nuxt-link-exact-active {
        color: #F87171;
    }
</style>