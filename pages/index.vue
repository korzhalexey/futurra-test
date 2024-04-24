<template>
  <div class="home">
    <div class="home__container container">
      <app-header class="home__header" />

      <main class="home__main">
        <subscription-info class="only-mobile" />
        <learning-journey-promo class="home__learning-journey-promo" />
        <subscription-plan-details />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: url("/main-bg.png") no-repeat 50% 50% / cover;

  &__header {
    margin-bottom: 80px;

    @include tablet {
      margin-bottom: 24px;
    }
  }

  &__main {
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
</style>
