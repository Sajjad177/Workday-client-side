import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";

const JoinAsEmployee = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { signInWithGoogle, createUser, setLoading} =
    useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const dateOfBirth = startDate;

    const asEmployee = (name, email, dateOfBirth, password);
    console.log(asEmployee);

    try {
      const result = await createUser(email, password);
      console.log(result);
      toast.success("Sign In successfully");
    } catch {
      toast.error("Invalid Check again");
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Sign up successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto lg:my-20 my-14">
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        <h1 className="backdrop-blur-sm text-4xl text-center font-bold">
          Join as Employee
        </h1>
        <form onSubmit={handelSubmit}>
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
              <label htmlFor="email" className="block">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
                />
              </div>
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
              className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="">
          <div className=" flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <button
          onClick={handleGoogle}
            type="button"
            className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;
