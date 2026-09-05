import {AppLayoutsEnum} from "@/shared/layouts";

export const route = {
  component: () => import('@/pages/home').then((m) => m.VHomePage),
  meta: {
    layout: AppLayoutsEnum.default,
    public: false,
  },
  path: '/',
}
