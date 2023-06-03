import {
  AddMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.authorize.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeMessage: (text) => {
      const active = onMessageChangeActionCreator(text);
      dispatch(active);
    },
    addMessage: () => {
      const active = AddMessageActionCreator();
      dispatch(active);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
