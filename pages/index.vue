<template>
  <div class="container">
    <Nav />
    <div>
      <h3 class="bg-gray-800 py-9 px-4 rounded-md m-4 text-white font-semibold shadow-md">Aplikasi Qur'an terjemahan Bahasa Indonesia lengkap dengan Tafsir</h3>
      <br>
      <hr>
        <p class="text-left m-4 font-medium">List Surah :</p>
        <div v-for="surah in surah.data" :key="surah.number" class="h-auto text-left w-auto py-6 px-4 m-4 rounded-lg hover:shadow-lg text-black border">
          <ul>
            <li><p>Nama Surah : {{surah.name.transliteration.id}}</p></li>
            <li><p>Diturunkan : {{surah.revelation.id}}</p></li>
            <div class="surah inline">
              <button @click="$router.push({name: 'surah-id', params:{id:surah.number},})"
                class="bg-blue-500 text-white shadow-md hover:shadow-none rounded-md font-normal py-2 px-4 rounded-md"
              >
                Baca surah
              </button>
            </div>
            <div class="dropdown inline">
              <button @click="clickShow(surah.number)" class="bg-gray-300 shadow-md hover:shadow-none rounded-md text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">Tafsir</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul v-show="showTafsir[surah.number]" class="pb-3 text-gray-700 pt-1">
                <li><a class="rounded-md bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{{surah.tafsir.id}}</a></li>
              </ul>
            </div>
          </ul>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const surah = await $axios.$get('/surah')
    return { surah }
  },
  data() {
    return {
      showTafsir: {}
    }
  },
  methods: {
    clickShow(id) {
      console.log('before', this.showTafsir)
      if(this.showTafsir[id]) {
        // object baru
        this.showTafsir = {
          // object lama dipanggil lagi, lalu id nya di set ke false
          ...this.showTafsir, 
          [id]: false
        }
      } else {
        this.showTafsir = {
          ...this.showTafsir, 
          [id]: true
        }
      }
      console.log('after', this.showTafsir)
    }
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
  padding-bottom: 100px;
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

</style>
