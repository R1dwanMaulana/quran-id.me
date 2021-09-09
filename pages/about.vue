<template>
    <div class="container-about">
        <Nav />
        <div class="m-3">
            <img src="/icon.png" alt="logo" class="mx-auto h-12 w-12 mb-3">
            <p class="text-2xl font-semibold text-center mb-10 text-white">Membaca Al-Qur'an dimanapun berada, praktis dari web browser + support install(app native)</p>
            
            <p class="text-white">Sumber data :</p>
            <div class="text-justify">
            <ul>
                <li class="text-white">
                    - <span class="text-green-600">
                        <a href="https://github.com/sutanlab/quran-api" target="_blank">Quran API
                        </a>
                    </span> 
                    dari Sutanlab untuk sumber data Al Qur'an.
                </li>  
            </ul>
            <ul>
                <li class="text-white">
                    - <span class="text-green-600">
                        <a href="https://github.com/Zhirrr/islamic-rest-api-indonesian-v2" target="_blank">Islamic Rest API Indonesia V2
                        </a>
                    </span> dari Zhirrr untuk sumber data Do'a Harian.
                </li>  
            </ul>
            <ul>
                <li class="text-white">
                    - <span class="text-green-600">
                        <a href="https://quran.kemenag.go.id/" target="_blank">Quran Kemenag
                        </a>
                    </span> dari Kemenag RI untuk sumber data tafsir surah.
                </li>  
            </ul>
            </div>

            <div class="mt-10 bg-yellow-100 border-t-4 border-yellow-400 rounded-lg px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold">Attention</p>
                <p class="text-sm">Apabila Anda ingin menyampaikan saran, kritik, dan menemukan kesalahan pada aplikasi. bisa dijelaskan di <span class="text-yellow-600"><a href="https://github.com/R1dwanMaulana/quran-id/issues/new" target="_blank">halaman Github issue</a></span></p>
                </div>
            </div>
            </div>

            <p class="font-light mt-20 text-xs text-white">Contents licensed under <span class="text-yellow-400"><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.id" target="_blank">CC BY-NC-SA 4.0.</a></span></p>
            <p class="font-light text-xs text-white">Made using <span class="text-yellow-400"><a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a></span> and  <span class="text-yellow-400"><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS.</a></span> Hosted on <span class="text-yellow-400"><a href="https://vercel.com" target="_blank">Vercel.</a></span></p>
            <p class="font-light mt-3 text-xs text-white">MIT License © 2021 - present | <span class="text-yellow-400"><a href="https://riddev.tech" target="_blank">Ridwan Maulana.</a></span></p>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Tentang - Quran-id | Aplikasi Baca Al-Quran praktis dari browser',
        meta: [
            { hid: "description", name: "description", content: "Dimulai dengan misi untuk mempermudah dalam membaca Qur'an dimanapun berada." },
            { name: "format-detection", content: "telephone=no" },
	        { name: "author", content: "Quran-id"},
            { name: "description", content: "Dimulai dengan misi untuk mempermudah dalam membaca qur'an dan memahami isi tafsir." },
            { property: "og:title", content: "Tentang - Quran-id | Aplikasi Baca Al-Quran praktis dari browser" },
            { property: "og:description", content: "Dimulai dengan misi untuk mempermudah dalam membaca qur'an dan memahami isi tafsir." },
            { property: "og:image", content: "/meta-image.png"},
        ],
    },
}
</script>

<style scoped>
.container-about {
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: 100px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>