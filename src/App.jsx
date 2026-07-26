import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
      </div>
    </>
  );
}

export default App;
