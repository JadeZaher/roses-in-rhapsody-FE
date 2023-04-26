<template>
  <div class="py-2 border-t-2 border-t-pink-200 max-w-[70%] my-5 md:pr-[10%]">
    <li
      class="m-2 font-semibold text-body"
      v-for="c in children"
      v-show="c.marks[0] == 'strong'"
    >
      -{{ c.text }}
    </li>

    <li class="m-2 text-body" v-for="c in children" v-show="c.marks[0] == null">
      {{ c.text }}
    </li>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    children: Span[];
  }>();
</script>

<style scoped></style>
