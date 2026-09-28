import { createApp } from 'vue'

import App from './app/App.vue'
import {router, store} from "@/app/providers";
import '@fontsource/nunito';
import {PiniaColada} from "@pinia/colada";
import { RegleVuePlugin } from '@regle/core';

const app = createApp(App)



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
  .use(RegleVuePlugin)
  .mount('#app')
