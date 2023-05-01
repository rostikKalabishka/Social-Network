import online from "../assets/img/online.jpg";
import { rerender } from "../render";
export const state = {
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 15,
    message: postMessage,
    likeCounts: 0,
  };
  state.profilePage.PostsData.push(newPost);
  rerender(state);
};
