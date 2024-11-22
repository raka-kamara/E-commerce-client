import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Page/Home";
import Register from "../Page/Register";
import Login from "../Page/Login";
import DashboardLayout from "../layouts/DashBoardLayout";
import Overview from "../Page/Dashboard/Overview";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import MyProducts from "../Page/Dashboard/seller/MyProducts";
import AddProducts from "../Page/Dashboard/seller/AddProducts";
import Products from "../Page/Products";

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
        // seller routes
        {
          path: "/dashboard/my-products",
          element:<SellerRoute><MyProducts/></SellerRoute>,
        },
        {
          path: "/dashboard/add-products",
          element:<SellerRoute><AddProducts/></SellerRoute>,
        },
      ]
    }
  ]);