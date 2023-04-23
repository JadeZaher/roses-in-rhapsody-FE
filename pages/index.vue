<template>
  <Hero
    title="Do something special."
    subtitle="Show someone you love how much you care with Roses In Rhapsody."
  />
  <!-- services -->
  <div class="my-5 p-10 grid place-items-center">
    <h2
      class="font-cursive font-semibold text-header my-2 text-center max-w-[80%]"
    >
      Roses in Rhapsody is your event valet.
    </h2>
    <p class="font-sans my-4 text-center text-body md:w-[60%]">
      Roses In Rhapsody operates throughout the treasure valley. Serving clients
      in Boise, Meridian, Eagle, Caldwell, Emmet, and tourists from out of town
      in the area for their special moment. <br />
      <br />
      We specialize in creating your dream space by decorating craft
      environments and curating an unforgettable personal experiences. From
      family events such as birthdays, to intimate moments like honeymoons and
      anniversaries. <br />
      <br />
      Beyond this we, also provide support for wedding planers, and anyone
      setting out to make personalized events, and partner with the best
      hospitality service providers and restaurants to connect our clients with
      everything they need.
    </p>
    <div
      class="flex md:flex-row flex-col w-full md:pt-10 justify-center items-center"
    >
      <div
        class="relative md:m-10 md:mx-[2vw] m-5 grid place-items-center w-fit bg-gradientPartners bg-center bg-cover rounded-2xl"
      >
        <h3
          class="absolute font-cursive text-center font-bold italic text-white text-shadow z-[2] md:text-body text-xs ml-[2%] mt-[10%]"
        >
          Family Events <br />
          <span class="text-xs md:text-base font-sans font-normal max-w-[80%]">
            Surprise and Amaze</span
          >
        </h3>
        <img
          src="/Gallery_Frame.png"
          alt="Family Events"
          class="shadow-xl rounded-2xl max-h-[50vh]"
        />
      </div>
      <div
        class="relative md:m-10 md:mx-[2vw] m-5 grid place-items-center w-fit bg-gradientPartners bg-center bg-cover rounded-2xl"
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
          class="shadow-xl rounded-2xl max-h-[50vh]"
        />
      </div>
    </div>
  </div>

  <!-- testimonials -->
  <div
    class="p-10 py-5 flex justify-center items-center bg-gradientPinkMobile bg-right-bottom bg-cover min-h-[40vh]"
  >
    <carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="1"
      :wrapAround="true"
      class="w-full h-full"
      :autoplay="2000"
      :transition="1000"
      :pause-autoplay-on-hover="true"
    >
      <slide key="1">
        <h3
          class="font-sans bg-white rounded-xl min-h-[50%] flex items-center md:p-8 md:leading-10 font-medium text-body text-center text-black max-w-[80vw] md:max-w-[60vw] p-5"
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
        <img src="/23.jpg" alt="" class="rounded-2xl max-w-[80vw]" />
      </slide>
      <slide key="3">
        <h3
          class="font-sans font-medium min-h-[50%] bg-white md:p-8 md:leading-10 flex items-center rounded-xl text-body text-center text-black max-w-[80vw] md:max-w-[60vw] p-5"
        >
          “I want all of my client's to have Destinee decorate. I suggest it to
          everyone and anyone. <br />
          <br />
          I share the rooms on video anytime I can.” –Jessie
        </h3>
      </slide>
      <slide key="2">
        <img src="/24.jpg" alt="" class="rounded-2xl max-w-[80vw]" />
      </slide>

      <template #addons>
        <navigation>
          <template #next>
            <span
              class="text-black p-3 text-header font-black bg-white drop-shadow-md rounded-md right-[20px] absolute invisible md:visible"
            >
              >>
            </span>
          </template>
          <template #prev>
            <span
              class="text-black p-3 text-header font-black bg-white drop-shadow-md rounded-md left-[20px] absolute invisible md:visible"
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
  <div class="grid place-items-center py-5 bg-pink-100 min-h-screen">
    <div
      class="rounded-xl shadow-2xl md:max-w-[60%] max-w-[80%] bg-gradientPinkMobile bg-cover bg-left-bottom"
    >
      <div
        class="m-2 bg-white rounded-xl flex md:flex-row flex-col justify-start items-center"
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
            class="absolute bottom-5 m-3 bg-white rounded-md md:p-5 p-2 border-pink-400 border-2 font-cursive text-black hover:text-white font-semibold text-sm md:text-body duration-200 hover:bg-gradientBase"
          >
            Book With Me
          </button>
        </div>

        <p
          class="md:max-w-[50%] text-black font-sans font-medium text-body md:leading-10 m-[4vw] text-center md:text-left"
        >
          Hi! I’m Destinee Founder and Owner of Roses In Rhapsody. I'll be the
          one facilitating operations for the event you have always dreamed of.
          <br /><br />
          To do that we need to have a quick 30 minute appointment where I learn
          about you so I can deliver an experience beyond your expectations.
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

  .carousel__slide--prev {
    opacity: 0;
    transform: rotateY(-20deg) scale(0.8);
    transition: 2s;
  }

  .carousel__slide--next {
    opacity: 0;
    transform: rotateY(20deg) scale(0.8);
    transition: 2s;
  }
  .carousel__slide--sliding {
    transition: 2s;
  }
  .carousel__track {
    transform-style: preserve-3d;
  }
  .carousel__slide--active ~ .carousel__slide {
    opacity: 0.8;
    transform: rotateY(20deg) scale(1);
    transition: 2s;
  }
</style>
