import { Button } from "@mui/material";
import styles from "./Friends.module.css";
import photosDefault from "../../assets/img/photos.jpg";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import { useEffect } from "react";

const FindUsers = ({
  users,
  unFollowing,
  following,
  totalUsersCount,
  pageSize,
  currentPage,
  clickNumber,
  preloader,
  setUsers,
  setTotalUsersCount,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Users</h2>

        {users.map((item) => (
          <div key={item.id}>
            <span>
              <div>
                <NavLink to={`/profile/${item.id}`}>
                  <img
                    alt="small photos"
                    src={
                      item.photos.small != null
                        ? item.photos.small
                        : photosDefault
                    }
                  />
                </NavLink>
              </div>
            </span>
            <div>
              {item.followed ? (
                <Button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "17bd7917-297f-4330-b11b-b3c3833885a4",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          unFollowing(item.id);
                        }
                      });
                  }}
                  variant="contained"
                  disableElevation
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "17bd7917-297f-4330-b11b-b3c3833885a4",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          following(item.id);
                        }
                      });
                  }}
                  variant="contained"
                  disableElevation
                >
                  Follow
                </Button>
              )}
            </div>
            <span>
              <span>
                <div>{item.name}</div>
                <div>{item.status}</div>
              </span>
              <span>
                <div>{"item.location.city"}</div>
                <div>{"item.location.country"}</div>
              </span>
            </span>
          </div>
        ))}
        <div className={styles.pagination}>
          {pages.map((item) => {
            return (
              <span
                onClick={(e) => clickNumber(item)}
                className={currentPage === item && styles.selectedPage}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindUsers;
