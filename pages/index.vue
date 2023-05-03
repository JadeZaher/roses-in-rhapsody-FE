<template>
  <Hero
    title="Do something special."
    subtitle="Show someone you love how much you care with Roses In Rhapsody."
  />
  <div
    class="flex flex-col justify-center items-center bg-black rounded-2xl mt-[-1rem]"
  >
    <!-- testimonials -->
    <div
      class="flex flex-col w-[90vw] justify-center bg-black rounded-2xl pb-6 p-3 items-center bg-right-bottom bg-cover shadow-bottom mt-[2vh]"
    >
      <h2 class="font-cursive text-header py-3 text-white">Testimonials</h2>
      <carousel
        ref="carousel"
        v-model="currentSlide"
        :items-to-show="1"
        :wrapAround="true"
        class="w-full h-full bg-rose-100 rounded-2xl py-4"
        :autoplay="2000"
        :transition="1000"
        :pause-autoplay-on-hover="true"
      >
        <slide key="1">
          <h3
            class="font-sans bg-white rounded-xl min-h-[50%] flex items-center md:p-8 md:leading-10 font-medium text-body text-center text-black max-w-[80vw] md:max-w-[60vw] p-5"
          >
            “My parents just got to their hotel & wowza! My mom was so surprised
            & amazed. She called me and was tearful. You did hands down
            BEAUTIFUL work. I am so happy I got in touch with you to get this
            set up. You’re quick to respond and decorate. <br />
            <br />
            Would definitely work with you again. You made her birthday when I
            couldn’t be there for it.” – Annie
          </h3>
        </slide>
        <slide key="2">
          <h3
            class="font-sans font-medium min-h-[50%] bg-white md:p-8 md:leading-10 flex items-center rounded-xl text-body text-center text-black max-w-[80vw] md:max-w-[60vw] p-5"
          >
            “I want all of my client's to have Destinee decorate. I suggest it
            to everyone and anyone. <br />
            <br />
            I share the rooms on video anytime I can.” –Jessie
          </h3>
        </slide>

        <template #addons>
          <navigation>
            <template #next>
              <span
                class="text-black p-3 text-header font-medium bg-white drop-shadow-md rounded-md right-[5vw] absolute md:visible italic invisible"
              >
                >
              </span>
            </template>
            <template #prev>
              <span
                class="text-black p-3 text-header font-medium bg-white drop-shadow-md rounded-md left-[5vw] absolute md:visible italic invisible"
              >
                &lt;
              </span>
            </template>
          </navigation>
          <pagination />
        </template>
      </carousel>
    </div>

    <div class="min-h-[38vh] bg-white my-3 grid place-items-center w-screen">
      <h2
        class="font-cursive font-semibold text-header text-center max-w-[80%]"
      >
        Roses in Rhapsody is your
        <span class="text-pink-200 italic"> event valet.</span>
      </h2>
    </div>

    <!-- services -->
    <div
      class="rounded-2xl flex flex-col w-full bg-black p-3 pt-4 pb-10 md:max-w-[90vw]"
    >
      <div class="md:flex-row flex-col flex">
        <!-- families service -->
        <div
          class="md:w-full p-[4vw] md:mr-4 md:mb-4 md:rounded-tl-2xl md:rounded-t-[0] rounded-t-2xl font-semibold font-sans md:text-left text-center bg-white text-body flex flex-col justify-center items-center"
        >
          <!-- copy -->
          <p class="my-4 md:w-3/5">
            We specialize in creating your dream space by decorating craft
            environments and curating unforgettable personal experiences. From
            family events such as birthdays, to intimate moments like honeymoons
            and anniversaries. <br />
          </p>

          <p class="my-4 md:w-3/5">
            Roses In Rhapsody operates throughout the treasure valley. Serving
            clients in Boise, Meridian, Eagle, Caldwell, Emmet, and tourists
            from out of town in the area for their special moment. <br />
          </p>
        </div>
        <!-- bg -->
        <div
          class="bg-gradientFamilies md:mb-4 md:rounded-tr-2xl rounded-b-2xl md:rounded-b-none bg-cover bg-center md:h-[80vh] h-[40vh] w-full grid place-items-center"
        >
          <NuxtLink to="/families">
            <h3
              class="font-cursive p-2 px-4 border-[3px] border-black rounded-2xl text-center font-bold italic bg-white text-black hover:bg-[url('/RoccoPink.jpg')] hover:border-black hover:text-black duration-500 cursor-pointer z-[2] text-subtitle"
            >
              Family Events <br />
              <span class="text-body font-sans font-normal max-w-[80%]">
                Surprise and Amaze</span
              >
            </h3>
          </NuxtLink>
        </div>
      </div>

      <!-- partners service -->
      <div class="md:flex-row flex-col-reverse flex">
        <!-- bg -->
        <div
          class="bg-gradientPartners md:mt-4 md:rounded-bl-2xl md:rounded-b-none rounded-b-2xl bg-cover bg-center md:h-[80vh] h-[40vh] w-full grid place-items-center"
        >
          <NuxtLink to="/partners">
            <h3
              class="font-cursive p-2 px-4 border-[3px] border-black rounded-2xl text-center font-bold italic bg-white cursor-pointer text-black hover:bg-[url('/RoccoPink.jpg')] hover:border-black hover:text-black duration-500 z-[2] text-subtitle"
            >
              Partners <br />
              <span class="text-body font-sans font-normal max-w-[80%]">
                Level Up Your Service</span
              >
            </h3>
          </NuxtLink>
        </div>
        <div
          class="md:w-full p-[5vw] md:ml-4 mt-4 md:rounded-br-2xl md:rounded-t-none rounded-t-2xl font-sans md:text-left text-center bg-white font-semibold text-body flex flex-col justify-center items-center"
        >
          <!-- copy -->
          <p class="my-4 md:w-3/5">
            Beyond this we, also provide support for wedding planers, and anyone
            setting out to make personalized events.
          </p>
          <p class="my-4 md:w-3/5">
            We partner with the best hospitality service providers and
            restaurants to connect our clients with everything they need. Learn
            more about partnership opportunities to take your events to a new
            level.
          </p>
        </div>
      </div>
    </div>

    <!-- booking -->

    <Booking class="md:max-w-[90vw] mb-2">
      <p
        class="md:max-w-[50%] text-black font-sans font-bold text-body md:leading-10 m-[4vw] text-center md:text-left"
      >
        Hi, I’m Destinee Schriner! Founder and Owner of Roses In Rhapsody. I'll
        be the one facilitating operations for the event you have always dreamed
        of.
        <br /><br />
        To do that we, need to have a quick 15 minute appointment. I will learn
        about your likes and dislikes so I can deliver the most perfect
        experience.
      </p>
    </Booking>
  </div>
</template>

<script lang="ts" setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const calendly = useCalendly();
  const handleClick = () => {
    calendly.initPopupWidget({
      url: 'https://calendly.com/roses-in-rhapsody/15min',
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
    height: 5px;
    border-radius: 5px;
    background-color: rgba(112, 112, 112, 0.212);
  }
  .carousel__pagination-button--active::after {
    display: block;
    content: '';
    width: 12px;
    height: 5px;
    border-radius: 5px;
    background-color: black;
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
