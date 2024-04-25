<script lang="ts" setup>
const { isLightTheme, currentAppName } = useTheme();

useHead({
  title: currentAppName,
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: isLightTheme ? '/logo.svg' : '/logo_dark.svg',
    },
  ],
  meta: [
    {
      name: 'viewport',
      content: 'width=400, initial-scale=1.0',
    },
  ],
});
</script>

<template>
  <nuxt-page />
</template>
