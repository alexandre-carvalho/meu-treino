import { ItemLink } from "~/model";
import { storeCurrentRoute } from "~/store/global";

import { getNavigation, getStore } from "./index";

export function navigate(item: ItemLink): boolean {
  if (!getNavigation()) return false;

  getStore().dispatch(storeCurrentRoute(item));
  if (item.route) {
    getNavigation().navigate(item.route as never, null);
    return true;
  }
  return false;
}

export function goBack() {
  getStore().dispatch(storeCurrentRoute({}));
  getNavigation().goBack();
}

export function isActiveRoute(slug: string): boolean {
  const global = getStore().getState().global;
  return !!global.currentRoute.slug && global.currentRoute.slug == slug;
}
