import {AppLayoutsEnum} from "../../layouts";
import type { Component } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    canActivate?: () => boolean
    layout?: AppLayoutsEnum
    layoutComponent?: Component
    public?: boolean
  }
}
