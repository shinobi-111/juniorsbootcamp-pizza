import {AppLayoutsEnum} from "@/shared/layouts";
import {RouteNamesEnum} from "@/shared/config";

export const route = {
  component: () => import('@/pages/home').then((m) => m.VHomePage),
  meta: {
    layout: AppLayoutsEnum.default,
    public: false,
  },
  name: RouteNamesEnum.Home,
  path: '/',
}
