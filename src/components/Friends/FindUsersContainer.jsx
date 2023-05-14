import React, { useEffect } from "react";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setPreloaderActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unFollowActionCreator,
} from "../../redux/findUsersPageReducer";
import { connect } from "react-redux";
import axios from "axios";
import FindUsers from "./FindUsers";

import Preloader from "../Preloader/Preloader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export const FindUsersAPIComponent = ({
  users,
  following,
  unFollowing,
  currentPage,
  totalUsersCount,
  pageSize,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  isFetching,
  preloader,
}) => {
  const router = {
    location: useLocation(),
    navigation: useNavigate(),
    params: useParams(),
  };
  useEffect(() => {
    const profileId = router.params.userId || 2;
    preloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        preloader(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`)
    //   .then((response) => {
    //     following(response.users.followed);
    //     unFollowing(response.users.followed);
    //   });
  }, [currentPage, pageSize, preloader, setTotalUsersCount, setUsers]);

  const clickNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
    preloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        preloader(false);
        setUsers(response.data.items);
      });
  };
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <FindUsers
        users={users}
        following={following}
        unFollowing={unFollowing}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        clickNumber={clickNumber}
        isFetching={isFetching}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.findUserPage.users,
    totalUsersCount: state.findUserPage.totalUsersCount,
    pageSize: state.findUserPage.pageSize,
    currentPage: state.findUserPage.currentPage,
    isFetching: state.findUserPage.isFetching,
  };
};

// };

const FindUsersContainer = connect(mapStateToProps, {
  following: followActionCreator,
  unFollowing: unFollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setTotalUsersCount: setTotalCountActionCreator,
  preloader: setPreloaderActionCreator,
})(FindUsersAPIComponent);
export default FindUsersContainer;
