<template>
  <div class="min-h-screen">
    <header
      id="navbar"
      class="fixed w-screen z-10 top-3 duration-300 grid place-items-center"
    >
      <nav
        class="p-2 flex justify-between rounded-xl shadow-xl bg-white border-2 border-black min-w-[90vw]"
      >
        <button
          ref="rootElement"
          @click="handleBook"
          class="bg-white rounded-md md:max-h-[60px] max-h-[40px] md:p-5 p-2 mr-5 border-pink-400 border-2 font-cursive text-black hover:text-white font-semibold text-sm md:text-body duration-200 hover:bg-gradientBase"
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
  </div>
</template>

<script setup>
  //handle nav scroll

  onMounted(() => {
    if (process.client) {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar').style.top = '.75rem';
        } else {
          document.getElementById('navbar').style.top = '-20rem';
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
