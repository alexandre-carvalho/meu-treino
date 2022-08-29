import { Store } from "redux";
import { ApplicationState } from "~/store";

// StoreService
let store: Store<ApplicationState>;
export const getStore = (): Store<ApplicationState> => store;
export function injectStore(storeToInject: Store<ApplicationState>) {
  store = storeToInject;
}

// NavigationService
let navigation: any;
export const getNavigation = (): any => navigation;
export function injectNavigation(navigationToInject: any) {
  navigation = navigationToInject;
}
