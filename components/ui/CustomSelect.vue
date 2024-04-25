<script lang="ts" setup>
defineProps<{
  label: string
  options: string[] | number[]
}>();

const selected = defineModel();
const optionsVisible = ref(false);

function hideOptions () {
  optionsVisible.value = false;
}
</script>

<template>
  <div
      v-click-outside="hideOptions"
      :class="{ 'select--open': optionsVisible }"
      class="select"
      @click="optionsVisible = !optionsVisible"
  >
    <div class="select__label">{{ label }}</div>
    <span class="select__selected">{{ selected || 'Select' }}</span>

    <ul v-show="optionsVisible" class="select__options">
      <li
          v-for="option in options"
          :key="option"
          :class="{ 'select__option--selected': option === selected }"
          class="select__option"
          @click="selected = option"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  border: 1px solid var(--input-border);
  border-radius: var(--br-md);
  padding: 15px 16px;
  background-color: var(--input);
  cursor: pointer;
  font: 400 12px "Proxima Nova", sans-serif;
  color: var(--secondary);

  &--open {
    border-color: var(--input-focus-border);
    border-radius: var(--br-md) var(--br-md) 0 0;

    &::after {
      rotate: 180deg;
    }
  }

  &::after {
    content: url("@/assets/images/chevron.svg");
    position: absolute;
    top: 50%;
    right: 0;
    transition: rotate var(--fast);
    translate: -15px -50%;
  }

  &__label {
    position: absolute;
    top: 0;
    border-radius: 1in;
    background-color: var(--input);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--label);
    translate: -10px -50%;
    padding-inline: 5px;
  }

  &__options {
    position: absolute;
    bottom: 0;
    left: -1px;
    overflow: scroll;
    border: 1px solid var(--select-border);
    border-radius: 0 0 var(--br-md) var(--br-md);
    width: calc(100% + 2px);
    max-height: calc(32px * 4);
    background-color: var(--input);
    translate: 0 calc(100% + 1px);
  }

  &__option {
    padding: 9px 16px;
    cursor: pointer;
    color: var(--secondary);

    &:not(:last-child) {
      border-bottom: 1px solid var(--select-border);
    }

    &--selected,
    &:hover {
      background-color: var(--select-hover);
      color: var(--white);
    }

    &--selected {
      position: relative;

      &::after {
        content: url("@/assets/images/mark.svg");
        position: absolute;
        top: 50%;
        right: 0;
        translate: -7px -50%;
      }
    }
  }
}
</style>
