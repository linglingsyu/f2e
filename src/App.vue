<template>
  <div class="container">
    <Header></Header>
    <div class="border border-secondary">
      <section class="relative">
        <img :src="bannerImg" alt="banner" />
        <img
          class="absolute top-[63px] left-[43px]"
          :src="banner_ani"
          alt="banner_ani"
        />
        <h1
          class="absolute bottom-[204px] right-[77px] text-[48px] tracking-[.135em] text-main"
        >
          The F2E 4th 互動式網頁設計
        </h1>
      </section>
      <section class="bg-[#FDF7E8] py-[88px] px-[220px] text-center">
        <div class="flex flex-col gap-y-10">
          <h2 class="text-[32px] tracking-[.15em]">你是否也遇到以下問題?</h2>
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
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import banner from '@/assets/banner.png'
import banner_ani from '@/assets/banner-ani.svg'
export default {
  components: {
    Header,
  },
  data() {
    return {
      bannerImg: banner,
      banner_ani: banner_ani,
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
