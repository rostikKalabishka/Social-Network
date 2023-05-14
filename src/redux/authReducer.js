const SET_USER_DATA = "SET-USER-DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};
const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setUserDataActionCreator = (userId, email, login) => {
  return { type: SET_USER_DATA, data: { userId, email, login } };
};

export default authReducer;
