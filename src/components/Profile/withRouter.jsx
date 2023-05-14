import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigation = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigation, params }} />;
  }

  return ComponentWithRouterProp;
};
export default withRouter;
