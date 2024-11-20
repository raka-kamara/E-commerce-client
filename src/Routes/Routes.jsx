import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Page/Home";
import Register from "../Page/Register";
import Login from "../Page/Login";
import DashboardLayout from "../layouts/DashBoardLayout";
import Overview from "../Page/Dashboard/Overview";

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
      element: <DashboardLayout/>,
      children:[
        {
          path: "/dashboard/overview",
          element:<Overview/>,
        },
      ]
    }
  ]);