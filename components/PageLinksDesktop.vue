<template>
  <div class="hidden gap-5 items-center md:gap-8 mx-6 md:flex">
    <NuxtLink to="/" class="font-medium md:text-xl text-sm text-black"
      >Home</NuxtLink
    >
    <NuxtLink class="font-semibold md:text-xl text-sm text-black" to="/about"
      >About</NuxtLink
    >
    <NuxtLink class="font-semibold md:text-xl text-sm text-black" to="/about"
      >Families</NuxtLink
    >
    <NuxtLink class="font-semibold md:text-xl text-sm text-black" to="/about"
      >Partners</NuxtLink
    >
    <NuxtLink class="font-semibold md:text-xl text-sm text-black" to="/posts"
      >Posts</NuxtLink
    >
  </div>
</template>
<style scoped>
  .router-link-exact-active {
    text-shadow: -2px 2px 8px #ce42a64b;
    @apply text-pink-300 font-black drop-shadow-glow;
  }
</style>
