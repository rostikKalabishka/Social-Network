const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] };

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

export default findUsersPageReducer;
