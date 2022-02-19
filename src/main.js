import { createApp } from 'vue';
import { pipe } from '@/assets/js/utils/utils';
import useMitt from '@/plugins/mitt';
import useCookie from '@/plugins/cookie';
import useRequireSafe from '@/plugins/requireSafe';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/config/_reset.scss';
import '@/assets/scss/config/_reboot.scss';
import '@/assets/scss/config/_common.scss';

const app = pipe(
  useMitt,
  useCookie,
  useRequireSafe,
)(createApp(App));

window.$vue = app.use(store).use(router).mount('#app');
