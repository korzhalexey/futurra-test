<script lang="ts" setup>
const modelValue = defineModel();
const props = defineProps<{
  label?: string,
  error: string | null,
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const focused = ref(false);
const errorVisible = computed(() => props.error && !focused.value && modelValue.value);
</script>

<template>
  <label class="input-card">
    <span v-if="label" class="input-card__label">{{ label }}</span>

    <input
        ref="inputRef"
        v-model.trim="modelValue"
        :class="{'input-card__input--error': errorVisible}"
        class="input-card__input"
        v-bind="$attrs"
        @blur="focused = false"
        @focus="focused = true"
    />

    <span
        v-if="errorVisible"
        class="input-card__info input-card__error"
        v-text="error"
    />

    <span v-else-if="$slots.info" class="input-card__info">
      <slot name="info" />
    </span>
  </label>
</template>

<style lang="scss" scoped>
.input-card {
  position: relative;

  &__label {
    position: absolute;
    border-radius: 1in;
    background-color: var(--input);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--label);
    translate: 15px -50%;
    padding-inline: 5px;
  }

  &__input {
    border: 1px solid var(--input-border);
    border-radius: var(--br-md);
    width: 100%;
    padding: 15px 16px;
    background-color: var(--input);
    font: 700 14px "Proxima Nova", sans-serif;
    color: var(--main-text);

    &--error {
      border-color: var(--error);
    }

    &::placeholder {
      color: var(--input-placeholder);
    }

    &:focus {
      border-color: var(--input-focus-border);
      outline: unset;
    }
  }

  &__info {
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: var(--input);
    translate: -12px -50%;
  }

  &__error {
    font-size: 0.6875rem;
    color: var(--error);
  }
}
</style>
