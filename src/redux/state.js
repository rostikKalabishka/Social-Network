// import online from "../assets/img/online.jpg";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      PostsData: [
        {
          id: 1,
          likeCounts: 33,
          message: "dasdasda dsadasdad",
        },
        {
          id: 2,
          likeCounts: 133,
          message: "Hey Buba",
        },
      ],
      newPostText: "Hi react slave",
    },
    messagePage: {
      UsersData: [
        {
          id: 1,
          name: "Anton 1",
        },
        {
          id: 2,
          name: "Anton 2",
        },
        {
          id: 3,
          name: "Anton 3",
        },
        {
          id: 4,
          name: "Anton 4",
        },
        {
          id: 5,
          name: "Valer4ik",
        },
      ],

      UserMessageData: [
        {
          id: 1,
          message: "biba boba",
          unread: 1,
        },
        {
          id: 2,
          message: "nigga boba",
          unread: 33,
        },
        {
          id: 3,
          message: "giga boba",
          unread: 31231,
        },
      ],
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Raf",
          online: 1,
        },
        {
          id: 2,
          name: "Vaf",
          online: 1,
        },
        {
          id: 3,
          name: "Ihor",
          online: 1,
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state_changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 15,
        message: this._state.profilePage.newPostText,
        likeCounts: 0,
      };
      this._state.profilePage.PostsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;

      this._callSubscriber(this._state);
    }
  },
};

export const AddPostActionCreator = () => {
  return { type: ADD_POST };
};
export const onPostChangeActionCreator = (textChange) => {
  return { type: UPDATE_NEW_POST_TEXT, text: textChange };
};

export default store;
