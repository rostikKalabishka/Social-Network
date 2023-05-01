import "./index.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = ({ state, addPost }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation friends={state.sidebar.friends} />

      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={<Profile PostsData={state.profilePage.PostsData} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                PostsData={state.profilePage.PostsData}
                addPost={addPost}
              />
            }
          />
          <Route
            path="/messages"
            element={
              <Dialogs
                UsersData={state.messagePage.UsersData}
                UserMessageData={state.messagePage.UserMessageData}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
