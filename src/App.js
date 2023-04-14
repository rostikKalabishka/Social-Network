import backgroundProfile from "./assets/img/background.jpg";

import avatar from "./assets/img/avatar.webp";
import "./index.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
};

export default App;
