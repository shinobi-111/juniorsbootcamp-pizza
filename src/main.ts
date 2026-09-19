import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import {router, store} from "@/app/providers";
import '@fontsource/nunito';
import {PiniaColada} from "@pinia/colada";

const app = createApp(App)

app.use(createPinia())

app
  .use(store)
  .use(router)
  .use(PiniaColada, {
    queryOptions: {
      // change the stale time for all queries to 0ms
      staleTime: 0,
    },
    mutationOptions: {
      // add global mutation options here
    },
    plugins: [
      // add Pinia Colada plugins here
    ],
  })
  .mount('#app')
