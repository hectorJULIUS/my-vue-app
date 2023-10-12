import { createApp } from 'vue'; // Import createApp from Vue
import App from './App.vue';
import router from './router';
import store from './store';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App); // Create a Vue app instance

app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app'); // Mount the app to the '#app' element in your HTML
