<template lang="pug">
    div(class="flex w-full justify-between border border-muted p-3 rounded-t-lg mt-2")
        p {{ title }}
        button.cursor-pointer #[IconCopy]
    div(class="border font-mono border-muted p-3 rounded-b-lg bg-[#2D323A] overflow-scroll")
        pre {{ content }}
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  hasCopy: boolean;
  content: string;
}>();
</script>

<style scoped></style>
