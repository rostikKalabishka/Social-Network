import { combineReducers, legacy_createStore as createStore } from "redux";

import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import findUsersPageReducer from "./findUsersPageReducer";

let reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
  findUserPage: findUsersPageReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
