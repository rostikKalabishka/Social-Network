// import { Button } from "@mui/material";
// import axios from "axios";
// import styles from "./Friends.module.css";
// import photosDefault from "../../assets/img/photos.jpg";
// import React from "react";
// import { useEffect } from "react";

// const FindUsers = ({ unFollowing, following, users, setUsers }) => {
//   // console(unFollowing);
//   useEffect(() => {
//     if (users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           setUsers(response.data.items);
//         });
//     }
//   });

//   console.log(users);
//   return (
//     <div className={styles.container}>
//       <div className={styles.item}>
//         <h2>Users</h2>
//         {/*
//         <Button
//           onClick={() => {
//             getUsers();
//           }}
//           variant="contained"
//           disableElevation
//         >
//           Get Users
//         </Button> */}
//         {users.map((item) => (
//           <div key={item.id}>
//             <span>
//               <div>
//                 <img
//                   src={
//                     item.photos.small != null
//                       ? item.photos.small
//                       : photosDefault
//                   }
//                 />
//               </div>
//             </span>
//             <div>
//               {item.followed ? (
//                 <Button
//                   onClick={() => {
//                     unFollowing(item.id);
//                   }}
//                   variant="contained"
//                   disableElevation
//                 >
//                   Unfollow
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={() => {
//                     following(item.id);
//                   }}
//                   variant="contained"
//                   disableElevation
//                 >
//                   Follow
//                 </Button>
//               )}
//             </div>
//             <span>
//               <span>
//                 <div>{item.name}</div>
//                 <div>{item.status}</div>
//               </span>
//               <span>
//                 <div>{"item.location.city"}</div>
//                 <div>{"item.location.country"}</div>
//               </span>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default FindUsers;

//class component
// class FindUsersAPIComponent extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   }
//   clickNumber = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   };
//   render() {
//     return (
//       <FindUsers
//         users={this.props.users}
//         following={this.props.following}
//         unFollowing={this.props.unFollowing}
//         currentPage={this.props.currentPage}
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         clickNumber={this.props.clickNumber}
//       />
//     );
//   }
// }

// class FindUsersAPIComponent extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   }
//   clickNumber = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   };
//   render() {
//     return (
//       <FindUsers
//         users={this.props.users}
//         following={this.props.following}
//         unFollowing={this.props.unFollowing}
//         currentPage={this.props.currentPage}
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         clickNumber={this.props.clickNumber}
//       />
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     following: (userId) => {
//       const active = followActionCreator(userId);
//       dispatch(active);
//     },
//     unFollowing: (userId) => {
//       const active = unFollowActionCreator(userId);
//       dispatch(active);
//     },
//     setUsers: (user) => {
//       const active = setUsersActionCreator(user);
//       dispatch(active);
//     },
//     setCurrentPage: (currentPage) => {
//       const active = setCurrentPageActionCreator(currentPage);
//       dispatch(active);
//     },
//     setTotalUsersCount: (totalCount) => {
//       const active = setTotalCountActionCreator(totalCount);
//       dispatch(active);
//     },
//     preloader: (fetching) => {
//       const active = setPreloaderActionCreator(fetching);
//       dispatch(active);
//     },
//   };
// };
