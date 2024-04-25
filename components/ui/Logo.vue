<script lang="ts" setup>
import logo from '~/public/logo.svg';
import darkLogo from '~/public/logo_dark.svg';
import { splitWords } from '~/utils/splitWords';

const { isLightTheme, currentAppName } = useTheme();
const splittedAppName = splitWords(currentAppName.value);
console.log(isLightTheme ? logo : darkLogo);
</script>

<template>
  <div class="logo">
    <img
        :src="isLightTheme ? logo : darkLogo"
        alt="Planet Learn Logo"
        class="logo__image"
    >

    <h1 class="logo__name">
      <span class="text--primary">{{ splittedAppName[0] }}</span
      >{{ splittedAppName[1] }}
    </h1>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo__name {
  font-size: 1.5rem;
}
</style>
