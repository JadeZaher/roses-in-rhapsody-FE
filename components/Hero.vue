<template>
  <!-- hero -->
  <div
    class="flex md:bg-gradientPinkDesktop bg-gradientPinkMobile min-h-[100vh] mt-10 bg-center bg-cover items-center overflow-clip w-[100vw] md:flex-row flex-col justify-between"
  >
    <div
      class="sm:max-w-[100%] max-w-[90%] md:mt-0 mt-10 md:text-start sm:h-[60vh] flex flex-col justify-center text-center sm:ml-[12%] duration-200"
    >
      <h1 class="text-header font-cursive text-white font-black my-4">
        {{ title }}
      </h1>
      <h3
        class="font-sans md:text-subtitle text-base leading-9 italic text-white font-medium my-2 w-full md:w-[80%]"
      >
        {{ subtitle }}
      </h3>
    </div>
    <div
      class="sm:max-w-[40%] animate-fadeIn sm:h-[60vh] w-full flex items-center justify-center mr-[-5%] sm:mr-[5%] pointer-events-none"
    >
      <client-only>
        <Vue3Lottie
          ref="anim"
          :width="400"
          :height="400"
          :animationData="animation"
          :loop="false"
          :speed="0.8"
          class="drop-shadow-glow md:translate-y-0 translate-y-[-10%]"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
  import animation from '/assets/roses_lottie.json';
  const { title, subtitle } = defineProps(['title', 'subtitle']);
</script>
