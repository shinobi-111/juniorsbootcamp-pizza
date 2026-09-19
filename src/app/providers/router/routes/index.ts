import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'
import { route as authRoute } from './auth'
import { route as notFoundRoute } from './not-found'

export const routes: readonly RouteRecordRaw[] = [
  authRoute,
  mainRoute,
  notFoundRoute
] as const
