<template>
  <div class="container">
    <Nav />
    <div>
      <h3 class="bg-gray-800 py-9 px-4 rounded-md m-4 text-white font-semibold shadow-md">Aplikasi Qur'an terjemahan Bahasa Indonesia lengkap dengan Tafsir</h3>
      <br>
      <hr>
      <input 
        v-model="searchSurah"
        type="search"
        placeholder="Cari surah yang ingin dibaca"
        @keyup="getSurah"
        class="mt-8 py-3 px-3 w-11/12 m-3 truncate leading-5 font-medium placeholder-gray-400 border-transparent text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 border border-gray-600 focus:border-blue-500 rounded-md focus:outline-none bg-gray-800"
      />
        <p class="text-left m-4 font-medium text-white">List Surah :</p>
        <div v-for="surah in surah" :key="surah.number" class="bg-primary h-auto text-left w-auto py-6 px-4 m-4 rounded-xl border border-gray-600">
          <div class="object-right-top py-1 pr-4 pl-2 w-10 mb-5 rounded-md bg-gray-500 text-white font-medium text-right">{{surah.number}}</div>
          <ul>
            <li><p class="text-3xl text-white font-arabic">{{surah.name.short}}</p></li>
            <li><p class="text-lg text-white">{{surah.name.transliteration.id}} - {{surah.revelation.id}}</p></li>
            <li><p class="text-md text-yellow-600"><i>({{surah.name.translation.id}} : {{surah.numberOfVerses}} ayat)</i></p></li>
            <div class="surah inline">
              <button @click="$router.push({name: 'surah-id', params:{id:surah.number},})"
                class="mt-3 btn-click focus:outline-none bg-blue-500 text-white shadow-sm hover:shadow-none rounded-md font-normal py-2 px-4 rounded-md"
              >
                Baca surah
              </button>
            </div>
            <div class="dropdown inline">
              <button @click="clickShow(surah.number)" class="bg-gray-200 focus:outline-none shadow-sm hover:shadow-none rounded-md text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">Muqaddimah</span>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg> -->
                <img src="/arrow-down-black.svg" alt="">
              </button>
              <ul v-show="showMuqaddimah[surah.number]" class="pb-3 text-gray-700 pt-1">
                <li><a class="rounded-md bg-gray-800 text-white py-2 px-4 block whitespace-no-wrap">{{surah.tafsir.id}}</a></li>
              </ul>
            </div>
          </ul>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  // async asyncData({ $axios }) {
  //   const surah = await $axios.$get('/surah')
  //   return { surah }
  // },
  data() {
    return {
      showMuqaddimah: {},
      surah: [],
      searchSurah: ''
    }
  },
  methods: {
    getSurah() {
      fetch("https://api.quran.sutanlab.id/surah")
        .then(response => response.json())
        .then(res => {
          if(this.searchSurah) {
            this.surah = res.data.filter(surah => 
              surah.name.transliteration.id.toLowerCase().includes(this.searchSurah.toLowerCase())
            );
          } else {
              this.surah = res.data;
          }
        });
    },
    clickShow(id) {
      console.log('before', this.showMuqaddimah)
      if(this.showMuqaddimah[id]) {
        // object baru
        this.showMuqaddimah = {
          // object lama dipanggil lagi, lalu id nya di set ke false
          ...this.showMuqaddimah, 
          [id]: false
        }
      } else {
        this.showMuqaddimah = {
          ...this.showMuqaddimah, 
          [id]: true
        }
      }
      console.log('after', this.showMuqaddimah)
    }
  },
  created() {
    this.getSurah()
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  padding-bottom: 70px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.arabic {
  font-family:'Times New Roman', Times, serif
}

.bg-primary {
  background-color: #1a2025;
}

</style>
