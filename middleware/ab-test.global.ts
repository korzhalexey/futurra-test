import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to) => {
  if (to.query.abtest === 'test') {
    const randomDesignVersion = Math.random() < 0.5 ? 'var1' : 'var2';

    return navigateTo({
      ...to,
      query: {
        abtest: randomDesignVersion,
      },
      replace: true,
    });
  }

  document?.documentElement.classList.add(to.query.abtest === 'var2' ? 'dark' : 'light');
});
