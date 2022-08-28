import { ItemLink } from ".";

// Assets
import HomeIcon from "~/assets/png/tabBar/home.png";

export interface TabBarItem extends ItemLink {
  iconActive?: any;
  active?: boolean;
}

export const tabBar: TabBarItem[] = [
  {
    active: true,
    slug: "home",
    route: "Home",
    label: "Início",
    icon: HomeIcon,
  },
];
