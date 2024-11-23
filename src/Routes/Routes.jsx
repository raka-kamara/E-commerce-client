import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Page/Home";
import Register from "../Page/Register";
import Login from "../Page/Login";
import DashboardLayout from "../layouts/DashBoardLayout";
import Overview from "../Page/Dashboard/Overview";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import MyProducts from "../Page/Dashboard/seller/MyProducts";
import AddProducts from "../Page/Dashboard/seller/AddProducts";
import Products from "../Page/Products";
import MyWishList from "../Page/Dashboard/buyer/MyWishList";
import About from "../Page/About";
import ContactUs from "../Page/ContactUs";
import ManageUsers from "../Page/Dashboard/admin/ManageUsers";
import MyCart from "../Page/Dashboard/buyer/MyCart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact-us",
          element:<ContactUs/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
      ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute> <DashboardLayout/></PrivateRoute>,
      children:[
        {
          path: "/dashboard/overview",
          element:<Overview/>,
        },
        // buyer routes
        {
          path: "/dashboard/wishlist",
          element:<BuyerRoute><MyWishList/></BuyerRoute>,
        },
        {
          path: "/dashboard/cart",
          element:<BuyerRoute><MyCart/></BuyerRoute>,
        },
        // seller routes
        {
          path: "/dashboard/my-products",
          element:<SellerRoute><MyProducts/></SellerRoute>,
        },
        {
          path: "/dashboard/add-products",
          element:<SellerRoute><AddProducts/></SellerRoute>,
        },
        // admin
        {
          path: "/dashboard/manage-users",
          element:<ManageUsers/>,
        },

      ]
    }
  ]);