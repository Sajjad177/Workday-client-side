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
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AdminRout from "./AdminRout";
// import TeamRoute from "./TeamRoute";
// import TeamRoute from "./TeamRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      //TODO---------- employee------------
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
      //TODO----------- Admin------------
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminRout>
              <AdminHome></AdminHome>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "asset-list",
        element: (
          <PrivateRoute>
            <AdminRout>
              <AssetList></AssetList>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "add-asset",
        element: (
          <PrivateRoute>
            <AdminRout>
              <AddAsset></AddAsset>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <AdminRout>
              <UpdateAsset></UpdateAsset>
            </AdminRout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asset/${params.id}`),
      },
      {
        path: "custom-request",
        element: (
          <PrivateRoute>
            <AdminRout>
              <CustomRequest></CustomRequest>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "my-employee",
        element: (
          <PrivateRoute>
            <AdminRout>
              <MyEmployee></MyEmployee>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "add-employee",
        element: (
          <PrivateRoute>
            <AdminRout>
              <AddEmployee></AddEmployee>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "all-request",
        element: (
          <PrivateRoute>
            <AdminRout>
              <AllRequest></AllRequest>
            </AdminRout>
          </PrivateRoute>
        ),
      },
      {
        path: "packages",
        element: (
          <PrivateRoute>
            <AdminRout>
              <Packages></Packages>
            </AdminRout>
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
