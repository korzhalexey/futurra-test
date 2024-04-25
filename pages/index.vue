<template>
  <div class="home">
    <div class="home__container container">
      <app-header class="home__header" />

      <main class="home__main">
        <div class="home__content">
          <subscription-info class="only-mobile" />
          <learning-journey-promo class="home__learning-journey-promo" />
        </div>
        <subscription-plan-details />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  padding-bottom: 8px;
  background: url("/assets/images/main-bg-light.png") no-repeat 50% 50% / cover;

  &__header {
    margin-bottom: 80px;

    @include tablet {
      margin-bottom: 24px;
    }
  }

  &__main,
  &__content {
    display: flex;
    justify-content: center;
    gap: 4.74861vw;

    @include tablet {
      flex-direction: column-reverse;
      align-items: center;
      gap: 25px;
    }
  }

  &__learning-journey-promo {
    @include tablet {
      margin-bottom: 10px;
    }
  }
}

.dark .home {
  background-image: url("/assets/images/main-bg-dark.png");

  &__content {
    @include tablet {
      border-radius: var(--br-lg);
      padding: 16px;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
