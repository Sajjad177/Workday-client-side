import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";


const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <div>
        {/* sidebar */}
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 md:ml-64">
        {/* dynamic content */}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
