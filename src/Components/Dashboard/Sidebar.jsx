import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";
import useRole from "../../Hook/useRole";
import MenuItem from "../Menu/MenuItem";
import AdminMenu from "../Menu/AdminMenu";
import EmployeeMenu from "../Menu/EmployeeMenu";
import useSingleUser from "../../Hook/useSingleUser";
import avatarImg from "../../assets/avatar2.png";

const Sidebar = () => {
  const { logOut } = useAuth();
  const singleUser = useSingleUser();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div
            className="flex items-center flex-wrap justify-around"
            id="_ActiveAvatar_NavigateUI"
          ></div>
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
            <div
              className="flex items-center flex-wrap justify-around"
              id="_ActiveAvatar_NavigateUI"
            >
              <div className="relative group">
                <img
                  className="size-[110px] bg-slate-500 object-cover rounded-full"
                  src={
                    singleUser && singleUser.image
                      ? singleUser.image
                      : avatarImg
                  }
                  alt="avatar navigate ui"
                />
                <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
              </div>
            </div>
          </div>
          <h5 className="text-center font-semibold">{singleUser?.name}</h5>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {role === "employee" && <EmployeeMenu></EmployeeMenu>}

            {role === "admin" && <AdminMenu></AdminMenu>}
          </div>
        </div>

        <div>
          <hr />
          {/* Profile Menu */}
          <MenuItem
            label={"Back To Home"}
            address={"/"}
            icon={FaHome}
          ></MenuItem>

          <MenuItem
            label={"Profile"}
            address={"/dashboard/profile"}
            icon={FcSettings}
          ></MenuItem>

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
