<template>
  <div class="container">
    <Nav />
      <div>
        <div v-for="verse in surah.data.verses" :key="verse.text.arab" class="bg-gray-900 border border-transparent py-5 px-4 rounded-xl m-4 text-right">
          <div class="object-left-top py-1 pr-4 pl-2 w-10 rounded-md bg-gray-700 text-white font-medium">{{verse.number.inSurah}}</div>
          <h3 class="arabic pt-2 pb-3 text-white tracking-wide">{{verse.text.arab}}</h3>
          <h3 class="text-left text-yellow-600">{{verse.text.transliteration.en}}</h3>
          <!-- text-yellow-600 bg-gray-800 rounded-md py-3 px-3 -->
          <h3 class="font-medium text-left text-white"><i>{{verse.translation.id}}</i></h3>
        </div>
      </div>
  </div>  
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    const surah = await $axios.$get('/surah/' + params.id)
    return {surah}
  }
}
</script>

<style scoped>
.arabic {
  font-size: 30px;
  font-family:'Times New Roman', Times, serif
}
</style>