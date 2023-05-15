import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/selectors";

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return shouldRedirect ? <Navigate to="/main" /> : children;
};

export default PublicRoute;
