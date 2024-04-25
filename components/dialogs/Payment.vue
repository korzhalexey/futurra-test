<script lang="ts" setup>
import CreditCardForm from '~/components/CreditCardForm.vue';

function buyPaypal () {
  console.log('Buy Paypal');
}

function buyGpay () {
  console.log('Buy Paypal');
}

const paymentRef = ref<HTMLDialogElement>();

function closeModal () {
  if (paymentRef.value) {
    paymentRef.value.close();
  }
}

const cardFormRef = ref<InstanceType<typeof CreditCardForm>>();
const clearForm = () => {
  cardFormRef.value?.clearForm();
};
</script>

<template>
  <dialog ref="paymentRef" class="payment" @close="clearForm">
    <h6 class="payment__title">Payment method</h6>

    <button class="payment__paypal button--paypal">
      <img alt="paypal" src="@/assets/images/paypal.svg">
      BUY NOW
    </button>

    <button class="payment__gpay button--gpay">
      <img alt="gpay" src="@/assets/images/google.svg">
      PAY
    </button>

    <span class="payment__separator">OR</span>

    <credit-card-form
        ref="cardFormRef"
        class="payment__card-form"
    />

    <button class="payment__close" @click="closeModal">Close</button>
  </dialog>
</template>

<style lang="scss" scoped>
.payment {
  position: fixed;
  top: 50%;
  margin: 0 auto;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: var(--br-lg);
  outline: none;
  width: calc(100% - 24px);
  max-width: 400px;
  height: fit-content;
  background-color: var(--white);
  translate: 0 -50%;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &__title {
    margin-bottom: 24px;
    font-size: 1.3125rem;
    text-align: center;
  }

  button {
    text-transform: capitalize;

    &:not(.payment__close) {
      margin-bottom: 16px;
    }
  }

  &__separator {
    display: block;
    position: relative;
    margin-bottom: 16px;
    font-size: 0.75rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);

    @include tablet {
      margin-bottom: 25px;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      border: 1px solid var(--separator);
      border-radius: 1px;
      width: calc(100% / 2 - 17px);
      translate: 0 -50%;
    }

    &::after {
      right: 0;
    }
  }

  &__card-form {
    margin-bottom: 12px;
  }

  &__close {
    background-color: #0000;
    color: var(--button-cancel-color);

    @include tablet {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.4;
    }

    &:hover {
      color: var(--accent);
    }
  }
}

.dark .payment {
  background-color: #4d5e82;

  &__separator {
    color: #fff;
  }
}
</style>
