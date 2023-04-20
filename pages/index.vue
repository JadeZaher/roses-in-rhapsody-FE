<template>
  <Hero
    title="Roses In Rhapsody"
    subtitle="Do something special. Show someone you love how much you care."
  />
  <!-- services -->
  <div class="p-10 grid place-items-center">
    <p
      class="font-sans font-semibold text-center md:text-body text-base md:w-[80%]"
    >
      <span class="font-cursive text-body"
        >Roses in Rhapsody is your event valet.</span
      >
      <br />
      <br />
      Creating your dream space by decorating craft environments and curating an
      unforgettable personal experience.
    </p>
    <div
      class="flex md:flex-row flex-col md:mt-5 mt-10 w-full md:py-10 justify-center"
    >
      <div
        class="relative md:m-10 md:mx-[2vw] m-5 grid place-items-center bg-gradientFamilies bg-cover bg-center rounded-2xl"
      >
        <h3
          class="absolute font-cursive text-center font-bold italic text-white text-shadow z-[2] md:text-body text-xs ml-[2%] mt-[10%]"
        >
          Family Events <br />
          <span class="text-xs md:text-base font-sans font-normal max-w-[80%]">
            Surprise and Amaze</span
          >
        </h3>
        <img src="/Gallery_Frame.png" alt="" class="shadow-xl rounded-2xl" />
      </div>
      <div
        class="relative md:m-10 md:mx-[2vw] m-5 grid place-items-center from-transparent bg-gradientPartners bg-center bg-cover rounded-2xl"
      >
        <h3
          class="absolute font-cursive text-center font-bold italic text-white text-shadow z-[2] md:text-body text-xs ml-[2%] mt-[10%]"
        >
          Partners <br />
          <span class="text-xs md:text-base font-sans font-normal">
            Level Up Your Service</span
          >
        </h3>
        <img
          src="/Gallery_Frame.png"
          alt="Partners"
          class="shadow-xl rounded-2xl"
        />
      </div>
    </div>
  </div>
  <!-- testimonials -->
  <div
    class="p-10 flex justify-center items-center bg-gradientBase md:min-h-[30vh]"
  >
    <carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="1"
      :wrapAround="true"
      class="w-full h-full"
      :autoplay="2000"
      :pause-autoplay-on-hover="true"
    >
      <slide key="1">
        <h3
          class="font-sans font-medium md:leading-10 md:text-body text-xs text-shadow text-center text-white max-w-[60vw] p-5"
        >
          “My parents just got to their hotel & wowza! My mom was so surprised &
          amazed. She called me and was tearful. You did hands down BEAUTIFUL
          work. I am so happy I got in touch with you to get this set up. You’re
          quick to respond and decorate. <br />
          <br />
          Would definitely work with you again. You made her birthday when I
          couldn’t be there for it.” – Annie
        </h3>
      </slide>
      <slide key="2">
        <img src="/23.jpg" alt="" class="rounded-2xl max-w-[60vw]" />
      </slide>
      <slide key="3">
        <h3
          class="font-sans font-medium md:leading-10 md:text-body text-xs text-shadow text-center text-white max-w-[60vw] p-5"
        >
          “I want all of my client's to have Destinee decorate. I suggest it to
          everyone and anyone. <br />
          <br />
          I share the rooms on video anytime I can.” –Jessie
        </h3>
      </slide>
      <slide key="2">
        <img src="/24.jpg" alt="" class="rounded-2xl max-w-[60vw]" />
      </slide>

      <template #addons>
        <navigation>
          <template #next>
            <span
              class="text-black p-3 text-sm bg-white bg-opacity-60 drop-shadow-md rounded-md right-[-20px] absolute"
            >
              >>
            </span>
          </template>
          <template #prev>
            <span
              class="text-black p-3 text-sm bg-white bg-opacity-60 drop-shadow-md rounded-md left-[-20px] absolute"
            >
              &lt;&lt;
            </span>
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
  </div>

  <!-- booking -->
  <div class="min-h-[100vh] grid place-items-center">
    <div
      class="md:max-w-[80%] max-w-[80%] max-h-[90vh] p-2 flex md:flex-row flex-col justify-start items-center rounded-xl shadow-2xl bg-gradientBase"
    >
      <div class="relative flex flex-col items-center md:max-w-[40%]">
        <img
          src="/destinee-image.jpg"
          alt="Destinee Schriner and her family"
          class="rounded-xl shadow-lg max-h-[45vh] md:max-h-full m-2 md:m-0"
        />
        <button
          ref="rootElement"
          @click="handleClick"
          class="absolute bottom-5 m-2 bg-white rounded-md md:p-5 p-2 text-pink-400 hover:text-white font-semibold font-sans text-sm md:text-body duration-200 hover:drop-shadow-md hover:bg-gradientBase"
        >
          Book With Me
        </button>
      </div>
      <div class="grid place-items-center">
        <p
          class="max-w-[70%] text-white font-medium text-xs md:text-subtitle md:leading-10 text-shadow m-[4vw] text-center md:text-left"
        >
          Hi I’m Destinee. Dreams of romance have always stuck in my head ever
          since I read my first Lisa Kleypas book, Again The Magic when I was
          fourteen. <br />
          <br />
          I imagined my handsome prince would come and sweep me off my feet. And
          when I turned 19, I got married to that prince. Then after a couple of
          years, our princess was born, completing our family.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/Hero.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const calendly = useCalendly();
  const handleClick = () => {
    calendly.initPopupWidget({
      url: 'https://calendly.com/roses-in-rhapsody/30min',
    });
  };
</script>

<style>
  .carousel__pagination-button {
    display: block;
    border: 0;
    margin: 0;
    cursor: pointer;
    margin: 2px;
    border-radius: 5px;
    background: transparent;
    background-color: rgba(255, 255, 255, 0.11);
  }
  .carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    line-height: 0;
    margin: 30px 0 0;
  }

  .carousel__pagination-button::after {
    display: block;
    content: '';
    width: 12px;
    height: 2px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.212);
  }
  .carousel__pagination-button--active::after {
    display: block;
    content: '';
    width: 12px;
    height: 2px;
    border-radius: 5px;
    background-color: white;
  }

  .carousel__next {
    right: -20px;
  }
  .carousel__prev {
    left: -20px;
  }
</style>
