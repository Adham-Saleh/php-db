<template lang="pug">
    div(class="flex w-full justify-between border border-muted p-3 rounded-t-lg mt-2")
        p {{ title }}
        button.cursor-pointer(@click="showToast") #[IconCopy]
    div(class="border font-mono border-muted p-3 rounded-b-lg overflow-scroll")
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
