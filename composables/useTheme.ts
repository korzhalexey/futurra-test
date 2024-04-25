export const useTheme = () => {
  const isLightTheme = useRoute().query.abtest !== 'var2';
  const DARK_APP_NAME = import.meta.env.VITE_DARK_APP_NAME;
  const LIGHT_APP_NAME = import.meta.env.VITE_LIGHT_APP_NAME;
  const currentAppName = computed(() => isLightTheme ? LIGHT_APP_NAME : DARK_APP_NAME);

  return {
    isLightTheme,
    currentAppName,
    darkAppName: DARK_APP_NAME,
    lightAppName: LIGHT_APP_NAME,
  };
};
