<template>
  <div class="flex items-center justify-between mb-6">
    <a href="#"><img :src="logoSrc" alt="logo" /></a>
    <a class="rounded-[100px] bg-warn py-4 px-10 text-2xl" href="#">我要報名</a>
  </div>
</template>

<script>
import imgUrl from '@/assets/logo.svg'
export default {
  //
  data() {
    return {
      logoSrc: imgUrl,
    }
  },
}
</script>

<style scoped></style>
