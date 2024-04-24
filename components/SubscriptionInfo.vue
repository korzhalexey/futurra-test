<template>
  <div>
    <ul class="subscription-info__list">
      <li class="subscription-info__item">
        Exclusive access to
        <mark>350+</mark>
        learning programs
      </li>

      <li class="subscription-info__item">
        Personalized course plan
      </li>

      <li class="subscription-info__item">
        Comfy learning schedule made by you
      </li>

      <li class="subscription-info__item">
        <span class="text--primary">24/7</span>
        tutor support in a secure chat
      </li>

      <li class="subscription-info__item">
        Lifetime access to materials
      </li>
    </ul>

    <h6 class="subscription-info__secure-label">
      <img alt="safe" src="~/assets/images/lock.svg">
      Safe & secure payment
    </h6>

    <p class="subscription-info__info">
      $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
      automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and
      Subscription Terms .
    </p>
  </div>
</template>

<style lang="scss" scoped>
.subscription-info {
  &__list {
    margin-bottom: 26px;
    padding-left: 33px;
  }

  &__item {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &::before {
      content: url("/assets/images/star.svg");
      position: absolute;
      top: 50%;
      left: 0;
      width: 24px;
      height: 24px;
      translate: -34px -50%;
    }
  }

  &__secure-label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    border: 1px solid var(--borders);
    border-radius: var(--br-lg);
    padding: 15px;
    background-color: var(--white);
    font-weight: 600;
    color: var(--notion);
    gap: 12px;
  }

  &__info {
    opacity: 0.5;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
