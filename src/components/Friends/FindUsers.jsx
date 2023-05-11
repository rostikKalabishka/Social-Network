import { Button } from "@mui/material";

import styles from "./Friends.module.css";
const FindUsers = ({ unFollowing, following, users, setUsers }) => {
  // console(unFollowing);
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        followed: true,
        avatarUrl: "https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg",
        name: "Vasya",
        status: "ті хто?",
        location: { country: "Ukraine", city: "Mukachevo" },
      },
      {
        id: 2,
        followed: false,
        avatarUrl: "https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg",
        name: "Nadya",
        status: "Vafelniy",
        location: { country: "Ukraine", city: "Uzhgorod" },
      },
    ]);
  }

  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Users</h2>
        {users.map((item) => (
          <div key={item.id}>
            <span>
              <div>
                <img src={item.avatarUrl} />
              </div>
            </span>
            <div>
              {item.followed ? (
                <Button
                  onClick={() => {
                    unFollowing(item.id);
                  }}
                  variant="contained"
                  disableElevation
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    following(item.id);
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
                <div>{item.location.city}</div>
                <div>{item.location.country}</div>
              </span>
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FindUsers;

// import { Button } from "@mui/material";

// const FindUsers = ({ unFollowing, following, users, setUsers }) => {
//   console.log(users);
//   return (
//     <div>
//       <h2>Users</h2>
//       <div>
//         {users.map((item) => (
//           <div key={item.id}>
//             <span>
//               <div>
//                 {/* <img className={styles.avatarImg} src={avatar} /> */}
//               </div>
//             </span>
//             <div>
//               <Button>Follow</Button>
//             </div>
//             <span>
//               <span>
//                 <div>{item.name}</div>
//                 <div>{item.status}</div>
//               </span>
//               <span>
//                 <div>{item.location.city}</div>
//                 <div>{item.location.country}</div>
//               </span>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FindUsers;
