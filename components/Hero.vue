<template>
  <!-- hero -->
  <div
    class="flex bg-gradientPinkDesktop h-[105vh] md:pt-0 bg-center bg-cover items-center overflow-clip w-[100vw] md:flex-row flex-col-reverse md:justify-between justify-center"
  >
    <div
      class="md:max-w-[100%] max-w-[90%] md:mt-0 md:text-start min-h-[30vh] flex flex-col justify-center text-center md:ml-[12%] duration-200"
    >
      <h1
        class="md:text-6xl text-4xl font-cursive drop-shadow-glow text-white italic font-black"
      >
        {{ title }}
      </h1>
      <h3
        class="font-sans text-subtitle italic text-white font-medium my-4 w-full md:w-[80%]"
      >
        {{ subtitle }}
      </h3>
    </div>
    <div
      class="md:max-w-[40%] animate-fadeIn min-h-[40vh] max-h-[40vh] w-full flex items-center justify-center mr-[-5%] md:mr-[5%] pointer-events-none"
    >
      <client-only>
        <Vue3Lottie
          ref="anim"
          :width="400"
          :height="400"
          :animationData="animation"
          :loop="false"
          :speed="0.8"
          class="drop-shadow-glow md:translate-y-0"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
  import animation from '/assets/roses_lottie.json';
  const { title, subtitle } = defineProps(['title', 'subtitle']);
</script>
