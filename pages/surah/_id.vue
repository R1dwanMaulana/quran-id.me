<template>
  <div class="container">
    <HeaderNav />
      <div class="pt-16">
        <div v-for="verse in surah.data.preBismillah" :key="verse.text" class="bg-page border-gray-600 px-4 text-center">
          <h3 class="max-w-lg pt-2 text-yellow-600 leading-relaxed font-arabic text-4xl tracking-normal">{{verse.arab}}</h3>
        </div>
        <!-- <div>{{surah.preBismillah.text.arab}}</div> -->
        <div v-for="verse in surah.data.verses" :key="verse" class="bg-page border-gray-600 py-5 px-4 border-t-2 text-right">
          <div class="object-left-top py-1 pr-4 pl-2 w-10 rounded-md bg-gray-700 text-white font-medium">{{verse.number.inSurah}}</div>
          <h3 class="max-w-lg pt-2 pb-3 text-white leading-relaxed font-arabic text-4xl tracking-normal">{{verse.text.arab}}</h3>
          <div class="text-left">

              <audio :src="verse.audio.primary" controls="" v-on:play="state = 'Bermain'" v-on:pause="state = 'Berhenti Sejenak'" v-on:ended="state = 'Berhenti'">
              </audio>

              <div @click="clickShowTafsir(verse.tafsir)" class="cursor-pointer focus:outline-none font-normal inline-flex items-center py-2">
                <span class="mr-1 text-gray-400">Tafsir</span>
                <img src="/arrow-down.svg" alt="">
              </div>

              <div @click="clickShow(verse.text.arab)" class="cursor-pointer focus:outline-none font-normal inline-flex items-center py-2">
                <span class="mr-1 ml-3 text-gray-400 cursor-pointer">Arti</span>
                <img src="/arrow-down.svg" alt="">
              </div>
         
              <ul v-show="showTranslate[verse.text.arab]" class="pb-3 text-gray-700 pt-1">
                <li><a class="max-w-lg bg-transparent text-white py-2 block whitespace-no-wrap">{{verse.translation.id}}</a></li>
              </ul>
              <ul v-show="showTafsir[verse.tafsir]" class="pb-3 text-gray-700 pt-3">
                <li class="text-white font-semibold">Tafsir dari kemenag:</li>
                <li><a class="max-w-lg bg-transparent text-white py-2 block whitespace-no-wrap">{{verse.tafsir.id.long}}</a></li>
              </ul>
          </div>
        </div>
      </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      showTranslate: {},
      showTafsir: {},
      state: 'Berhenti',
      // verse: {}
    }
  },
  async asyncData({$axios, params}) {
    const surah = await $axios.$get('/surah/' + params.id)
    return {surah}
  },
  methods: {
    clickShow(id) {
      console.log('before', this.showTranslate)
      if(this.showTranslate[id]) {
        // object baru
        this.showTranslate = {
          // object lama dipanggil lagi, lalu id nya di set ke false
          ...this.showTranslate, 
          [id]: false
        }
      } else {
        this.showTranslate = {
          ...this.showTranslate, 
          [id]: true
        }
      }
      console.log('after', this.showTranslate)
    },

    clickShowTafsir(id) {
      if(this.showTafsir[id]) {
        this.showTafsir = {
          ...this.showTafsir, 
          [id]: false
        }
      } else {
        this.showTafsir = {
          ...this.showTafsir, 
          [id]: true
        }
      }
    }
  }
}
</script>

<style scoped>
.bg-page {
  background-color: #151b26;
}
</style>