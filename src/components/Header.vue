<template>
  <!-- 手機板選單 -->
  <transition>
    <div
      class="fixed top-0 left-0 bottom-0 right-0 z-10 block bg-secondary/80 md:hidden"
      v-if="isMobile"
    ></div>
  </transition>
  <img
    src="@/assets/bg/bg_menuSide.png"
    class="fixed top-0 left-0 hidden h-screen w-5 object-cover md:block"
    alt="bg_menuSide.png"
    v-if="!isMobile"
  />
  <transition>
    <div
      class="fixed top-0 left-0 z-20 h-full w-2/6 md:w-[135px]"
      v-if="isMobile"
    >
      <ul
        class="flex h-full w-full flex-col flex-wrap items-center gap-y-10 bg-main px-5 pt-10 text-center text-t18 text-secondary"
      >
        <li>
          <a
            class="flex flex-col flex-wrap items-center justify-center"
            href="#"
            ><img
              class="h-[60px] w-[60px] object-cover"
              src="@/assets/ic/ic_menu_info.png"
              alt="ic_menu_info.png"
            />
            <span>關卡資訊</span></a
          >
        </li>
        <li>
          <a
            class="flex flex-col flex-wrap items-center justify-center"
            href="#"
            ><img
              class="h-[60px] w-[60px] object-cover"
              src="@/assets/ic/ic_menu_list.png"
              alt="ic_menu_list.png"
            />
            <span>作品列表</span></a
          >
        </li>
        <li>
          <a
            class="flex flex-col flex-wrap items-center justify-center"
            href="#"
            ><img
              class="h-[60px] w-[60px] object-cover"
              src="@/assets/ic/ic_menu_strategy.png"
              alt="ic_menu_strategy.png"
            />
            <span>攻略資源</span></a
          >
        </li>
        <li>
          <a
            class="flex flex-col flex-wrap items-center justify-center"
            href="#"
            ><img
              class="h-[60px] w-[60px] object-cover"
              src="@/assets/ic/ic_menu_job.png"
              alt="ic_menu_job.png"
            />
            <span>求職專區</span></a
          >
        </li>
      </ul>
      <img
        @click="isMobile = !isMobile"
        class="absolute top-3 -right-10 h-10 w-10 object-cover md:top-1/2"
        src="@/assets/btn/btn_burger_close.png"
        alt="btn_burger_close.png"
      />
    </div>
  </transition>
  <img
    @click="isMobile = !isMobile"
    class="fixed top-3 left-0 h-10 w-10 object-cover md:top-1/2 md:left-5"
    src="@/assets/btn/btn_burger_open.png"
    alt="btn_burger_open.png"
  />
  <!-- 手機板選單 End -->
  <a class="fixed top-3 right-3" href="https://2022.thef2e.com/users">
    <img
      class=" h-10 w-10 object-cover"
      src="@/assets/btn/btn_user.png"
      alt="btn_user.png"
    />
  </a>
</template>

<script>
export default {
  //
  data() {
    return {
      isMobile: true,
    }
  },
  methods: {
    toggoleMenu() {},
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
