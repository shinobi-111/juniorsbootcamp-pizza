import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'
import { route as authRoute } from './auth'

export const routes: readonly RouteRecordRaw[] = [
  authRoute,
  mainRoute,

] as const
