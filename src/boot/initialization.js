import { boot } from 'quasar/wrappers';
import { LocalStorage, SessionStorage, Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const init = () => {
    const isDarkMode = LocalStorage.getItem('darkMode');
    Dark.set(isDarkMode);
  };

  init();
});
