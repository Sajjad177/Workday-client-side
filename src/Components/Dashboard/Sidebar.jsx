
import { FcHome } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdChecklist } from "react-icons/md";


import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Sidebar = () => {
  const { logOut, role } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className='flex items-center flex-wrap justify-around" id="_ActiveAvatar_NavigateUI'>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-300 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='flex items-center flex-wrap justify-around" id="_ActiveAvatar_NavigateUI'>
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
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}


            <p className="text-red-600">Employee section-----</p>

            {/* home not added */}
            <Link to="my-assets">
                <button className="btn">My Assets</button>
            </Link>
            <Link to="my-team">
                <button className="btn">My Team</button>
            </Link>
            <Link to="request-asset">
                <button className="btn">Request For Assets</button>
            </Link>
            {/* custom request add later */}


            <p className="text-red-600">Admin section-----</p>
            {/* home not added */}
            <Link to="asset-list">
                <button className="btn"> Assets List</button>
            </Link>
            <Link to="my-employee">
                <button className="btn">My Employee List</button>
            </Link>
            <Link to="all-request">
                <button className="btn">All Request</button>
            </Link>
            <Link to="custom-request">
                <button className="btn">Custom Request</button>
            </Link>
            <Link to="add-asset">
                <button className="btn">Add Assets</button>
            </Link>
            <Link to="add-employee">
                <button className="btn">Add Employee</button>
            </Link>


            {/**----------- Admin Menu Items -------------**/}
            <nav>
              {role === "admin" && (
                <>
                  {/* Admin Menu Items */}
                  <NavLink
                    to="/admin-dashboard"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                      }`
                    }
                  >
                    <BsGraphUp className="w-5 h-5" />
                    <span className="mx-4 font-medium">Admin Dashboard</span>
                  </NavLink>
                  {/* Add more admin links here */}
                </>
              )}
              {role === "employee" && (
                <>
                  {/*---------- Employee Menu Items------- */}
                  <NavLink
                    to="/employee-dashboard"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                      }`
                    }
                  >
                    <BsGraphUp className="w-5 h-5" />
                    <span className="mx-4 font-medium">Employee Dashboard</span>
                  </NavLink>
                  {/* Add more employee links here */}
                </>
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          {/* Profile Menu */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />
            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
