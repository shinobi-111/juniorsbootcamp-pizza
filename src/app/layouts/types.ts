export enum AppLayoutsEnum {
  default = 'default',
  onlyContent = 'onlyContent',
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  onlyContent: 'OnlyContentLayout.vue',
}

