<template>
  <div class="min-h-screen">
    <header class="fixed w-full z-10 top-0 grid place-items-center">
      <nav
        class="p-4 flex items-center bg-white border-b-2 border-pink-300 justify-end items-between w-full"
      >
        <div class="flex gap-5 md:gap-8">
          <NuxtLink to="/" class="font-medium md:text-xl text-sm text-black"
            >Home</NuxtLink
          >
          <NuxtLink
            class="font-semibold md:text-xl text-sm text-black"
            to="/about"
            >About</NuxtLink
          >
          <NuxtLink
            class="font-semibold md:text-xl text-sm text-black"
            to="/about"
            >Families</NuxtLink
          >
          <NuxtLink
            class="font-semibold md:text-xl text-sm text-black"
            to="/about"
            >Partners</NuxtLink
          >
          <NuxtLink
            class="font-semibold md:text-xl text-sm text-black"
            to="/posts"
            >Posts</NuxtLink
          >
        </div>
      </nav>
    </header>
    <div class="flex flex-col justify-center max-w-screen overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    text-shadow: -2px 2px 8px #ce42a64b;
    @apply text-pink-300 font-black drop-shadow-glow;
  }
</style>
