

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";
import { FaUsers } from "react-icons/fa";


const Sidebar = () => {
  const { user } = useAuth();
  console.log(user);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define dynamic routes data for Employee and Admin menus
  const employeeRoutes = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "My Assets", path: "/dashboard/my-assets", icon: HomeIcon },
    { name: "My Team", path: "/dashboard/my-team", icon: Team },
    { name: "Request for Asset", path: "/dashboard/request-asset ", icon: HomeIcon },
    { name: "Profile", path: "/dashboard/profile", icon: HomeIcon },
  ];

  const adminRoutes = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Asset List", path: "/dashboard/asset-list", icon: HomeIcon },
    { name: "Add An Asset", path: "/dashboard/add-asset", icon: HomeIcon },
    { name: "Custom Request List", path: "/dashboard/custom-request", icon: HomeIcon },
    { name: "My Employee", path: "/dashboard/my-employee", icon: HomeIcon },
    { name: "Add An Employee", path: "/dashboard/add-employee", icon: HomeIcon },
    { name: "Profile", path: "/dashboard/profile", icon: HomeIcon },
  ];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col bg-[#3C3D50] ${
        isCollapsed && !isHovered ? "w-28" : "w-64"
      } h-screen px-4 text-gray-900 border transition-width duration-300`}
    >
      <div className="mt-10 mb-4">
        {/* image section */}
        <div
          className="flex items-center flex-wrap justify-around"
          id="_ActiveAvatar_NavigateUI"
        >
          <div className="relative group">
            <img
              className="size-[110px] bg-slate-500 object-cover rounded-full"
              src="https://source.unsplash.com/300x300/?profile"
              alt="avatar navigate ui"
            />
            <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
            <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
          </div>
        </div>

        <ul className="ml-4">
          <li className="text-gray-100 text-lg mb-2">Employee Menu</li>
          {employeeRoutes.map((route) => (
            <li
              key={route.name}
              className="mb-2 px-2 py-2 text-gray-100 flex flex-row border-red-300 hover:text-black hover:bg-red-300 hover:font-bold rounded-lg cursor-pointer"
              onClick={handleLinkClick}
            >
              <span>
                <route.icon className="fill-current h-5 w-5" />
              </span>
              {!(isCollapsed && !isHovered) && (
                <NavLink
                  to={route.path}
                  className="ml-2"
                  // className="font-bold"
                >
                  {route.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <ul className="ml-4 mt-6">
          <li className="text-gray-100 text-lg mb-2">Admin Menu</li>
          {adminRoutes.map((route) => (
            <li
              key={route.name}
              className="mb-2 px-2 py-2 text-gray-100 flex flex-row border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded-lg cursor-pointer"
              onClick={handleLinkClick}
            >
              <span>
                <route.icon className="fill-current h-5 w-5" />
              </span>
              {!(isCollapsed && !isHovered) && (
                <NavLink
                  to={route.path}
                  className="ml-2"
                  // activeClassName="font-bold"
                >
                  {route.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Define icon components
const HomeIcon = () => <FcHome className="text-3xl" />;
const Team = () => <FaUsers className="text-3xl" />;


export default Sidebar;
