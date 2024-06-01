import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import Home from "../Pages/Home/Home";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";


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
        }
      ]
    },
  ]);
