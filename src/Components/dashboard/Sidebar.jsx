import { BiLogOut } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdOutlineInventory2, MdOutlineManageAccounts } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: " Add Products",
    icon: <IoMdAddCircleOutline />,
  },
];
const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My WishList",
    icon: <FaRegHeart />,
  },
  {
    id: 2,
    route: "/dashboard/cart",
    title: "My Cart",
    icon: <BsCart4 />,
  },
];
const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/manage-users",
    title: "Manage Users",
    icon: <MdOutlineManageAccounts />,
  }
];

const Sidebar = () => {
  const { Logout } = useAuth();
  const handleLogOut = () => {
    Logout();
  };
  const userData = useUserData();
  return (
    <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
      <ul className="flex flex-col gap-2">
        <h1>Gadget Shop</h1>
        <li className="p-2 border border-black rounded-md">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        {userData.role === "seller" && userData.status === "approved" &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md">
              <NavLink to={route.route} className="flex items-center gap-2">
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        {userData.role === "admin" &&
          adminRoutes.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md">
              <NavLink to={route.route} className="flex items-center gap-2">
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        {userData.role === "buyer" &&
          buyerRoutes.map((route) => (
            <li key={route.id} className="p-2 border border-black rounded-md">
              <NavLink to={route.route} className="flex items-center gap-2">
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}

        <li className="p-2 border border-black rounded-md">
          <NavLink to="/" className="flex items-center gap-2">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>

        <li
          onClick={handleLogOut}
          className="p-2 border border-black rounded-md"
        >
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <BiLogOut />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
