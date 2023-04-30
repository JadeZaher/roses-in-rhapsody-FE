<template>
  <div class="min-h-screen">
    <header
      id="navbar"
      class="fixed w-full z-10 top-[1.5rem] duration-300 grid place-items-center"
    >
      <nav
        class="p-2 flex justify-between rounded-xl shadow-xl bg-white border-2 border-black w-[90vw]"
      >
        <button
          ref="rootElement"
          @click="handleBook"
          class="bg-white rounded-md w-fit md:max-h-[60px] max-h-[40px] md:p-5 p-2 border-rose-200 hover:border-black border-2 font-cursive text-black font-semibold text-sm md:text-body duration-200 hover:bg-[url('RoccoPink.jpg')]"
        >
          Book With Me
        </button>
        <PageLinksDesktop />
        <PageLinksMobile />
      </nav>
    </header>
    <div class="flex flex-col justify-center max-w-screen overflow-hidden">
      <slot />
    </div>
    <footer class="my-[10vh] w-full min-h-[90vh] bg-white">
      <div class="flex flex-col-reverse md:flex-row">
        <!-- contact -->
        <client-only>
          <div
            class="flex flex-col items-center justify-between rounded-md w-[90%] mx-[5%]"
          >
            <h2
              class="font-black text-subtitle md:pl-[5%] pr-2 text-black font-cursive self-start mt-6"
            >
              Contact
            </h2>
            <form
              action="https://public.herotofu.com/v1/3e0520f0-9ff9-11ed-82c7-3d7607318e65"
              method="post"
            >
              <div className="mb-4 flex flex-col items-start ">
                <div className="flex flex-col p-2 ">
                  <label
                    className="my-3 p-2 text-xl font-semibold text-black"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="mx-2 md:w-[50vw] w-[90vw] border-rose-200 rounded-md  border-2  bg-white p-2 py-4 font-semibold text-black "
                    placeholder="Your Name"
                    name="Name"
                    id="name"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col p-2">
                  <label
                    className=" my-3 w-full p-2 text-xl font-semibold text-black"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mx-2 md:w-[50vw] w-[90vw] border-rose-200 rounded-md border-2  bg-white p-2 py-4 font-semibold text-black"
                    placeholder="Your@email.com"
                    name="Email"
                    id="email"
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col p-2">
                  <label
                    className=" my-3 w-full p-2 text-xl font-semibold text-black"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="mx-2 md:w-[50vw] w-[90vw] border-rose-200 rounded-md border-2  bg-white p-2 py-4 font-semibold text-black"
                    placeholder="xxx-xxx-xxxx"
                    name="Phone"
                    id="phone"
                    type="phone"
                  />
                </div>
                <div className="flex flex-col p-2">
                  <label
                    className=" my-3 w-full p-2 text-xl font-semibold text-black"
                    htmlFor="email"
                  >
                    Reason For Reaching Out
                  </label>
                  <select
                    className="mx-2 md:w-[50vw] w-[90vw] border-rose-200 rounded-md border-2  bg-white p-2 py-4 font-semibold text-black"
                    name="Reason For Reaching Out"
                    id="Reason For Reaching Out"
                    required
                    defaultValue="Select Your Option"
                  >
                    <option>Romance Profile</option>
                    <option>Anniversary</option>
                    <option>Honeymoon</option>
                    <option>Custom</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col p-2">
                  <label
                    className=" my-3 w-full p-2 text-xl font-semibold text-black"
                    htmlFor="email"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="mx-2 min-h-[300px] md:w-[50vw] w-[90vw] border-rose-200 rounded-md border-2  bg-white p-2 py-4 font-semibold text-black"
                    placeholder="Message"
                    name="Message"
                    id="Message"
                  />
                </div>
                <div className="mx-2 flex flex-col p-2 py-8">
                  <input
                    className="rounded-md border-2  border-rose-200 p-2 pl-4 pr-12 text-xl font-semibold text-black"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>

          <!-- faq -->
          <div class="mx-[5%] md:w-2/5 w-[90%]">
            <h2 class="font-black text-subtitle p-2 text-black font-cursive">
              FAQ
            </h2>
            <!-- faq 1  -->
            <fixed-size-accordion :open="state.isOpened1">
              <template v-slot:topBar>
                <div>
                  <div
                    class="visible-header bg-black cursor-pointer border-white border-y-2 flex rounded-t-2xl"
                    @click="state.isOpened1 = !state.isOpened1"
                  >
                    <h3
                      class="text-white font-semibold text-left text-body font-sans p-2 w-4/5"
                    >
                      Why should I invest in this service, I can do it myself?
                    </h3>
                    <img
                      src="/Drop.svg"
                      alt=""
                      class="w-1/5 bg-transparent invert md:p-6 p-2 scale-50"
                      :class="[
                        state.isOpened1
                          ? 'duration-200'
                          : 'duration-200 rotate-90',
                      ]"
                    />
                  </div>
                  <div v-if="state.isOpened1">
                    <p class="p-2 text-body text-white bg-black">
                      Of course you can do it yourself but we make it so that
                      it’s one more thing you don’t have to worry about.
                    </p>
                  </div>
                </div>
              </template>
            </fixed-size-accordion>
            <!-- faq 2  -->
            <fixed-size-accordion :open="state.isOpened2">
              <template v-slot:topBar>
                <div>
                  <div
                    class="visible-header bg-black cursor-pointer border-white border-y-2 flex"
                    @click="state.isOpened2 = !state.isOpened2"
                  >
                    <h3
                      class="text-white font-semibold text-left text-body font-sans p-2 w-4/5"
                    >
                      Can the price be lower?
                    </h3>
                    <img
                      src="/Drop.svg"
                      alt=""
                      class="w-1/5 bg-transparent invert md:p-6 p-2 scale-50"
                      :class="[
                        state.isOpened2
                          ? 'duration-200'
                          : 'duration-200 rotate-90',
                      ]"
                    />
                  </div>
                  <div v-if="state.isOpened2">
                    <p class="p-2 text-body text-white bg-black">
                      We cater to all clients with our payment plans and we can
                      customize around your budget.
                    </p>
                  </div>
                </div>
              </template>
            </fixed-size-accordion>
            <!-- faq 3  -->
            <fixed-size-accordion
              :open="state.isOpened3"
              :animation-duration="500"
            >
              <template v-slot:topBar>
                <div>
                  <div
                    class="visible-header bg-black cursor-pointer border-white border-y-2 flex rounded-b-2xl"
                    @click="state.isOpened3 = !state.isOpened3"
                    :class="[state.isOpened3 ? 'rounded-b-none' : '']"
                  >
                    <h3
                      class="text-white font-semibold text-left text-body font-sans p-2 w-4/5"
                    >
                      Are you good at this?
                    </h3>
                    <img
                      src="/Drop.svg"
                      alt=""
                      class="w-1/5 bg-transparent invert md:p-6 p-2 scale-50"
                      :class="[
                        state.isOpened3
                          ? 'duration-200'
                          : 'duration-200 rotate-90',
                      ]"
                    />
                  </div>
                  <div v-if="state.isOpened3">
                    <p class="p-2 text-body text-white bg-black rounded-b-2xl">
                      I pride myself in my customer service as I had worked in
                      the field for over ten years. With that being said, I will
                      curate an experience that you can cherish. And please feel
                      free to look at the pictures and reviews and judge for
                      yourself on our quality.
                    </p>
                  </div>
                </div>
              </template>
            </fixed-size-accordion>

            <!-- socials -->
            <div>
              <h2
                class="font-black text-body pr-2 text-black font-cursive self-start mt-6"
              >
                Find us on social media!
              </h2>
              <div class="flex gap-4">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/profile.php?id=100090242839371"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="/social/fb.svg"
                    alt="Connect with Roses In Rhapsody on Facebook"
                    class="w-[60px] my-2"
                  />
                </a>
                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/rosesinrhapsody/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="/social/insta.svg"
                    alt="Connect with Roses In Rhapsody on Facebook"
                    class="w-[60px] my-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </client-only>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  //handle nav scroll
  import FixedSizeAccordion from 'vue-fixed-size-accordion';
  interface ManageState {
    isOpened1: boolean;
    isOpened2: boolean;
    isOpened3: boolean;
  }

  const state: ManageState = reactive({
    isOpened1: false,
    isOpened2: false,
    isOpened3: false,
  });

  onMounted(() => {
    if (process.client) {
      var prevScrollpos = window.scrollY;
      window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar')!.style.top = '.75rem';
        } else {
          document.getElementById('navbar')!.style.top = '-20rem';
        }
        prevScrollpos = currentScrollPos;
      };
    }
  });

  //handle calendly
  const calendly = useCalendly();
  const handleBook = () => {
    calendly.initPopupWidget({
      url: 'https://calendly.com/roses-in-rhapsody/15min',
    });
  };
</script>

<style>
  #fsaBottomBar {
    display: hidden;
  }
</style>
