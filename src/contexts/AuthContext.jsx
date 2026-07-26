import { createContext } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const history = useHistory();

  function logIn(user) {
    console.log("Login", user);
    setUser(user);
    history.push("/home");
  }

  function logOut() {
    console.log("Logout");
    setUser(null);
    history.push("/login");
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
