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
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Payment/Payment";
// import OurPackages from "../Components/OurPackages/OurPackages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/join-employee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/join-hr",
        element: <JoinAsHR></JoinAsHR>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // employee
      {
        path: "employee-home",
        element: (
          <PrivateRoute>
            <EmployeeHome></EmployeeHome>
          </PrivateRoute>
        ),
      },
      {
        path: "my-assets",
        element: (
          <PrivateRoute>
            <MyAssets></MyAssets>
          </PrivateRoute>
        ),
      },
      {
        path: "my-team",
        element: (
          <PrivateRoute>
            <MyTeam></MyTeam>
          </PrivateRoute>
        ),
      },
      {
        path: "request-asset",
        element: (
          <PrivateRoute>
            <RequestForAsset></RequestForAsset>
          </PrivateRoute>
        ),
      },
      // Admin------------
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminHome></AdminHome>
          </PrivateRoute>
        ),
      },
      {
        path: "asset-list",
        element: (
          <PrivateRoute>
            <AssetList></AssetList>
          </PrivateRoute>
        ),
      },
      {
        path: "add-asset",
        element: (
          <PrivateRoute>
            <AddAsset></AddAsset>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateAsset></UpdateAsset>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asset/${params.id}`),
      },
      {
        path: "custom-request",
        element: (
          <PrivateRoute>
            <CustomRequest></CustomRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "my-employee",
        element: (
          <PrivateRoute>
            <MyEmployee></MyEmployee>
          </PrivateRoute>
        ),
      },
      {
        path: "add-employee",
        element: (
          <PrivateRoute>
            <AddEmployee></AddEmployee>
          </PrivateRoute>
        ),
      },
      {
        path: "all-request",
        element: (
          <PrivateRoute>
            <AllRequest></AllRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "packages",
        element: (
          <PrivateRoute>
            <Packages></Packages>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
