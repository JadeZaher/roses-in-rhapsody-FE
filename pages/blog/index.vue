<template>
  <div
    class="min-h-screen w-full md:pt-[5vh] bg-[url('/RoccoWhite.jpg')] bg-blend-color-burn bg-cover pt-[10vh] grid place-items-center"
  >
    <div
      class="mx-[8%] min-w-[90vw] bg-white border-2 border-black rounded-2xl md:p-10 p-4"
    >
      <div>
        <h1 class="text-header my-3 font-bold text-pink-200">Posts</h1>
      </div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4vh]">
        <div v-for="p in posts" class="mb-[10vh]">
          <NuxtLink
            class="font-bold text-2xl underline hover:decoration-primary hover:text-primary"
            :to="`blog/${p.slug?.current}`"
            >{{ p.title }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { z } from 'zod';
  import { slugZ } from '~/utils/zod';

  const trimmedPostZ = z.object({
    title: z.string().nullable(),
    slug: slugZ,
  });
  const postsZ = z.array(trimmedPostZ);

  type Posts = z.infer<typeof postsZ>;

  const posts: Ref<Posts> = ref([]);

  const query = groq`*[_type == "post"]{title, slug}`;
  const { data: postsResponse } = await useSanityQuery(query);
  posts.value = postsZ.parse(postsResponse.value);
</script>

<style scoped></style>
