import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import './store/store';

const app = createApp(App);

//app.use(VueQueryPlugin);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120, // 2 minutos
        refetchOnReconnect: 'always', // cuando pierda conexion y se reconecte haga la peticion o peticiones
      },
    },
  },
});
app.use(router);

app.mount('#app');
