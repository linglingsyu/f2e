<template>
  <Header></Header>
  <section class="relative h-full min-h-[950px] overflow-hidden">
    <div class="flex h-full flex-col items-center justify-center pt-3">
      <img
        class="mb-8 w-[133px]"
        src="@/assets/logo/logo_text.png"
        alt="logo_text.png"
      />
      <img class="mb-4 w-[253px]" src="@/assets/logo/logo.png" alt="logo.png" />
      <h1
        class="relative z-10 mb-5 rounded-[100px] bg-red px-4 py-1 text-t20 text-white"
      >
        互動式網頁設計
      </h1>
      <ul class="mb-9 flex flex-col gap-y-5">
        <li
          class="text-center font-bold"
          v-for="(item, index) of people"
          :key="'people' + index"
        >
          <div class="mb-2 text-t20 text-main">{{ item.name }}</div>
          <div
            class="flex items-center justify-center rounded-[40px] bg-main py-1 px-5 text-t18 text-white"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_71)">
                <path
                  d="M15 18.3333C18.6819 18.3333 21.6667 15.3486 21.6667 11.6667C21.6667 7.98477 18.6819 5 15 5C11.3181 5 8.33337 7.98477 8.33337 11.6667C8.33337 15.3486 11.3181 18.3333 15 18.3333Z"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 35V31.6667C5 29.8986 5.70238 28.2029 6.95262 26.9526C8.20286 25.7024 9.89856 25 11.6667 25H18.3333C20.1014 25 21.7971 25.7024 23.0474 26.9526C24.2976 28.2029 25 29.8986 25 31.6667V35"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.2556 17.4999C29.0353 17.0659 29.7251 16.4769 30.2794 15.7628C31.1871 14.5934 31.6798 13.1552 31.6798 11.675C31.6798 10.1947 31.1871 8.75649 30.2794 7.58714C29.552 6.64996 28.5911 5.92819 27.5 5.4895"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 35V31.6667C34.9915 30.1953 34.4965 28.768 33.5921 27.6073C32.6877 26.4467 31.4247 25.6178 30 25.25"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_71">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {{ item.people }}
          </div>
        </li>
      </ul>
      <div class="relative flex flex-wrap items-center justify-center">
        <img
          class="w-[112px]"
          src="@/assets/character/character_f2e.gif"
          alt="character_f2e.gif"
        />
        <img
          class="w-[118px]"
          src="@/assets/character/character_ui.gif"
          alt="character_ui.gif"
        />
        <img
          class="w-[112px]"
          src="@/assets/character/character_team.gif"
          alt="character_team.gif"
        />
        <img
          class="absolute bottom-0 left-0"
          src="@/assets/main/road.png"
          alt="road.png"
        />

        <div class="absolute -right-3 bottom-[220px]">
          <div class="text-center text-[14px] tracking-wider text-red">
            Ready?
          </div>
          <div class="relative">
            <img
              class="w-[120px]"
              src="@/assets/main/ready_frame.png"
              alt="ready_frame.png"
            />
            <div
              class="absolute top-1/2 left-[13.5px] flex -translate-y-1/2 justify-between gap-x-2"
            >
              <img
                class="w-[21px]"
                src="@/assets/main/ready_3.png"
                alt="ready_3.png"
              />
              <img
                class="w-[21px]"
                src="@/assets/main/ready_2.png"
                alt="ready_2.png"
              />
              <img
                class="w-[21px]"
                src="@/assets/main/ready_1.png"
                alt="ready_1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex min-h-[72px] w-full items-center justify-center bg-[url('@/assets/bg/bg_talking_c.png')] bg-cover text-main text-t24"
      >
        你是否也有以下困擾？
      </div>
    </div>

    <img
      class="absolute top-[441px] left-0 w-[113px] -translate-x-3"
      src="@/assets/bg/bg_decorate_01.png"
      alt="bg_decorate_01.png"
    />
    <img
      class="absolute top-[440px] right-0 w-[127px] translate-x-6"
      src="@/assets/bg/bg_decorate_05.png"
      alt="bg_decorate_05.png"
    />
  </section>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      people: [
        {
          name: '前端工程師',
          people: 920,
        },
        {
          name: 'UI設計師',
          people: 110,
        },
        {
          name: '團體組',
          people: 41,
        },
      ],
    }
  },
}
</script>

<style scoped>
svg {
  width: 22px;
  height: 22px;
}
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
