<script lang="ts" setup>
const paymentDialogRef = ref();
</script>

<template>
  <div class="learning-journey-promo">
    <h2 class="learning-journey-promo__title">
      Start your learning <br />
      journey now
    </h2>

    <p class="learning-journey-promo__description">
      Get a
      <strong>
        <span class="text--primary">Planet</span
        >Learn
      </strong>
      plan to rock <br class="only-desktop" />
      self-learning
    </p>

    <button
        class="learning-journey-promo__get-plan button--action"
        @click="paymentDialogRef.$refs.paymentRef.showModal"
    >
      Get my plan
    </button>

    <teleport to="body">
      <dialogs-payment ref="paymentDialogRef" />
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.learning-journey-promo {
  @include tablet {
    width: 100%;
  }

  &__title {
    margin-bottom: 25px;
    font-size: 3rem;

    @include tablet {
      margin-bottom: 15px;
      font-size: 2rem;
    }
  }

  &__description {
    margin-bottom: 33px;
    font-size: 1.5rem;
  }

  &__get-plan {
    max-width: 273px;

    @include tablet {
      max-width: unset;
    }
  }
}
</style>
