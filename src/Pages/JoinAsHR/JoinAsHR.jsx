import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { FcUpload } from "react-icons/fc";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils/index";
import useAxiosCommon from "../../Hook/useAxiosCommon.jsx";

const JoinAsHR = () => {
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const { setLoading, createUser } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [showName, setShowName] = useState({});

  const handelSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const companyName = form.companyName.value;
    const email = form.email.value;
    const category = form.category.value;
    const dateOfBirth = startDate;
    const password = form.password.value;
    const companyLogo = form.companyLogo.files[0];

    try {
      setLoading(true);

      const image_url = await imageUpload(companyLogo);

      const result = await createUser(email, password);

      const userInfo = {
        name,
        companyName,
        email,
        category,
        dateOfBirth,
        companyLogo: image_url,
        role: "admin",
      };

      await axiosCommon.post("/users", userInfo);

      console.log(result);
      toast.success("Sign up successfully");
      navigate("/payment");
    } catch (error) {
      
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto lg:my-20 my-14">
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        <h1 className="backdrop-blur-sm text-4xl pb-8 text-center font-bold">
          Join As HR/Admin
        </h1>
        <form onSubmit={handelSignUp}>
          <div className="p-12">
            <div className="space-y-5">
              <label htmlFor="text" className="block">
                Name
              </label>
              <div className="relative">
                <input
                  id="Name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                />
              </div>
              <label htmlFor="text" className="block">
                Company Name
              </label>
              <div className="relative">
                <input
                  id="Name"
                  type="text"
                  name="companyName"
                  placeholder="Enter your name"
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                />
              </div>
              <label htmlFor="text" className="block">
                Company Logo
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

              <label htmlFor="email" className="block">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                />
              </div>
              <label className="block">Select a Package</label>
              <select
                name="category"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
              >
                <option>Select Package</option>
                <option value="5_member">5 Member for $ 5</option>
                <option value="10_member">10 Member for $ 10</option>
                <option value="15_member">15 Member for $ 15</option>
              </select>
              <label htmlFor="email" className="block">
                Date of birth
              </label>
              <div className="relative w-full">
                <DatePicker
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <div className="relative">
                <input
                  id="pass"
                  type="password"
                  name="password"
                  placeholder=".............."
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-2 px-5  mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <div className="flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          <button
            // onClick={handleGoogle}
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            Continue with Google
          </button>
        </div>
        <p className="text-center text-lg">
          Already Have an account{" "}
          <Link to="/login">
            <span className="underline text-red-600">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinAsHR;
