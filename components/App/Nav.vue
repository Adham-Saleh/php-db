<template lang="pug">
    .items-center.justify-between.p-3(class="lg:hidden flex") 
        h1(class="font-bold whitespace-nowrap") PHP BERSHAMA
        UButton(icon="i-lucide-menu" color="neutral" variant="content" class="lg:hidden block border-none" @click="toggleMenu")
    div(ref="navMenuRef" class="lg:flex lg:flex-row lg:justify-between lg:mt-0 mt-5 p-3 items-center flex-col lg:relative justify-start hidden items-start fixed top-0 left-0 bottom-0 z-[9999] bg-[#0f172b]")
        h1(class="font-bold whitespace-nowrap") PHP BERSHAMA
        UNavigationMenu(:items="items" class="w-full justify-center lg:flex hidden")
        UTree(:items="items" class="lg:hidden block my-5" v-model="val")
        p.whitespace-nowrap الي ذاكر ذاكر
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navMenuRef = ref<HTMLElement | null>(null);
const { items } = useNavItems();
const { val } = useTree();

const toggleMenu = function () {
  navMenuRef.value.classList.toggle("hidden");
};
</script>

<style scoped></style>
