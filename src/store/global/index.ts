import { AnyAction, Reducer } from 'redux';
import { action } from 'typesafe-actions';
import { ItemLink } from '~/model';

// Types
export enum GlobalTypes {
  STORE_CURRENT_ROUTE = '@app/STORE_CURRENT_ROUTE',
  STORE_REFRESH = '@app/STORE_REFRESH',
}

export interface GlobalState {
  readonly currentRoute: ItemLink;
  readonly refresh: Date;
}

// Actions
export const storeCurrentRoute = (route: ItemLink) => action(GlobalTypes.STORE_CURRENT_ROUTE, route);
export const storeRefresh = () => action(GlobalTypes.STORE_REFRESH);

// Reducers
const INITIAL_STATE: GlobalState = {
  currentRoute: { label: 'Home', slug: 'home' } as ItemLink,
  refresh: new Date(),
};

const global: Reducer<GlobalState> = (state = INITIAL_STATE, { type, payload } = {} as AnyAction) => {
  switch (type) {
    case GlobalTypes.STORE_CURRENT_ROUTE:
      return { ...state, currentRoute: payload };
    case GlobalTypes.STORE_REFRESH:
      return { ...state, refresh: new Date() };

    default:
      return state;
  }
};

export default global;
