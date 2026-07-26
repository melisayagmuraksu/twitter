import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function User() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center gap-4 fixed bottom-4">
      <img src="https://picsum.photos/200" className="rounded-full w-10" />
      <div className="grow">
        <p>{user.username}</p>
        <p>@{user.username.toLowerCase()}</p>
      </div>
      <i className="fa-solid fa-ellipsis" onClick={() => logOut()}></i>
    </div>
  );
}
export default User;
