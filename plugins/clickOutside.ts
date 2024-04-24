import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  interface ClickOutsideBindingValue {
    (event?: Event): void;
  }

  const clickOutside = {
    mounted (el: HTMLElement & {
      __clickOutside__?: (event: Event) => void
    }, binding: {
      value: ClickOutsideBindingValue
    }) {
      const handleClickOutside = (event: Event) => {
        if (!el.contains(event.target as Node)) {
          binding.value(event);
        }
      };

      document.addEventListener('click', handleClickOutside);

      el.__clickOutside__ = handleClickOutside;
    }, unmounted (el: HTMLElement & {
      __clickOutside__?: (event: Event) => void
    }) {
      document.removeEventListener('click', el.__clickOutside__);
      delete el.__clickOutside__;
    },
  };

  nuxtApp.vueApp.directive('click-outside', clickOutside);
});
