<template>
  <Header></Header>
  
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
