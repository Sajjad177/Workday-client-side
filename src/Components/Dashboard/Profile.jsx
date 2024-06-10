import { useState } from "react";
import { FcUpload } from "react-icons/fc";
import { imageUpload } from "../../utils/index";
import useAxiosCommon from "../../Hook/useAxiosCommon";
import useSingleUser from "../../Hook/useSingleUser";
import avatarImg from "../../assets/avatar2.png";

import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Profile = () => {
  const singleUser = useSingleUser();
  console.log(singleUser);
  const axiosCommon = useAxiosCommon();
  const [openModal, setOpenModal] = useState(false);
  const [showName, setShowName] = useState({});

  const handelUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    console.log(name, image);

    try {
      const image_url = await imageUpload(image);

      const updateInfo = {
        name,
        image: image_url,
      };

      const { data } = await axiosCommon.put(
        `/update-profile/${singleUser._id}`,
        updateInfo
      );
      toast.success("Profile updated successfully");
      console.log("Updated data is ########--->", data);
    } catch (error) {
      console.log(error);
      toast.error("Something wrong ❌ check again");
    }
  };

  return (
    <div>
      <Helmet>
        <title>WorkDay / Profile</title>
      </Helmet>
      <h1 className="text-4xl text-center mt-10 font-bold"> Your Profile </h1>
      <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border mt-20">
        <img
          className="lg:h-[320px] lg:w-[350px] rounded-full object-cover"
          src={singleUser && singleUser.image ? singleUser.image : avatarImg}
          alt="avatar navigate ui"
        />
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-lg font-semibold text-center">
              {singleUser?.name ? singleUser?.name : "please add your name"}
            </h1>
            <p className="text-sm">({singleUser?.role})</p>
          </div>

          <p>Email : {singleUser?.email} </p>
        </div>
        <div className="flex justify-between">
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
                <form
                  onSubmit={handelUpdate}
                  className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
                >
                  <div className="space-y-5">
                    <label htmlFor="email_navigate_ui_modal" className="block">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id=""
                        type="text"
                        name="name"
                        placeholder="Update your name..."
                        className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white"
                        required
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
                        name="image"
                        id="type2-2"
                        required
                      />
                    </div>
                  </div>
                  {/* button type will be submit for handling form submission*/}
                  <button
                    type="submit"
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
