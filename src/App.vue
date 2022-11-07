<template>
  <Header></Header>
  <!-- <div class="container"> -->

  <section class="overflow-hidden bg-Orange-light pt-[65px]">
    <!-- <img :src="bannerImg" alt="banner" />
    <img
      class="absolute top-[63px] left-[43px]"
      :src="banner_ani"
      alt="banner_ani"
    /> -->
    <h1 class="flex flex-col gap-y-4 text-center text-Black900">
      <span class="text-stroke text-[40px] tracking-widest text-transparent"
        >4th</span
      >
      <span
        class="text-stroke -mt-2 text-[80px] tracking-widest text-transparent"
        >The F2E</span
      >
      <span class="text-[52px] tracking-widest">互動式網頁設計</span>
      <span class="text-[32px] font-medium tracking-widest"
        >前端 & UI 修煉精神時光屋</span
      >
    </h1>

    <div class="text-center">
      <a
        class="relative flex border border-black bg-white p-3 tracking-widest after:hover:h-full after:hover:w-full after:hover:translate-x-1 after:hover:translate-y-1 after:hover:bg-black"
        href="#"
        >點擊立刻報名<img :src="imgUrl.arrowRight" alt="rightArrow"
      /></a>
    </div>

    <div class="mt-[216px] flex gap-x-[30px]">
      <span class="text-[80px] text-white">TheF2E</span>
      <span class="text-[80px] text-white">TheF2E</span>
      <span class="text-[80px] text-white">TheF2E</span>
      <span class="text-[80px] text-white">TheF2E</span>
      <span class="text-[80px] text-white">TheF2E</span>
      <span class="text-[80px] text-white">TheF2E</span>
    </div>
  </section>
  <section class="bg-[#FDF7E8] py-[88px] px-[220px] text-center">
    <div class="flex flex-col gap-y-10">
      <h2 class="text-[32px] tracking-widest">你是否也遇到以下問題?</h2>
      <div class="border border-secondary bg-white py-3">
        羨慕別人的酷酷網頁動畫？
      </div>
      <div class="border border-secondary bg-white py-3">
        滿足不了同事的許願？
      </div>
      <div class="border border-secondary bg-white py-3">
        動畫技能樹太雜無從下手？
      </div>
    </div>
  </section>

  <!-- </div> -->
</template>

<script>
import Header from './components/Header.vue'

import arrowRight from '@/assets/Union.svg'
import star from '@/assets/banner/star1.png'

export default {
  components: {
    Header,
  },
  data() {
    return {
      // bannerImg: banner,
      imgUrl: {
        arrowRight: arrowRight,
        star: star,
      },
    }
  },
}
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa); */
/* } */
</style>
