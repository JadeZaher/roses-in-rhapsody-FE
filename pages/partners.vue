<template>
  <Hero
    title="Level Up Your Hospitality"
    subtitle="Helping your guests make memories is the easiest way to make a splash"
  />
  <div class="flex flex-col items-center bg-black">
    <div
      class="min-h-[38vh] bg-white py-[3vh] grid place-items-center mt-[-2vh] rounded-t-2xl"
    >
      <h2
        class="font-cursive font-semibold md:text-header text-subtitle text-center max-w-[80%]"
      >
        When you refer Roses in Rhapsody you get a local partner who can create
        a unique offering at
        <span class="text-pink-200 italic"> no </span>cost to you and sets you
        apart from your competition.
      </h2>
    </div>
    <!-- our partners  -->
    <div
      class="flex flex-col w-[90vw] justify-center bg-black rounded-2xl pb-6 items-center bg-right-bottom bg-cover shadow-bottom mt-[2vh]"
    >
      <h2 class="font-cursive text-header py-3 text-white">Our Partners</h2>
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
          <img
            src="/partners/HolidayInnNampaLogo.png"
            alt=""
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <slide key="2">
          <img
            src="/partners/ResidenceInnBoiseLogo.png"
            alt=""
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <slide key="3">
          <img
            src="/partners/OyasMarketLogo.png"
            alt=""
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <img
          src="/partners/RubyBloomLogo.png"
          alt=""
          class="rounded-2xl max-w-[80vw]"
        />
        <slide key="4">
          <img
            src="/partners/VintiquesLogo.png"
            alt=""
            class="rounded-2xl max-w-[80vw]"
          />
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

    <div class="flex flex-col justify-center items-center bg-black">
      <div class="w-[90vw]">
        <div class="rounded-t-2xl flex flex-col w-full bg-black p-3 pt-4 pb-10">
          <div class="md:flex-row flex-col flex bg-white rounded-2xl my-2">
            <div
              class="w-full p-[4vw] md:mr-4 md:mb-4 font-semibold font-sans text-body flex md:flex-row flex-col justify-center items-center"
            >
              <!-- Custom service -->
              <div class="md:flex-row flex-col flex bg-white rounded-2xl my-2">
                <div
                  class="w-full p-[4vw] md:mr-4 md:mb-4 font-semibold font-sans text-body flex md:flex-row flex-col justify-center items-center"
                >
                  <!-- honeymoon service -->
                  <div class="md:w-[55%] md:mr-[10vw]">
                    <h3 class="font-cursive font-semibold text-subtitle">
                      Services we offer.
                    </h3>
                    <!-- copy -->
                    <p class="my-4">
                      We specialize in creating tailored events for
                      anniversaries, honeymoons, and family events such as
                      birthdays and graduation parties. Beyond this we also
                      offer exceptional support for weddings, corporate
                      retreats, and any event that can benefit from a
                      personalized touch.
                    </p>
                    <p class="my-4">
                      We offer special discounts for events such graduations and
                      birthday parties. We want to build a connection with our
                      clients that will last a lifetime. We believe that events
                      like these offer us the opportunity to show you just how
                      much we care about making life's special moments as
                      memorable as possible.
                    </p>
                  </div>

                  <img
                    src="/partners.jpg"
                    alt="A family coming together to celebrate a memorable event."
                    class="md:h-full md:max-w-[45%] object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[90vw]">
        <Booking>
          <p
            class="md:max-w-[50%] text-black font-sans font-bold text-body md:leading-10 m-[4vw] text-center md:text-left"
          >
            Partner with Roses In Rhapsody today for the opportunity to earn
            commission on clients that you help us find. Not to mention the
            opportunity to level up your hospitality services with custom
            support for your honored guests.
            <br /><br />
            To do that we, need to have a quick 15 minute appointment, where we
            can discuss the terms of our collaboration.
          </p>
        </Booking>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<style scoped></style>
