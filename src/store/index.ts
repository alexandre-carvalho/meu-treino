import {
  applyMiddleware,
  combineReducers,
  Store,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { injectStore } from "~/services";

import global, { GlobalState } from "./global";

export interface ApplicationState {
  global: GlobalState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  combineReducers({
    global,
  }),
  applyMiddleware(sagaMiddleware)
);

injectStore(store);
export default store;
