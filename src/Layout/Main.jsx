import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div className="font-vietnam">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
