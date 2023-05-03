<template>
  <div
    class="py-[15vh] min-h-screen w-full bg-cover bg-[url('/RoccoPink.jpg')] grid place-items-center"
  >
    <div
      class="w-[90vw] bg-white border-2 border-black p-[2vw] rounded-2xl shadow-lg"
    >
      <h1 class="p-2 font-black text-header text-pink-200">
        {{ post?.title }}
      </h1>
      <h2
        class="p-2 font-semibold text-subtitle text-black pb-5 border-b-2 border-b-black"
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
