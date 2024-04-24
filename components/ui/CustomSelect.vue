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
      class="select"
      @click="optionsVisible = !optionsVisible"
      :class="{ 'select--open': optionsVisible }"
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
  border: 1px solid #d2d5da;
  border-radius: var(--br-md);
  padding: 15px 16px;
  cursor: pointer;
  font: 400 12px "Proxima Nova", sans-serif;
  color: var(--secondary);

  &--open {
    border-radius: var(--br-md) var(--br-md) 0 0;
    border-color: var(--green);
  }

  &__label {
    position: absolute;
    top: 0;
    background-color: var(--white);
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
    border: 1px solid #d2d5da;
    width: calc(100% + 2px);
    background-color: var(--white);
    translate: 0 calc(100% + 1px);
    max-height: calc(32px * 4);
    overflow: scroll;
  }

  &__option {
    padding: 9px 16px;
    cursor: pointer;
    color: var(--secondary);

    &:not(:last-child) {
      border-bottom: 1px solid #d2d5da;
    }

    &--selected,
    &:hover {
      background-color: var(--green);
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
