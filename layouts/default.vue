<template lang="pug">
    .container
        AppNav
        .grid.grid-cols-6 
            .col-span-1.px-5(class="lg:block hidden")
                UTree(:items="items" v-model="val")
            .px-5.pb-5(class="lg:col-span-5 col-span-6")
                slot
</template>

<script setup lang="ts">
const { items } = useNavItems();
const { val } = useTree();
</script>

<style scoped></style>
