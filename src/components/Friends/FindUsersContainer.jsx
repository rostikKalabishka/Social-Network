import React, { useEffect } from "react";
import {
  followActionCreator,
  getFollowThunkCreator,
  getUnFollowThunkCreator,
  getUsersThunkCreator,
  setCurrentPageActionCreator,
  setFollowFetchingActionCreator,
  setPreloaderActionCreator,
  setTotalCountActionCreator,
  setUsersActionCreator,
  unFollowActionCreator,
} from "../../redux/findUsersPageReducer";
import { connect } from "react-redux";

import FindUsers from "./FindUsers";

import Preloader from "../Preloader/Preloader";

import { getUsers } from "../../api/api";
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
  followFetchingBtn,
  followFetching,
  getUsersThunkCreator,
  getUnFollowThunkCreator,
  getFollowThunkCreator,
  isAuth,
}) => {
  useEffect(() => {
    // preloader(true);

    // getUsers(currentPage, pageSize).then((data) => {
    //   preloader(false);
    //   setUsers(data.items);
    //   setTotalUsersCount(data.totalCount);
    // });
    getUsersThunkCreator(false, currentPage, pageSize);
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/follow/${profileId}`)
    //   .then((response) => {
    //     following(response.users.followed);
    //     unFollowing(response.users.followed);
    //   });
  }, []);

  const clickNumber = (pageNumber) => {
    getUsersThunkCreator(pageNumber, currentPage, pageSize);
    // setCurrentPage(pageNumber);
    // preloader(true);
    // getUsers(pageNumber, pageSize).then((data) => {
    //   preloader(false);
    //   setUsers(data.items);
    // });
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
        followFetchingBtn={followFetchingBtn}
        followFetching={followFetching}
        getUnFollowThunkCreator={getUnFollowThunkCreator}
        getFollowThunkCreator={getFollowThunkCreator}
        isAuth={isAuth}
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
    followFetching: state.findUserPage.followFetching,
    isAuth: state.authorize.isAuth,
  };
};

// };

const FindUsersContainer = connect(mapStateToProps, {
  following: followActionCreator,
  unFollowing: unFollowActionCreator,
  setTotalUsersCount: setTotalCountActionCreator,
  followFetchingBtn: setFollowFetchingActionCreator,
  getUsersThunkCreator: getUsersThunkCreator,
  // clickNumberThunkCreator: clickNumberThunkCreator,
  getUnFollowThunkCreator: getUnFollowThunkCreator,
  getFollowThunkCreator: getFollowThunkCreator,
})(FindUsersAPIComponent);
export default FindUsersContainer;
