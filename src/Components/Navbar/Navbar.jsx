import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import useAuth from "../../Hook/useAuth";
import avatarImg from "../../assets/avatar2.png";
import logo from "../../assets/logo.avif";
import useSingleUser from "../../Hook/useSingleUser";
import useAxiosCommon from "../../Hook/useAxiosCommon";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useRole from "../../Hook/useRole";

const Navbar = () => {
  const { user, logOut, setLoading, loading } = useAuth();
  // console.log(user)
  const [role] = useRole();
  const axiosCommon = useAxiosCommon();
  const singleUser = useSingleUser();
  console.log("Single user data:", singleUser);

  const [isOpen, setIsOpen] = useState(false);
  const [isWork, setIsWork] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosCommon.get(`/checkTeam/${user?.email}`);
        console.log("API response:", data);
        setIsWork(data.isWork);
      } catch (error) {
        console.log("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user?.email, axiosCommon, setLoading]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img
              className="rounded-full h-16 w-16"
              referrerPolicy="no-referrer"
              src={
                singleUser && singleUser.companyLogo
                  ? singleUser.companyLogo
                  : logo
              }
              alt="profile"
            />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-16">
          <ul className="hidden lg:flex md:flex items-center justify-between gap-10">
            <Link to="/" className="group flex cursor-pointer flex-col">
              Home
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/join-employee"
              className="group flex cursor-pointer flex-col"
            >
              Join As Employee
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/join-hr" className="group flex cursor-pointer flex-col">
              Join As HR/Admin
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </ul>
          <div className="flex items-center justify-between gap-5">
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <IoMdMenu className="text-2xl" />
                  <div className="hidden md:block">
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={
                        singleUser && singleUser?.image
                          ? singleUser?.image
                          : avatarImg
                      }
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white text-black overflow-hidden right-0 top-12 text-sm z-50">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      onClick={handleLinkClick}
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/join-employee"
                      onClick={handleLinkClick}
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Join As Employee
                    </Link>
                    <Link
                      to="/join-hr"
                      onClick={handleLinkClick}
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Join As HR/Admin
                    </Link>

                    {user ? (
                      <>
                        {role === "admin" && (
                          <Link
                            to="/dashboard"
                            onClick={handleLinkClick}
                            className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Dashboard
                          </Link>
                        )}
                        {isWork && (
                          <Link
                            to="/dashboard"
                            onClick={handleLinkClick}
                            className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Dashboard
                          </Link>
                        )}
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <Link
                        to="/login"
                        onClick={handleLinkClick}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
