<template>
  <div class="container">
    <Nav />
      <div>
        <div v-for="verse in surah.data.verses" :key="verse.text.arab" class="bg-gray-200 py-9 px-4 rounded-lg m-4 text-right">
          <div class="object-left-top py-1 pr-4 pl-2 w-10 rounded-md bg-gray-700 text-white font-medium">{{verse.number.inSurah}}</div>
          <h3 class="arabic pt-2">{{verse.text.arab}}</h3>
          <h3>{{verse.text.transliteration.en}}</h3>
          <h3 class="text-yellow-600 bg-gray-800 rounded-md py-3 px-3 font-medium text-left">{{verse.translation.id}}</h3>
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
  font-size: 25px;
  font-family:'Times New Roman', Times, serif
}
</style>