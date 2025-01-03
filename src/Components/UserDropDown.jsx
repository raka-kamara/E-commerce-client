import { RxAvatar } from "react-icons/rx";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
import useUserData from "../hooks/useUserData";

const UserDropDown = () => {
  const { user, Logout } = useAuth();
  const userData = useUserData();

  const handleLogOut = () => {
    Logout();
  };

  return (
    <div className="">
   


      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="m-1 flex items-center">
          <div className="avatar">
            <div className=" ring-offset-base-100 w-10 rounded-full ring ">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="User Avatar" />
              ) : (
                <RxAvatar className="w-full h-full" />
              )}         
            </div>
          </div>
          <div className="badge">+{userData?.wishlist?.length}</div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex gap-3"
        >
          <li>
            <NavLink to="/dashboard/overview">DashBoard</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-ghost border-0 border-b-2 border-gray-500 "
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
