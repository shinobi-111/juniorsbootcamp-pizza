import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import {router, store} from "@/app/providers";
import '@fontsource/nunito';

const app = createApp(App)

app.use(createPinia())

app
  .use(store)
  .use(router)
  .mount('#app')
