<template>
  <div>
    <Hero title="Why Roses In Rhapsody?" hero-image="/destinee-image.jpg" />
  </div>
  <!-- booking -->

  <div
    class="grid place-items-center py-2 bg-[url('/RoccoWhite.jpg')] rounded-t-2xl bg-cover bg-no-repeat bg-opacity-70 min-h-[100vh] mt-[-1vh] shadow-top"
  >
    <div
      class="rounded-xl shadow-2xl md:max-w-[60%] my-6 max-w-[80%] bg-pink-100 bg-cover bg-left-bottom"
    >
      <div
        class="m-2 bg-white rounded-xl flex md:flex-row flex-col justify-start items-center"
      >
        <p
          class="text-black font-sans font-bold text-body md:leading-10 m-[4vw] text-left"
        >
          I’m Destinee Founder and Owner of Roses In Rhapsody. You might be
          asking, why do I do this? Why do I love making dreams of romance a
          reality? Why am I willing to invest so much care into your event, and
          do so much work to make it a touching moment you and your loved ones
          wont forget?
          <br /><br />
          It's because Dreams of romance have always stuck in my head ever since
          I read my first Lisa Kleypas book, &apos;Again The Magic&apos; when I
          was fourteen. I imagined my handsome prince would come and sweep me
          off my feet. When I turned 19, I got married to that prince. Then
          after a couple of years, our princess was born, completing our family.
          <br /><br />
          I know it's those memorable moments have value that lasts a lifetime.
          I want to help bring that to other people.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Hero from '~/components/Hero.vue';
</script>

<style scoped></style>
