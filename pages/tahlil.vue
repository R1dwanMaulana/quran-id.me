<template>
    <div class="container">
        <Nav />
        <div>
            <h3 class="bg-gray-800 py-9 mx-4 px-6 rounded-md m-4 text-white font-semibold shadow-md">Doa Tahlil terjemahan Bahasa Indonesia</h3>
            <br>
            <hr>
            
            <p class="text-left m-4 font-medium text-white">List Doa Tahlil :</p>
            <div v-for="tahlil in doatahlil" :key="tahlil.data" class="bg-primary h-auto text-left w-11/12 py-5 px-4 m-4 rounded-xl border border-gray-600">
                
                    <p @click="clickShow(tahlil.id)" class="max-w-lg text-lg items-center text-white inset-x-0 flex justify-between">{{tahlil.title}} <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></p>
                
                    <!-- <div class="dropdown"> -->
                        <ul v-show="showTahlil[tahlil.id]" class="pb-3 text-gray-700 pt-1">
                            <li>
                                <p class="max-w-lg rounded-md text-white py-3 px-4 block whitespace-no-wrap text-right text-3xl leading-relaxed font-arabic tracking-wide">{{tahlil.arabic}}</p>
                            </li>
                            <li class="max-w-lg text-left text-lg whitespace-no-wrap text-white pr-3 pl-3 py-2 rounded-md">Artinya : <i>{{tahlil.translation}}</i></li>
                        </ul>
                    <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Doa Tahlil - Quran-id | Aplikasi Baca Al-Quran praktis dari browser',
        meta: [
            { hid: "description", name: "description", content: "Kumpulan doa tahlil dilengkapi dengan arti." },
            { name: "format-detection", content: "telephone=no" },
	        { name: "author", content: "Quran-id"},
            { name: "description", content: "Kumpulan doa tahli dilengkapi dengan arti." },
            { property: "og:title", content: "Doa Tahlil - Quran-id | Aplikasi Baca Al-Quran praktis dari browser" },
            { property: "og:description", content: "Kumpulan doa tahlil dilengkapi dengan arti." },
            { property: "og:image", content: "/meta-image.png"},
        ],
    },
    async asyncData() {
        const resp = await import('~/data/tahlil.json')
        return {
            doatahlil: resp.data
        }
    },
    data() {
        return {
            showTahlil: {},
            doatahlil: [],
        }
    },
    methods: {
        clickShow(id) {
            if(this.showTahlil[id]) {
                this.showTahlil = {
                ...this.showTahlil, 
                [id]: false
                }
            } else {
                this.showTahlil = {
                ...this.showTahlil, 
                [id]: true
                }
            }
        }
    }
}

</script>