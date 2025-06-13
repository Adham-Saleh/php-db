<template lang="pug">
    .items-center.justify-between.p-3(class="lg:hidden flex") 
        h1(class="font-bold whitespace-nowrap") PHP BERSHAMA
        UButton(icon="i-lucide-menu" color="neutral" variant="content" class="lg:hidden block border-none" @click="toggleMenu")
    div(ref="navMenuRef" class="lg:flex lg:flex-row lg:justify-between lg:mx-[120px]  p-2 items-center flex-col lg:relative justify-start hidden items-start fixed top-0 left-0 bottom-0 z-[9999] lg:bg-transparent bg-[#0f172b]" :class="{ 'bg-[#0f172b]': colorMode.value === 'dark', 'bg-white': colorMode.value === 'light' }")
        h1(class="font-bold whitespace-nowrap") PHP BERSHAMA
        UNavigationMenu(:items="items" class="w-full justify-center lg:flex hidden")
        UTree(:items="items" class="lg:hidden block my-5" v-model="val")
        UButton(
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          class="z-[9999]"
          disabled
          @click.stop="isDark = !isDark"
        )
    .overlay.fixed.top-0.bottom-0.left-0.right-0.bg-black.opacity-50.z-1(v-if="overlay" @click="toggleMenu()")
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navMenuRef = ref<HTMLElement | null>(null);
const { items } = useNavItems();
const { val } = useTree();
const overlay = ref<boolean>(false);
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark: boolean) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

const toggleMenu = function () {
  console.log("clicked");
  navMenuRef.value.classList.toggle("hidden");
  overlay.value = !overlay.value;
};
</script>

<style scoped></style>
