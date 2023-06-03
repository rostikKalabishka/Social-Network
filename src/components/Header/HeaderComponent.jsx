import { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  getAuthMeThunkCreator,
  setUserDataActionCreator,
} from "../../redux/authReducer";

const HeaderComponent = ({ isAuth, login, getAuthMeThunkCreator }) => {
  useEffect(() => {
    getAuthMeThunkCreator();
    // getAuthMe().then((data) => {
    //   if (data.resultCode === 0) {
    //     const { id, email, login } = data.data;
    //     setUserData(id, email, login);
    //   }
    // });
  }, []);

  return (
    <>
      <Header isAuth={isAuth} login={login} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authorize.isAuth,

    login: state.authorize.login,
  };
};
const HeaderConnect = connect(mapStateToProps, {
  getAuthMeThunkCreator: getAuthMeThunkCreator,
})(HeaderComponent);
export default HeaderConnect;
