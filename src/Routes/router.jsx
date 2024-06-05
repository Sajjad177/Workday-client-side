import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import Home from "../Pages/Home/Home";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAssets from "../Pages/Dashboard/MyAssets";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam";
import RequestForAsset from "../Pages/Dashboard/Employee/RequestForAsset";
import AssetList from "../Pages/Dashboard/Admin/AssetList";
import AddAsset from "../Pages/Dashboard/Admin/AddAsset";
import CustomRequest from "../Pages/Dashboard/Admin/CustomRequest";
import MyEmployee from "../Pages/Dashboard/Admin/MyEmployee";
import AddEmployee from "../Pages/Dashboard/Admin/AddEmployee";
import AllRequest from "../Pages/Dashboard/Admin/AllRequest";
import UpdateAsset from "../Pages/UpdateAsset/UpdateAsset";
import Packages from "../Pages/Dashboard/Packages/Packages";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import Profile from "../Components/Dashboard/Profile";
import EmployeeHome from "../Pages/Dashboard/Employee/EmployeeHome";
// import OurPackages from "../Components/OurPackages/OurPackages";


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
        // employee
        {
          path:"employee-home",
          element:<EmployeeHome></EmployeeHome>
        },
        {
          path:"my-assets",
          element:<MyAssets></MyAssets>
        },
        {
          path:"my-team",
          element:<MyTeam></MyTeam>
        },
        {
          path:"request-asset",
          element:<RequestForAsset></RequestForAsset>
        },
        // Admin------------
        {
          path:"admin-home",
          element:<AdminHome></AdminHome>
        },
        {
          path:"asset-list",
          element:<AssetList></AssetList>
        },
        {
          path:"add-asset",
          element:<AddAsset></AddAsset>
        },
        {
          path:"update/:id",
          element:<UpdateAsset></UpdateAsset>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/asset/${params.id}`)
        },
        {
          path:"custom-request",
          element:<CustomRequest></CustomRequest>
        },
        {
          path:"my-employee",
          element:<MyEmployee></MyEmployee>
        },
        {
          path:"add-employee",
          element:<AddEmployee></AddEmployee>
        },
        {
          path:"all-request",
          element:<AllRequest></AllRequest>
        },
        {
          path:"packages",
          element:<Packages></Packages>
        },
        {
          path:"profile",
          element:<Profile></Profile>
        },
      ]
    }
  ]);
