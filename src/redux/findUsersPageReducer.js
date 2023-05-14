const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const IS_FETCHING = "IS-FETCHING";

let initialState = {
  users: [],
  pageSize: 100,
  // totalUsersCount: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};
const findUsersPageReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: true };
          }
          return users;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case IS_FETCHING:
      return { ...state, isFetching: action.fetching };
    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId };
};
export const unFollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPageActionCreator = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalCountActionCreator = (count) => {
  return { type: SET_TOTAL_USERS_COUNT, count };
};

export const setPreloaderActionCreator = (fetching) => {
  return { type: IS_FETCHING, fetching };
};

export default findUsersPageReducer;
