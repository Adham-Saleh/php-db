import type { NavigationMenuItem } from "@nuxt/ui";

export const useTree = function () {
  const val = ref<NavigationMenuItem | null>(null);

  watch(val, () => {
    navigateTo(val?.value?.to);
  });

  return { val };
};
