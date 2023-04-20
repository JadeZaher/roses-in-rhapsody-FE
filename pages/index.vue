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
    <div class="flex md:flex-row flex-col md:mt-5 mt-10">
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
    >
      <slide key="1">
        <h3
          class="font-sans font-medium md:leading-10 md:text-body text-xs text-shadow text-center text-white md:max-w-[60vw] max-w-[60vw] p-5"
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
        <img src="/families.jpg" alt="" class="rounded-2xl drop-shadow-lg" />
      </slide>

      <template #addons>
        <navigation>
          <template #next>
            <span
              class="text-black md:p-5 p-2 md:text-header text-xs bg-white rounded-md"
            >
              >>
            </span>
          </template>
          <template #prev>
            <span
              class="text-black md:p-5 p-2 md:text-header text-xs bg-white rounded-md"
            >
              &lt;&lt;
            </span>
          </template>
        </navigation>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
  import Hero from '~/components/Hero.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
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
    right: -30px;
  }
  .carousel__prev {
    left: -30px;
  }
</style>
