import {AppLayoutsEnum} from "@/app/layouts";
import {RouteNamesEnum} from "@/shared/config";

export const route = {
  component: () => import('@/pages/home').then((m) => m.VHomePage),
  meta: {
    layout: AppLayoutsEnum.default,
    public: true,
  },
  name: RouteNamesEnum.Home,
  path: '/',
}
