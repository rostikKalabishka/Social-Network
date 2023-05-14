// import backgroundProfile from "./../../../assets/img/background.jpg";
import Preloader from "../../Preloader/Preloader";
import avatar from "./../../../assets/img/avatar.webp";
import styles from "./ProfileInfo.module.css";
const InfoUser = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className="container">
      <div className={styles.backgroundImg}>
        {/* <img src={backgroundProfile} /> */}
      </div>
      <div className={styles.directionBlock}>
        <img
          src={profile.photos.large ? profile.photos.large : avatar}
          alt="photos"
        />{" "}
        +direction
      </div>
      <div>{profile.fullName}</div>
      <div>
        about me: <span>{profile.aboutMe}</span>
      </div>
      <div>
        contacts:
        <ul>
          <li>facebook :{profile.contacts.facebook || "-"}</li>
          <li>
            website :{profile.contacts.website ? profile.contacts.website : "-"}
          </li>
          <li>
            twitter :{profile.contacts.twitter ? profile.contacts.twitter : "-"}
          </li>
          <li>
            instagram :
            {profile.contacts.instagram ? profile.contacts.instagram : "-"}
          </li>
          <li>
            youtube :{profile.contacts.youtube ? profile.contacts.youtube : "-"}
          </li>
          <li>
            github :{profile.contacts.github ? profile.contacts.github : "-"}
          </li>
          <li>
            mainLink :
            {profile.contacts.mainLink ? profile.contacts.mainLink : "-"}
          </li>
        </ul>
      </div>

      <div>
        статус роботы:{" "}
        <span>
          {profile.lookingForAJob
            ? profile.lookingForAJobDescription
            : "ищу роботу"}
        </span>
      </div>
    </div>
  );
};
export default InfoUser;
