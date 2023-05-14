import "./index.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FindUsersContainer from "./components/Friends/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderComponent />
      <Navigation />

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/messages" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/find_user" element={<FindUsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};
// rerender(state);
export default App;
