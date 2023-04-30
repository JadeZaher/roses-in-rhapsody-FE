<template>
  <Hero
    title="Surprise and Amaze"
    subtitle="Share a Tender Experience With Who You Love From Wherever You Are"
  />
  <div
    class="min-h-[38vh] bg-white py-[3vh] grid place-items-center mt-[-2vh] rounded-t-2xl"
  >
    <h2
      class="font-cursive font-semibold md:text-header text-subtitle text-center max-w-[80%]"
    >
      Roses in Rhapsody gets to know
      <span class="text-pink-200 italic"> you </span> and your
      <span class="text-pink-200 italic">loved ones</span> to create and share a
      curated event anywhere in the Treasure Valley and beyond.
    </h2>
  </div>
  <!-- gallery -->
  <div class="flex flex-col items-center bg-black">
    <div
      class="flex flex-col w-[90vw] justify-center bg-black rounded-2xl pb-6 items-center bg-right-bottom bg-cover shadow-bottom mt-[2vh]"
    >
      <h2 class="font-cursive text-header py-3 text-white">Gallery</h2>
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
            src="/gallery/Gallery1.jpg"
            alt="Bed with flowers for an anniversary"
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <slide key="2">
          <img
            src="/gallery/Gallery2.jpg"
            alt="Tea, chocolate, and honey gift for honeymoon"
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <slide key="3">
          <img
            src="/gallery/Gallery3.jpg"
            alt="Artisanal Tea gift for birthday celebration"
            class="rounded-2xl max-w-[80vw]"
          />
        </slide>
        <slide key="4">
          <img
            src="/gallery/Gallery4.jpg"
            alt="Wedding bed celebration decoration for hotel"
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
    <!-- services -->
    <div class="flex flex-col justify-center items-center bg-black">
      <div class="md:w-[90vw]">
        <div class="rounded-t-2xl flex flex-col w-full bg-black p-3 pt-4 pb-10">
          <div class="md:flex-row flex-col flex bg-white rounded-2xl my-2">
            <div
              class="w-full p-[4vw] md:mr-4 md:mb-4 font-semibold font-sans text-body flex md:flex-row flex-col justify-center items-center"
            >
              <!-- Anniversaries service -->
              <div class="md:w-[55%] md:mr-[10vw]">
                <h3 class="font-cursive font-semibold text-subtitle">
                  Anniversaries
                </h3>
                <!-- copy -->
                <p class="my-4">
                  We have a custom package designed for an extra special
                  anniversary experience. Our team takes pride in creating
                  unforgettable experiences for any kind of couple. To ensure
                  that your anniversary is truly special, we will provide you
                  with a questionnaire in our booking consultation that will
                  help us personalize every aspect of your celebration.
                </p>
                <p class="my-4">
                  We will learn all about you and your partner's preferences.
                  From your favorite movies to your preferred snacks and
                  desserts, we will design every detail to make your celebration
                  seamless and unique to you as a couple. Some of what you can
                  expect to be Included in the package is custom decor and
                  set-up, up to $350 in value, that will transform your chosen
                  space into a romantic haven. We also provide a $50 gift card
                  to the restaurant of your choice, so you can enjoy a delicious
                  meal with your loved one. As always, we are available to
                  accommodate any additional requests and make your anniversary
                  even more special. We look forward to creating a memorable and
                  romantic experience that you will cherish forever.
                </p>
                <p class="my-4">
                  We will be with you every step of the way, answering any
                  questions and addressing any concerns you may have. Our team
                  is dedicated to serving you and making your day truly
                  unforgettable. So don't hesitate to reach out to us, we are
                  always here to help.
                </p>
                <p class="my-4">
                  Thank you for considering us for your special day, and we look
                  forward to creating an experience that exceeds your
                  expectations. We ask that you please be at the location or
                  have someone that knows that we are coming. We are also
                  available to travel anywhere in the west coast, beyond
                  treasure valley if you want to take our personal touch along
                  with you!
                </p>
              </div>

              <img
                src="/families.jpg"
                alt="Couple on anniversary"
                class="md:h-full md:max-w-[45%] object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
          <!-- Honeymoon service -->
          <div class="md:flex-row flex-col flex bg-white rounded-2xl my-2">
            <div
              class="w-full p-[4vw] md:mr-4 md:mb-4 font-semibold font-sans text-body flex md:flex-row flex-col justify-center items-center"
            >
              <!-- honeymoon service -->
              <div class="md:w-[55%] md:mr-[10vw]">
                <h3 class="font-cursive font-semibold text-subtitle">
                  Honeymoons
                </h3>
                <!-- copy -->
                <p class="my-4">
                  We believe that the key to creating a perfect experience is
                  getting to know your preferences. That's why we will work
                  closely with you to tailor the package to your likes and
                  dislikes. Our decor options start at $250 and go up to $500,
                  ensuring that every detail is exactly to your specifications.
                </p>
                <p class="my-4">
                  As part of the package, we will create a custom romance
                  profile for you, providing ideas for future dates that are
                  personalized to your preferences. Additionally, we will
                  provide a $100 gift card to the hotel restaurant, as well as a
                  custom dessert of your choosing to be sent up to your room.
                </p>
                <p class="my-4">
                  We understand the importance of creating a memorable
                  experience for your special day, which is why we take care of
                  everything from the flowers to the decor. We will ensure that
                  the decor is exactly as you imagined.
                </p>
                <p class="my-4">
                  As a token of our appreciation, we will provide champagne
                  glasses and a basket of personalized goodies for you to enjoy.
                  We are also available on call after your room is set up to
                  address any additional requests and ensure that your honeymoon
                  is everything you dreamed of.
                </p>
              </div>

              <img
                src="/honeymoon.jpg"
                alt="Couple having a beautiful honeymoon"
                class="md:h-full md:max-w-[45%] object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
          <!-- Custom service -->
          <div class="md:flex-row flex-col flex bg-white rounded-2xl my-2">
            <div
              class="w-full p-[4vw] md:mr-4 md:mb-4 font-semibold font-sans text-body flex md:flex-row flex-col justify-center items-center"
            >
              <!-- custom service -->
              <div class="md:w-[55%] md:mr-[10vw]">
                <h3 class="font-cursive font-semibold text-subtitle">Custom</h3>
                <!-- copy -->
                <p class="my-4">
                  For those who are you ready to go all out and create a truly
                  spectacular experience with no limits on decor? We've got you
                  covered. With our custom package, the sky's the limit on
                  materials and we will customize every aspect to make your
                  special day truly unique and unforgettable. We will work
                  closely with you to bring your vision to life, whether you
                  want multiple rooms decorated or something beyond the maximum
                  budget.
                </p>
                <p class="my-4">
                  We offer special discounts for events such graduations and
                  birthday parties. We want to build a connection with you that
                  will last a lifetime. We believe that events like these offer
                  us the opportunity to show you just how much we care about
                  making life's special moments as memorable as possible.
                </p>
              </div>

              <img
                src="/custom.jpg"
                alt="A family coming together to celebrate a memorable event."
                class="md:h-full md:max-w-[45%] object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:max-w-[90vw]">
        <Booking>
          <p
            class="md:max-w-[50%] text-black font-sans font-bold text-body md:leading-10 m-[4vw] text-center md:text-left"
          >
            Whether it's an intimate moment like your anniversary or honeymoon,
            or a family event like a birthday or graduation party. You can make
            the moment truly memorable and save yourself time an effort, by
            contracting Roses in Rhapsody as your event planner.
            <br /><br />
            To do that we, need to have a quick 15 minute appointment. I will
            learn about your needs so I can deliver the most perfect experience.
          </p>
        </Booking>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<style scoped></style>
