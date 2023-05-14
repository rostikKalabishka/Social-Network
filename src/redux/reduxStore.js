import { combineReducers, legacy_createStore as createStore } from "redux";

import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import findUsersPageReducer from "./findUsersPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
  findUserPage: findUsersPageReducer,
  authorize: authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
