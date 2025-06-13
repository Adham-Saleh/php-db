import type { NavigationMenuItem } from "@nuxt/ui";

export const useNavItems = function () {
  const items = ref<NavigationMenuItem[]>([
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      defaultExpanded: true,
      to: "/php-setup",
      children: [
        {
          label: "Introduction",
          description: "Introduction to php.",
          icon: "i-lucide-house",
          to: "/introduction",
        },
        {
          label: "PHP database setup",
          description: "Learn how to setup php sqli.",
          icon: "i-lucide-cloud-download",
          to: "/php-setup",
        },
        {
          label: "PHP CRUD operations",
          icon: "i-lucide-smile",
          description: "Learn how to interact with databases using php.",
          to: "/php-crud",
        },
      ],
    },
    // {
    //   label: "GitHub",
    //   icon: "i-simple-icons-github",
    //   badge: "يفتح الله",
    //   to: "https://github.com/nuxt/ui",
    //   target: "_blank",
    // },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ]);

  return { items };
};
