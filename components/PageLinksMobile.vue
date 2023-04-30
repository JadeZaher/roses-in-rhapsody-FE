<template>
  <div
    class="grid place-items-center duration-500 md:hidden bg-white"
    :class="[
      state.showLinks
        ? ' h-[90vh]  opacity-100 '
        : ' w-0 h-[0vh] pointer-events-none  opacity-0',
    ]"
  >
    <div
      class="delay-500"
      :class="[
        state.showLinks
          ? ' flex flex-col h-full w-4/5 absolute gap-[6vh] justify-center duration-500 translate-x-[-8%]  opacity-100 '
          : ' w-[0%] h-[0%] absolute pointer-events-none  delay-[-600ms] opacity-0 ',
      ]"
      @click="handleShowLinks"
    >
      <NuxtLink to="/" class="font-semibold text-header text-black"
        >Home</NuxtLink
      >
      <NuxtLink class="font-semibold text-header text-black" to="/about"
        >About</NuxtLink
      >
      <NuxtLink class="font-semibold text-header text-black" to="/families"
        >Families</NuxtLink
      >
      <NuxtLink class="font-semibold text-header text-black" to="/partners"
        >Partners</NuxtLink
      >
      <NuxtLink class="font-semibold text-header text-black" to="/blog"
        >Blog</NuxtLink
      >
    </div>
  </div>
  <div
    @click="handleShowLinks"
    class="w-[40px] h-[40px] p-1 border-2 border-rose-200 cursor-pointer rounded-md md:hidden grid place-items-center"
  >
    <div
      class="bg-black w-[80%] h-[2px] rounded-md duration-300"
      :class="[state.showLinks ? ' rotate-45 translate-y-[8px] ' : '']"
    />
    <div
      class="bg-black w-[80%] h-[2px] rounded-md duration-300"
      :class="[state.showLinks ? 'rotate-[-45deg]  translate-y-[-6px] ' : '']"
    />
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  interface ManageState {
    showLinks: boolean;
  }

  const state: ManageState = reactive({ showLinks: false });

  const handleShowLinks = () => {
    state.showLinks = !state.showLinks;
  };

  onMounted(() => {
    if (process.client) {
      var prevScrollpos = window.scrollY;
      window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar')!.style.top = '.75rem';
          state.showLinks = false;
        } else {
          document.getElementById('navbar')!.style.top = '-20rem';
          state.showLinks = false;
        }
        prevScrollpos = currentScrollPos;
      };
    }
  });
</script>

<style scoped>
  .router-link-exact-active {
    @apply text-rose-200 font-black;
  }
</style>
