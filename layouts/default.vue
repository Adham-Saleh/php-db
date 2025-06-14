<template lang="pug">
    .container
        AppNav
        .grid.grid-cols-9
            .col-span-2(class="lg:block lg:ms-[120px] hidden ")
                UTree(:items="items" v-model="val")
            .px-5.pb-5(class="lg:col-span-7 lg:me-[120px] col-span-9")
                slot
</template>

<script setup lang="ts">
const { items } = useNavItems();
const { val } = useTree();

useSeoMeta({
  title: "Php web docs",
  description: "The best php docs for basmaga purposes",
  ogTitle: "Php web docs",
  ogDescription: "The best php docs for basmaga purposes",
  ogType: "Website",
  ogImage: "https://php-bershama.netlify.app/share.jpg",
});
</script>

<style scoped></style>
