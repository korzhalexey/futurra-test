<script lang="ts" setup>
const trialDuration = +import.meta.env.VITE_TRIAL_DAYS_DURATION;
const trialPrice = +import.meta.env.VITE_TRIAL_PRICE;
const promotionalPrice = +import.meta.env.VITE_PROMOTIONAL_PRICE;
const regularPrice = +import.meta.env.VITE_REGULAR_PRICE;
const initialTimer = +import.meta.env.VITE_INITIAL_TIMER_DURATION;

const timeLeft = ref(getFromLocalStorage('timeLeft') ?? initialTimer);

watch(timeLeft, (timeLeft) => {
  setToLocalStorage('timeLeft', timeLeft);
});
</script>

<template>
  <div class="subscription-details">
    <div class="subscription-details__container">
      <div class="subscription-details__wrapper">
        <div class="subscription-details__content">
          <p class="subscription-details__trial">{{ trialDuration }}-day trial for
            <mark>
              {{ formatPrice(trialPrice) }}
            </mark>
          </p>

          <p class="subscription-details__week">
            Then
            {{ formatPrice(timeLeft ? promotionalPrice : regularPrice) }}
          </p>

          <p v-if="timeLeft" class="subscription-details__discount">
            <del>
              {{ formatPrice(regularPrice) }}/week
            </del>
          </p>
        </div>

        <ui-timer
            v-if="timeLeft"
            v-model="timeLeft"
            :initial-seconds-amount="initialTimer"
            :timer-interval-seconds="1"
        />
      </div>

      <subscription-info class="only-desktop" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscription-details {
  position: relative;
  max-width: 480px;

  @include tablet {
    width: 100%;
    max-width: unset;
  }

  &__container {
    border: 1px solid var(--input-border);
    border-radius: var(--br-xl);
    padding: 24px;
    background-color: var(--white);

    @include tablet {
      border-radius: var(--br-lg);
      padding: 16px;
    }
  }

  &::before {
    content: url("@/assets/images/asteroid.svg");
    position: absolute;
    top: 0;
    right: 0;
    translate: -25px -65%;

    @include tablet {
      content: unset;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    gap: 45px;

    @include tablet {
      margin-bottom: 0;
      gap: 12px;
    }
  }

  &__trial {
    margin-bottom: 6px;
    font-size: 1.5rem;
    font-weight: 800;
    white-space: nowrap;

    @include tablet {
      margin-bottom: 8px;
      font-size: 1.125rem;
    }
  }

  &__week {
    margin-bottom: 5px;
    font-size: 1.25rem;
    font-weight: 600;

    @include tablet {
      margin-bottom: 2px;
      font-size: 1rem;
    }
  }

  &__discount {
    @include tablet {
      font-size: 0.875rem;
    }
  }
}

.dark {
  .subscription-details {
    &__container {
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(20px);

      @include tablet {
        border: unset;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(0);
      }
    }

    &::before {
      content: "";
      top: 0;
      left: 0;
      width: 86px;
      height: 86px;
      background-image: url("@/assets/images/ball.svg");
      background-repeat: no-repeat;
      background-size: cover;
      translate: -50% -40%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 247px;
      height: 247px;
      background-image: url("@/assets/images/rocket.png");
      background-repeat: no-repeat;
      background-size: cover;
      translate: 50% 40%;
    }

    &::before,
    &::after {
      @include tablet {
        content: unset;
      }
    }

    &__trial,
    &__trial mark {
      color: var(--notion);
    }
  }
}
</style>
