import {AppLayoutsEnum} from "../../../layouts";
import {RouteNamesEnum} from "@/shared/config";

export const route = {
  component: () => import('@/pages/auth').then((m) => m.VAuthPage),
  meta: {
    layout: AppLayoutsEnum.onlyContent,
    public: true,
  },
  name: RouteNamesEnum.Auth,
  path: '/auth',
}
