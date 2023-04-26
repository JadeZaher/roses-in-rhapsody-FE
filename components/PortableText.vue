<template>
  <SanityContent :blocks="content.body" :serializers="serializers" />
</template>

<script lang="ts">
  import Image from '~/components/BlockTextSerializers/Image.vue';
  import ListItem from '~/components/BlockTextSerializers/ListItem.vue';
  import { h } from 'vue';

  export default {
    props: ['content'],
    setup(props) {
      const blocks = props.content;

      const serializers = {
        types: {
          image: Image,
        },
        marks: {
          link: h('a', {
            class: 'underline decoration-black hover:decoration-primary',
            rel: 'noreferrer noopener',
          }),
        },
        styles: {
          h1: h('h1', {
            class: 'py-10 text-5xl font-black ',
          }),
          h2: h('h2', {
            class: 'py-10 text-subtitle font-bold',
          }),
          h3: h('h3', {
            class: 'py-10 text-xl font-bold',
          }),
          h4: h('h4', {
            class: 'py-10 text-l font-bold',
          }),
          normal: h('p', {
            class: 'py-2 text-body',
          }),
          blockquote: h('blockquote', {
            class: 'my-5 text-subtitle border-l-4 border-l-primary p-5 ',
          }),
        },
        listItem: ListItem,
      };
      return { blocks, serializers };
    },
  };
</script>

<style scoped>
  ul {
    list-style-position: outside;
    list-style-type: disc;
    @apply ml-5;
  }
</style>
