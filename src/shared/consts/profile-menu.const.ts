import {RoutesEnum} from "@shared/enums/routes.enum";

export const ProfileMenuConst = [
  {
    title: 'Избранное',
    href: RoutesEnum.PROFILE + RoutesEnum.FAVORITES
  },
  {
    title: 'Управление',
    href: RoutesEnum.MANAGEMENT
  }
]
