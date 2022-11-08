<template>
  <Header></Header>
  <!-- <div class="container"> -->
  <a
    class="relative inline-flex border border-black bg-white p-3 tracking-widest after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:bg-black hover:after:translate-x-1 hover:after:translate-y-1"
    href="#"
    >點擊立刻報名</a
  >
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
        class="relative isolate inline-flex border border-black bg-white p-3 tracking-widest after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black hover:after:translate-x-1 hover:after:translate-y-1"
        href="#"
        >點擊立刻報名<img :src="imgUrl.arrowRight" alt="rightArrow"
      /></a>

      <!-- <a
        class="relative inline-flex border border-black bg-white p-3 tracking-widest after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:bg-black hover:after:translate-x-1 after:hover:translate-y-1"
        href="#"
        >點擊立刻報名</a
      > -->
    </div>
    <!-- 
    <div
      class="pl-[121px] pb-[272px] font-[Georama] text-[52px] italic tracking-widest"
    >
      FRONT END
    </div> -->
    <div class="mt-[216px] flex gap-x-[30px] text-[80px] text-white">
      <span>TheF2E</span>
      <span>TheF2E</span>
      <span>TheF2E</span>
      <span>TheF2E</span>
      <span>TheF2E</span>
      <span>TheF2E</span>
    </div>
  </section>
  <section class="">
    <div class="h-20 bg-Yellow"></div>
    <div class="mt-[76px] flex items-center justify-center gap-x-[117px]">
      <div class="h-[33px] w-[33px] rounded-full bg-Yellow-dark"></div>
      <div class="h-[33px] w-[33px] rounded-full bg-Yellow-dark"></div>
      <div class="h-[33px] w-[33px] rounded-full bg-Yellow-dark"></div>
    </div>
    <div class="relative min-h-[810px]">
      <div
        class="flex min-h-[810px] flex-wrap items-center justify-between px-[110px] text-right text-[52px] text-white"
      >
        <div class="flex basis-full justify-end">
          <h2
            class="relative rounded-[20px] bg-Green-dark p-6 leading-tight after:absolute after:top-6 after:left-6 after:-z-10 after:block after:h-full after:w-full after:rounded-[20px] after:bg-Green-light"
          >
            “動畫技能樹太雜<br />無從下手？”
          </h2>
        </div>
        <div class="flex basis-full justify-center">
          <h2
            class="relative rounded-[20px] bg-Yellow-dark p-6 leading-tight after:absolute after:top-6 after:left-6 after:-z-10 after:block after:h-full after:w-full after:rounded-[20px] after:bg-Yellow"
          >
            “羨慕別人的酷酷<br />網頁動畫？”
          </h2>
        </div>
        <div class="flex basis-full justify-start">
          <h2
            class="relative rounded-[20px] bg-Orange-dark p-6 leading-tight after:absolute after:top-6 after:left-6 after:-z-10 after:block after:h-full after:w-full after:rounded-[20px] after:bg-Orange"
          >
            “滿足不了同事的<br />許願？”
          </h2>
        </div>
      </div>
      <img
        class="absolute bottom-12 right-0"
        :src="imgUrl.circle"
        alt="circle"
      />
    </div>
    <div class="h-20 bg-Yellow"></div>
  </section>

  <section class="bg-Green-light">
    <h3
      class="text-center text-[80px] font-black tracking-widest text-[#4b4b4b]"
    >
      互動式網頁設計
    </h3>
    <img :src="imgUrl.bg1" alt="bg" />
  </section>

  <!-- </div> -->
</template>

<script>
import Header from './components/Header.vue'

import arrowRight from '@/assets/Union.svg'
import star from '@/assets/banner/star1.png'
import bg2 from '@/assets/banner/circle.svg'
import Group31 from '@/assets/banner/Group31.png'

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
        circle: bg2,
        bg1: Group31,
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
