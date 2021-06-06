<template>
    <div class="container">
        <Nav />
        <div>
            <h3 class="bg-gray-800 py-9 px-4 rounded-md m-4 text-white font-semibold shadow-md">Kumpulan Doa Harian terjemahan Bahasa Indonesia</h3>
            <br>
            <hr>
            <input 
                v-model="searchDoa"
                type="search"
                placeholder="Cari doa hari ini"
                @keyup="getDoa"
                class="mt-8 py-4 px-3 w-11/12 m-3 truncate leading-5 font-medium placeholder-gray-500 border-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md shadow-md focus:outline-none focus:bg-white bg-gray-100"
            />
            <p class="text-left m-4 font-medium">List Doa Harian :</p>
            <div v-for="dailydoa in doaharian" :key="dailydoa.data" class="h-auto text-left w-11/12 py-5 px-4 m-4 rounded-xl hover:shadow-lg text-black border">
                
                    <p @click="clickShow(dailydoa.title)" class="text-lg">{{dailydoa.title}} <svg xmlns="http://www.w3.org/2000/svg" class="inline h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg></p>
                
                    <!-- <div class="dropdown"> -->
                        <ul v-show="showDoa[dailydoa.title]" class="pb-3 text-gray-700 pt-1">
                            <li><p class="rounded-md bg-white text-gray-700 py-3 px-4 block whitespace-no-wrap text-right text-3xl leading-normal">{{dailydoa.arabic}}</p>
                            <p class="text-md mb-3 mt-2">{{dailydoa.latin}}</p>
                            </li>
                            <li class="text-left text-lg whitespace-no-wrap">Artinya : <i>{{dailydoa.translation}}</i></li>
                        </ul>
                    <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
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