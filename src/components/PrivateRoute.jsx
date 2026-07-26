import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../pages/Home";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (user ? <Home /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
