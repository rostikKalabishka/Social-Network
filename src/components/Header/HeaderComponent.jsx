import { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserDataActionCreator } from "../../redux/authReducer";
import axios from "axios";

const HeaderComponent = ({ setUserData, isAuth, login }) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          setUserData(id, email, login);
        }
      });
  });

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
  setUserData: setUserDataActionCreator,
})(HeaderComponent);
export default HeaderConnect;
