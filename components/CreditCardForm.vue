<script lang="ts" setup>
const inputWrapperRef = ref();
const {
  cardNumber,
  cardLogo,
  updateCardNumber,
  resetCardNumber,
  isCardValid,
} = useCardNumberInput(inputWrapperRef);

const months = generateMonthNames(EnumMonthLength.Long);
const month = ref<null | string>(null);

const years = generateNextYears(5);
const year = ref<null | number>(null);

const cvvWrapperRef = ref();
const cvv = ref<number | null>(null);

function updateCvv (event: string) {
  cvv.value = +event.replace(/[^0-9]/g, '').slice(0, 3) || null;
  cvvWrapperRef.value.$refs.inputRef.value = cvv.value;
}

const isCvvValid = computed(() => cvv.value?.toString().length === 3);
const isFormValid = computed(() => !!(
    isCardValid.value
    && month.value
    && year.value
    && isCvvValid.value
));

function addCard () {
  if (isFormValid.value) {
    console.log(cardNumber.value, month.value, year.value, cvv.value);
    clearForm();
  }
}

function clearForm () {
  resetCardNumber();
  month.value = null;
  year.value = null;
  cvv.value = null;
}

defineExpose({
  clearForm,
});
</script>

<template>
  <form class="add-card" @submit.prevent="addCard">
    <ui-custom-input
        ref="inputWrapperRef"
        v-model="cardNumber"
        :error="isCardValid ? null : 'Invalid Card'"
        autocomplete="cc-number"
        class="add-card__card-number"
        label="Card number"
        placeholder="••••  ••••  ••••  ••••"
        type="text"
        @update:model-value="updateCardNumber"
    >
      <template v-if="cardLogo" #info>
        <img :src="cardLogo" alt="card">
      </template>
    </ui-custom-input>

    <div class="add-card__row">
      <ui-custom-select
          v-model="month"
          :options="months"
          label="Month"
      />

      <ui-custom-select
          v-model="year"
          :options="years"
          label="Year"
      />

      <ui-custom-input
          ref="cvvWrapperRef"
          v-model="cvv"
          :error="isCvvValid ? null : 'Invalid CVV'"
          autocomplete="cc-csc"
          label="CVV"
          placeholder="•••"
          type="password"
          @update:model-value="updateCvv"
      />
    </div>

    <button
        :disabled="!isFormValid"
        class="button--action"
        type="submit"
    >
      Submit
    </button>
  </form>
</template>

<style lang="scss" scoped>
.add-card {
  &__card-number {
    display: block;
    margin-bottom: 30px;
  }

  &__row {
    display: flex;
    margin-bottom: 34px;
    gap: 10px;

    @include tablet {
      margin-bottom: 40px;
    }

    & > * {
      width: 33.3333%;
    }
  }
}
</style>
