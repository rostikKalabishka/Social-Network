const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const messagePageReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, messageText: action.text };
    // stateCopy.messageText = action.text;

    case SEND_MESSAGE:
      let newMessage = {
        id: 222,
        message: state.messageText,
        unread: 5,
      };
      return {
        ...state,
        messageText: "",
        UserMessageData: [...state.UserMessageData, newMessage],
      };

    default:
      return state;
  }
};
export const AddMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};

export const onMessageChangeActionCreator = (textChange) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, text: textChange };
};

export default messagePageReducer;
