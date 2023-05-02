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

            <fixed-size-accordion
              v-for="(faqItem, faqIndex) of faqItems"
              :open="faqItem.isOpen.value"
              :top-bar-id="`faq-${faqIndex}-top`"
              :bottom-bar-id="`faq-${faqIndex}-bottom`"
              :animation-duration="500"
            >
              <template #topBar>
                <div
                  :class="`overflow-hidden ${roundListTopBottom(
                    faqIndex,
                    faqItems
                  )}`"
                >
                  <div
                    :class="`visible-header bg-black cursor-pointer border-white border-y-2 flex ${noTopBottomListBorder(
                      faqIndex,
                      faqItems
                    )}`"
                    @click="faqItem.isOpen.value = !faqItem.isOpen.value"
                  >
                    <h3
                      class="text-white font-semibold text-left text-body font-sans p-2 w-4/5"
                    >
                      {{ faqItem.question }}
                    </h3>
                    <img
                      src="/Drop.svg"
                      alt=""
                      class="w-1/5 bg-transparent invert md:p-6 p-2 scale-50"
                      :class="[
                        faqItem.isOpen.value
                          ? 'duration-200'
                          : 'duration-200 rotate-90',
                      ]"
                    />
                  </div>
                  <div v-if="faqItem.isOpen.value">
                    <p class="p-2 text-body text-white bg-black">
                      {{ faqItem.answer }}
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

  type FAQ = {
    question: string;
    answer: string;
    isOpen: Ref<boolean>;
  };

  const faqItems: Array<FAQ> = [
    {
      question: 'Why should I invest in this service, I can do it myself?',
      answer:
        'Of course you can do it yourself but we make it so that it’s one more thing you don’t have to worry about.',
      isOpen: ref(false),
    },
    {
      question: 'Can the price be lower?',
      answer:
        'We cater to all clients with our payment plans and we can customize around your budget.',
      isOpen: ref(false),
    },
    {
      question: 'Are you good at this?',
      answer:
        'I pride myself in my customer service as I had worked in the field for over ten years. With that being said, I will curate an experience that you can cherish. And please feel free to look at the pictures and reviews and judge for yourself on our quality.',
      isOpen: ref(false),
    },
  ];

  function roundListTopBottom(anIndex: number, anArray: Array<any>) {
    if (anIndex === 0) {
      return 'rounded-t-2xl';
    }
    if (anIndex + 1 === anArray.length) {
      return 'rounded-b-2xl';
    }
  }
  function noTopBottomListBorder(anIndex: number, anArray: Array<any>) {
    if (anIndex === 0) {
      return 'border-t-0';
    }
    if (anIndex + 1 === anArray.length) {
      return 'border-b-0';
    }
  }

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
  #fsaBottomBar,
  #faq-0-bottom {
    display: hidden;
  }
</style>
