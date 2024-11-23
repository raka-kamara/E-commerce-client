import { Link } from "react-router-dom";
import UserDropDown from "../UserDropDown";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const {user} = useAuth();
    const navOptions = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          
        </>);
    return (
        <div>
            <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
             
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl font-bold"><img src="../../../public/logo.png" alt="" className="w-10 h-10"/> E-Mart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        {
          user ? (
            <div className=" navbar-end">
              <UserDropDown/>
        </div>
          ): (
             <div className="navbar-end gap-5">
         <Link to="/login">
         <button className="btn btn-ghost border-0 border-b-2 border-gray-500 ">
            Sign In
          </button>
         </Link>
         <Link to="/register">
         <button className="btn btn-ghost border-0 border-b-2 border-gray-500 ">
            Register
          </button>
         </Link>
        </div>
          )
        }

      </div>
        </div>
    );
};

export default Navbar;