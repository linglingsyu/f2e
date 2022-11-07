<template>
  <div
    class="mb-6 flex items-center justify-between border-b border-b-black px-8 py-6"
  >
    <a href="#"><img :src="logoSrc" alt="logo" /></a>
    <div class="relative">
      <a class="lg:hidden" @click.prevent="isMobile = !isMobile" href="#">
        <img :src="menu" alt="menu"
      /></a>
      <Transition>
        <ul
          class="absolute right-0 top-8 flex min-h-[200px] w-[150px] flex-col gap-y-6 rounded bg-slate-50 px-4 py-6 text-center lg:hidden"
          v-if="isMobile"
        >
          <li><a class="text-Green-dark" href="#">關卡資訊</a></li>
          <li><a class="text-Green-dark" href="#">作品列表</a></li>
          <li><a class="text-Green-dark" href="#">攻略資源</a></li>
          <li><a class="text-Green-dark" href="#">求職專區</a></li>
          <li>
            <a class="rounded-[3px] bg-Green-dark p-[10px] text-white" href="#"
              >我要報名</a
            >
          </li>
        </ul>
      </Transition>
    </div>
    <ul class="hidden gap-x-9 lg:flex">
      <li><a class="text-Green-dark" href="#">關卡資訊</a></li>
      <li><a class="text-Green-dark" href="#">作品列表</a></li>
      <li><a class="text-Green-dark" href="#">攻略資源</a></li>
      <li><a class="text-Green-dark" href="#">求職專區</a></li>
      <li>
        <a class="rounded-[3px] bg-Green-dark p-[10px] text-white" href="#"
          >我要報名</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import imgUrl from '@/assets/logo.svg'
import menu from '@/assets/menu.svg'
export default {
  //
  data() {
    return {
      isMobile: false,
      logoSrc: imgUrl,
      menu: menu,
    }
  },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
