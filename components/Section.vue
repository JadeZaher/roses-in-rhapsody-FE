<template></template>

<script setup lang="ts">
  import { boolean, string } from 'zod';

  const { isLeft, cover } = defineProps({
    isLeft: { type: boolean, required: false },
    cover: { type: string, required: true },
  });
</script>

<style></style>
