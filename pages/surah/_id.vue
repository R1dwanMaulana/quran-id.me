<template>
  <div class="container">
    <HeaderNav />
      <div class="pt-16">
        <!-- <div v-for="verse in surah.data.verses" :key="verse.text.arab"> -->
        <div v-for="verse in surah.data.verses" :key="verse" class="bg-gray-900 border border-transparent py-5 px-4 rounded-xl m-4 text-right">
          <div class="object-left-top py-1 pr-4 pl-2 w-10 rounded-md bg-gray-700 text-white font-medium">{{verse.number.inSurah}}</div>
          <h3 class="pt-2 pb-3 text-white leading-loose font-arabic text-3xl tracking-wide">{{verse.text.arab}}</h3>
          <h3 class="text-left text-yellow-600">{{verse.text.transliteration.en}}</h3>

          <div class="text-left">
              <div @click="clickShowTafsir(verse.tafsir)" class="cursor-pointer focus:outline-none font-normal inline-flex items-center py-2">
                <span class="mr-1 text-gray-400">Tafsir</span>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg> -->
                <img src="/arrow-down.svg" alt="">
              </div>

              <div @click="clickShow(verse.text.arab)" class="cursor-pointer focus:outline-none font-normal inline-flex items-center py-2">
                <span class="mr-1 text-gray-400 cursor-pointer">Arti</span>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg> -->
                <img src="/arrow-down.svg" alt="">
              </div>
              <ul v-show="showTranslate[verse.text.arab]" class="pb-3 text-gray-700 pt-1">
                <li><a class="bg-transparent text-white py-2 block whitespace-no-wrap">{{verse.translation.id}}</a></li>
              </ul>
              <ul v-show="showTafsir[verse.tafsir]" class="pb-3 text-gray-700 pt-1">
                <li class="text-white font-semibold">Tafsir dari kemenang:</li>
                <li><a class="bg-transparent text-white py-2 block whitespace-no-wrap">{{verse.tafsir.id.long}}</a></li>
              </ul>
          </div>
          <!-- text-yellow-600 bg-gray-800 rounded-md py-3 px-3 -->
          <!-- <h3 class="font-medium text-left text-white"><i>{{verse.translation.id}}</i></h3> -->
        </div>
      </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      showTranslate: {},
      showTafsir: {}
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
      console.log('before', this.showTafsir)
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
      console.log('after', this.showTafsir)
    }
  }
}
</script>