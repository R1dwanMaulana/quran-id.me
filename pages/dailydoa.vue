<template>
    <div class="container">
        <Nav />
        <div>
            <h3 class="bg-gray-800 py-9 px-20 rounded-md m-4 text-white font-semibold shadow-md">Kumpulan Doa Harian terjemahan Bahasa Indonesia</h3>
            <br>
            <hr>
            <input 
                v-model="searchDoa"
                type="search"
                placeholder="Cari doa hari ini"
                @keyup="getDoa"
                class="mt-8 py-3 px-3 w-11/12 m-3 truncate leading-5 font-medium placeholder-gray-400 border-transparent text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 border border-gray-600 focus:border-blue-500 rounded-md focus:outline-none bg-gray-800"
            />
            <p class="text-left m-4 font-medium text-white">List Doa Harian :</p>
            <div v-for="dailydoa in doaharian" :key="dailydoa.data" class="bg-primary h-auto text-left w-11/12 py-5 px-4 m-4 rounded-xl border border-gray-600">
                
                    <p @click="clickShow(dailydoa.title)" class="text-lg items-center text-white inset-x-0 flex justify-between">{{dailydoa.title}} <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></p>
                
                    <!-- <div class="dropdown"> -->
                        <ul v-show="showDoa[dailydoa.title]" class="pb-3 text-gray-700 pt-1">
                            <li><p class="max-w-lg rounded-md text-white py-3 px-4 block whitespace-no-wrap text-right text-3xl leading-loose font-arabic tracking-wide">{{dailydoa.arabic}}</p>
                            <p class="text-md mb-2 mt-2 pr-3 pl-3 text-yellow-600">{{dailydoa.latin}}</p>
                            </li>
                            <li class="max-w-lg text-left text-lg whitespace-no-wrap text-white pr-3 pl-3 py-2 rounded-md">Artinya : <i>{{dailydoa.translation}}</i></li>
                        </ul>
                    <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Doa Harian - Quran-id | Aplikasi Baca Al-Quran praktis dari browser',
        meta: [
            { hid: "description", name: "description", content: "Kumpulan doa harian dilengkapi dengan arti." },
            { name: "format-detection", content: "telephone=no" },
	        { name: "author", content: "Quran-id"},
            { name: "description", content: "Kumpulan doa harian dilengkapi dengan arti." },
            { property: "og:title", content: "Doa Harian - Quran-id | Aplikasi Baca Al-Quran praktis dari browser" },
            { property: "og:description", content: "Kumpulan doa harian dilengkapi dengan arti." },
            { property: "og:image", content: "/meta-image.png"},
        ],
    },
    data() {
        return {
            showDoa: {},
            doaharian: [],
            searchDoa: ''
        }
    },
    methods: {
        getDoa() {
            fetch("https://islamic-api-indonesia.herokuapp.com/api/data/json/doaharian/")
            .then(response => response.json())
            .then(res => {
                if(this.searchDoa) {
                    this.doaharian = res.result.data.filter(doaharian => 
                        doaharian.title.toLowerCase().includes(this.searchDoa.toLowerCase())
                );
                } else {
                    this.doaharian = res.result.data;
                }
            });
        },
        clickShow(id) {
            if(this.showDoa[id]) {
                this.showDoa = {
                ...this.showDoa, 
                [id]: false
                }
            } else {
                this.showDoa = {
                ...this.showDoa, 
                [id]: true
                }
            }
        }
    },
    created() {
        this.getDoa()
    }
}

</script>