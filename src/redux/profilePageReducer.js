const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  PostsData: [
    {
      id: 1,
      likeCounts: 33,
      message: "ті хто?",
    },
    {
      id: 2,
      likeCounts: 133,
      message: "Hey Buba",
    },
  ],
  newPostText: "Hi react slave",
};
const profilePageReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 15,
        message: state.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        newPostText: "",
        PostsData: [...state.PostsData, newPost],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.text };

    default:
      return state;
  }
};
export const AddPostActionCreator = () => {
  return { type: ADD_POST };
};
export const onPostChangeActionCreator = (textChange) => {
  return { type: UPDATE_NEW_POST_TEXT, text: textChange };
};

export default profilePageReducer;
