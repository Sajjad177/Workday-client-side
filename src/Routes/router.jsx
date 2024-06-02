import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import Home from "../Pages/Home/Home";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAssets from "../Pages/Dashboard/MyAssets";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/join-employee",
          element:<JoinAsEmployee></JoinAsEmployee>
        },
        {
          path:"/join-hr",
          element:<JoinAsHR></JoinAsHR>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"my-assets",
          element:<MyAssets></MyAssets>
        }
      ]
    }
  ]);
