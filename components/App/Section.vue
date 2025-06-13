<template lang="pug">
    h1.text-lg {{ title }}
    section(v-for="section in sections" :id="section?.id" :keu="section?.id")
        p.mt-5 {{ section?.description }}
        AppContent(:title="section?.contentTitle" :content="section?.content" hasCopy)
</template>

<script setup lang="ts">
interface section {
  id: string;
  description: string;
  contentTitle: string;
  content: string;
  hasCopy?: boolean;
}

const props = defineProps<{
  title: string;
  sections: section[];
}>();
</script>

<style scoped></style>
