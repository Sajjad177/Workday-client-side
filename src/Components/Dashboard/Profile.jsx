import useAuth from "../../Hook/useAuth";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)

  return (
    <div>
        <h1 className = "text-4xl text-center mt-10 font-bold"> Your Profile </h1>
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
          <h1 className="text-lg font-semibold text-center">{user?.displayName}</h1>
          <p>Email : {user?.email} </p>
        </div>
        <div className="flex justify-between">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
            update
          </button>
          <button className="btn rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
