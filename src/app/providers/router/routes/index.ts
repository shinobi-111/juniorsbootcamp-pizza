import type { RouteRecordRaw } from 'vue-router'

import { route as mainRoute } from './main'


export const routes: readonly RouteRecordRaw[] = [
  mainRoute,
] as const
