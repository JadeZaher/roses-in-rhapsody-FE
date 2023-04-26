<template>
  <div
    class="md:py-[10%] py-[15%] min-h-screen bg-cover bg-[url('/RoccoPink.jpg')] grid place-items-center"
  >
    <div
      class="relative min-w-[90vw] mx-[8%] bg-white border-2 border-black p-[2vw] rounded-2xl shadow-lg"
    >
      <h1 class="font-black text-header text-pink-200">{{ post?.title }}</h1>
      <h2
        class="font-semibold text-subtitle text-black pb-5 border-b-2 border-b-black"
      >
        {{ post?.description }}
      </h2>
      <div class="md:max-w-[80%]">
        <PortableText v-if="post" :content="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PostZ } from '~/utils/zod';

  const post: Ref<PostZ | null> = ref(null);

  const { slug } = useRoute().params;
  const query = groq`*[_type == "post" && slug.current == $slug]{..., author->}[0]`;

  const { data } = await useSanityQuery(query, { slug });

  post.value = postZ.passthrough().parse(data.value);

  //data later
</script>
