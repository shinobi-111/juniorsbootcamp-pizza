import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { loadLayoutMiddleware } from './middlewares'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  document.querySelector('#app')?.classList.add('route-loading')

  await loadLayoutMiddleware(to)
})
