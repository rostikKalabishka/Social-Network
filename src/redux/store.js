import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

// import online from "../assets/img/online.jpg";

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
      messageText: "Hi",
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
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );

    this._state.messagePage = messagePageReducer(
      this._state.messagePage,
      action
    );

    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
