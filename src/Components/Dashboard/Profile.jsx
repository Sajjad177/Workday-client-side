import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import { FcUpload } from "react-icons/fc";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  const [openModal, setOpenModal] = useState(false);
  const [showName, setShowName] = useState({});

  return (
    <div>
      <h1 className="text-4xl text-center mt-10 font-bold"> Your Profile </h1>
      <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border mt-20">
        <img
          width={200}
          height={200}
          className="h-[320px] w-[350px] rounded-full object-cover"
          //   src={user?.photoURL}
          src="https://source.unsplash.com/200x200/?bed"
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold text-center">
            {user?.displayName}
          </h1>
          <p>Email : {user?.email} </p>
        </div>
        <div className="flex justify-between">
          {/* <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
            update
          </button> */}
          {/* <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
            Edit
          </button> */}
          <div className="mx-auto flex w-72 items-center justify-center">
            <button
              onClick={() => setOpenModal(true)}
              className="btn rounded-md py-2 px-5"
            >
              Edit
            </button>
            <div
              onClick={() => setOpenModal(false)}
              className={`fixed z-[100] flex items-center justify-center ${
                openModal ? "opacity-1 visible" : "invisible opacity-0"
              } inset-0 h-full w-full  backdrop-blur-sm duration-100`}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${
                  openModal
                    ? "opacity-1 translate-y-0 duration-300"
                    : "-translate-y-20 opacity-0 duration-150"
                }`}
              >
                <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                  <div className="space-y-5">
                    <label htmlFor="email_navigate_ui_modal" className="block">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="email_navigate_ui_modal"
                        type="email"
                        placeholder="Update your name..."
                        className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:text-white"
                      />
                    </div>
                    <label htmlFor="text" className="block">
                      Add Your Photo
                    </label>
                    <div>
                      <label htmlFor="type2-2" className="flex w-full">
                        <div className="p-3 w-full cursor-pointer pl-10 drop-shadow-lg outline-none border flex items-center gap-5">
                          <FcUpload className="text-xl"></FcUpload>
                          Choose File
                        </div>
                        <div className="flex w-full max-w-[380px] items-center border-b-[2px] px-2 font-medium text-gray-400">
                          {showName.name ? showName.name : "No File Chosen"}
                        </div>
                      </label>
                      <input
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const imageFile = e.target.files[0];
                            setShowName(imageFile);
                          }
                        }}
                        className="hidden"
                        type="file"
                        name="companyLogo"
                        id="type2-2"
                      />
                    </div>
                  </div>
                  {/* button type will be submit for handling form submission*/}
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 "
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
