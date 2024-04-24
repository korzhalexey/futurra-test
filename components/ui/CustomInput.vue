<script lang="ts" setup>
const modelValue = defineModel();
const props = defineProps<{
  label?: string,
  error: string | null,
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const focused = ref(false);
const errorVisible = computed(() => !focused.value && modelValue.value && props.error !== '');
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
    background-color: var(--white);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--label);
    translate: 15px -50%;
    padding-inline: 5px;
  }

  &__input {
    border: 1px solid #d2d5da;
    border-radius: var(--br-md);
    width: 100%;
    padding: 15px 16px;
    font: 700 14px "Proxima Nova", sans-serif;

    &--error {
      border-color: var(--error);
    }

    &::placeholder {
      color: var(--secondary);
    }

    &:focus {
      border: 1px solid var(--green);
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
    background-color: var(--white);
    translate: -12px -50%;
  }

  &__error {
    font-size: 0.6875rem;
    color: var(--error);
  }
}
</style>
