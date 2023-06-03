import { getFollow, getUnFollow, getUsers } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const IS_FETCHING = "IS-FETCHING";
const FOLLOWING_FETCHING = "FOLLOWING-FETCHING";

let initialState = {
  users: [],
  pageSize: 100,
  // totalUsersCount: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followFetching: [],
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

    case FOLLOWING_FETCHING:
      return {
        ...state,
        followFetching: action.followFetching
          ? [...state.followFetching, action.userId]
          : state.followFetching.filter((id) => id !== action.userId),
      };
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

export const setFollowFetchingActionCreator = (followFetching, userId) => {
  return { type: FOLLOWING_FETCHING, followFetching, userId };
};
export const getUsersThunkCreator = (pageNumber, currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setPreloaderActionCreator(true));
    dispatch(setCurrentPageActionCreator(pageNumber));
    getUsers(currentPage, pageSize).then((response) => {
      dispatch(setPreloaderActionCreator(false));
      dispatch(setUsersActionCreator(response.data.items));
      dispatch(setTotalCountActionCreator(response.data.totalCount));
    });
  };
};

export const getUnFollowThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(setFollowFetchingActionCreator(true, id));
    getUnFollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowActionCreator(id));
      }
      dispatch(setFollowFetchingActionCreator(false, id));
    });
  };
};

export const getFollowThunkCreator = (id) => {
  return (dispatch) => {
    dispatch(setFollowFetchingActionCreator(true, id));
    getFollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followActionCreator(id));
      }
      dispatch(setFollowFetchingActionCreator(false, id));
    });
  };
};

// export const clickNumberThunkCreator = ({ pageNumber }, pageSize) => {
//   return (dispatch) => {
//     dispatch(setCurrentPageActionCreator(pageNumber));
//     dispatch(setPreloaderActionCreator(true));

//     getUsers(pageNumber, pageSize).then((data) => {
//       dispatch(setPreloaderActionCreator(false));
//       dispatch(setUsersActionCreator(data.items));
//     });
//   };
// };
export default findUsersPageReducer;
