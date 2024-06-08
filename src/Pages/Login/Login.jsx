import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, setLoading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      await signIn(email, password);
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid please check again");
    }
  };

  const handleGoogle = async () => {
    setLoading(true);

    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate("/");
      toast.success("Login successfully");
    } catch (error) {
      console.log(error);
      toast.error("Invalid please check again");
    }
  };

  return (
    <div>
      <Helmet>
        <title>WorkDay / Login </title>
      </Helmet>
      <div className="container mx-auto">
        <div className="flex h-screen items-center justify-center  p-6 md:p-0">
          <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
            {/* register design side  */}
            <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
              <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
              <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
              <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
              <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-medium text-white/80 ">
                  Welcome Back
                </h2>
                <p className="animate-pulse text-sm text-white/60">
                  Please Enter You Information
                </p>
              </div>
            </div>
            {/* input side  */}
            <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
              <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">
                Login Here
              </h2>
              <form onSubmit={handelLogin}>
                <div className="flex  w-full flex-col items-center justify-center gap-4">
                  <input
                    className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <input
                    className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[80%] cursor-pointer rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%]"
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* divider  */}
              <div className="my-8 flex items-center px-8">
                <hr className="flex-1" />
                <div className="mx-4 text-gray-400">OR</div>
                <hr className="flex-1" />
              </div>
              {/* sign with google */}
              <button
                onClick={handleGoogle}
                className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
              >
                <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
                  Sign With
                </div>
                <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">
                  G+
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
