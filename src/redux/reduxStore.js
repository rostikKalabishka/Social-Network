import { combineReducers, legacy_createStore as createStore } from "redux";

import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
