<template>
  <div class="bg-black p-3 mt-[-1px]">
    <div
      class="grid place-items-center py-5 bg-[url('/RoccoWhite.jpg')] rounded-2xl mt-[-2vh] bg-cover bg-no-repeat bg-opacity-70 min-h-[98vh] shadow-top"
    >
      <div
        class="rounded-xl shadow-2xl md:max-w-[60%] max-w-[80%] bg-pink-100 bg-cover bg-left-bottom"
      >
        <div
          class="m-2 bg-white rounded-xl flex md:flex-row flex-col-reverse justify-start items-center"
        >
          <div class="mt-[2vw] md:mt-0 relative flex flex-col items-center p-2">
            <img
              src="/destinee-image.jpg"
              alt="Destinee Schriner and her family"
              class="rounded-xl shadow-md max-h-[40vh] md:max-h-[80vh]"
            />
            <button
              ref="rootElement"
              @click="handleClick"
              class="absolute bottom-5 m-3 bg-white rounded-md md:p-5 p-2 hover:border-black border-rose-200 border-2 font-cursive text-black font-semibold text-sm md:text-body duration-200 hover:bg-[url('/RoccoPink.jpg')]"
            >
              Book With Me
            </button>
          </div>
          <slot>
            <p
              class="md:max-w-[50%] text-black font-sans font-bold text-body md:leading-10 m-[4vw] text-center md:text-left"
            >
              Hi, I’m Destinee Schriner! Founder and Owner of Roses In Rhapsody.
              I'll be the one facilitating operations for the event you have
              always dreamed of.
              <br /><br />
              To do that we, need to have a quick 15 minute appointment. I will
              learn about your likes and dislikes so I can deliver the most
              perfect experience.
            </p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const calendly = useCalendly();
  const handleClick = () => {
    calendly.initPopupWidget({
      url: 'https://calendly.com/roses-in-rhapsody/15min',
    });
  };
</script>

<style scoped></style>
