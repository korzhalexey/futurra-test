<script lang="ts" setup>
const emit = defineEmits(['updated', 'finish']);
const props = defineProps<{
  initialSecondsAmount: number,
  timerIntervalSeconds: number,
}>();

const timeLeft = defineModel<number>({ default: 0 });
const progress = computed(() => timeLeft.value / props.initialSecondsAmount * 100 + '%');

const timer = setInterval(() => {
  if (timeLeft.value && timeLeft.value > 0) {
    timeLeft.value -= props.timerIntervalSeconds;
  } else {
    clearInterval(timer);
    emit('finish');
  }
}, props.timerIntervalSeconds * 1000);
</script>

<template>
  <div
      :class="{'timer--low': timeLeft && timeLeft <= 10}"
      class="timer"
  >
    <div
        :style="{
          width: progress,
          transition: `width ${timerIntervalSeconds}s`,
        }"
        class="timer__progress"
    />
    <span class="timer__time">{{ formatSeconds(timeLeft) }}</span>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  position: relative;
  overflow: hidden;
  border-radius: var(--br-lg);
  width: 160px;
  padding: 15px;
  background-color: var(--dark);
  text-align: center;

  @include tablet {
    width: 110px;
    padding: 10px;
  }

  &--low {
    box-shadow: 0 0 6px 0 rgba(255, 0, 0, 1);
    outline: 2px solid var(--error);
  }

  &__progress {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    border-radius: var(--br-lg);
    height: 100%;
    background-color: var(--green);
  }

  &__time {
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
  }
}
</style>
