import {AppLayoutsEnum} from "@/app/layouts";
import {RouteNamesEnum} from "@/shared/config";

export const route = {
  component: () => import('@/pages/not-found').then((m) => m.VNotFound),
  meta: {
    layout: AppLayoutsEnum.onlyContent,
    public: true,
  },
  name: RouteNamesEnum.NotFound,
  path: '/:pathMatch(.*)*',
}
