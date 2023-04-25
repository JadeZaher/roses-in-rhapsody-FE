<template>
  <!-- hero -->
  <div
    class="flex bg-[url('/RoccoPink.jpg')] bg-no-repeat h-[105vh] md:pt-0 bg-center bg-cover items-center overflow-clip w-[100vw] md:flex-row flex-col-reverse md:justify-between justify-center"
  >
    <div
      class="md:max-w-[100%] max-w-[90%] md:text-start p-[2vw] rounded-3xl min-h-[30vh] flex flex-col justify-center text-center md:ml-[12%] duration-200"
    >
      <h1
        class="md:text-6xl text-4xl font-cursive text-white text-shadow italic font-black"
      >
        {{ title }}
      </h1>
      <h3
        class="font-sans font-bold text-subtitle italic text-white text-shadow my-4 w-full md:w-[80%]"
      >
        {{ subtitle }}
      </h3>
    </div>
    <div
      class="md:max-w-[40%] min-h-[40vh] max-h-[40vh] my-[5vh] w-full flex items-center justify-center mr-[-5%] md:mr-[5%] pointer-events-none"
    >
      <img
        v-if="heroImage"
        :src="heroImage"
        class="max-w-[60%] md:max-w-[45%] mr-[5%] rounded-2xl md:p-2 p-[5px] border-2 border-black bg-white"
      />

      <client-only>
        <Vue3Lottie
          ref="anim"
          :width="400"
          :height="400"
          :animationData="animation"
          :loop="false"
          :speed="0.8"
          class="drop-shadow-glow md:translate-y-0"
          v-if="!heroImage"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup>
  import animation from '/assets/roses_lottie.json';
  const { title, subtitle, heroImage } = defineProps([
    'title',
    'subtitle',
    'heroImage',
  ]);
</script>
