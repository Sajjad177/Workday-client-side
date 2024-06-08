import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyTeam = () => {
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const { data: adminEmail = [] } = useQuery({
    queryKey: ["hrEmail", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const { data } = await axiosCommon.get(`/hrEmail/${user?.email}`);

      return data;
    },
  });

  

  const { data: teams } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/myTeam/${adminEmail?.workAt}`);
      return data;
      // setMyTeam(data)
    },
  });

  return (
    <div>
      <h1 className="text-4xl text-center mt-14">My Team</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {teams?.map((team) => (
          <div
            key={team._id}
            className="mx-auto my-20 max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md border md:max-w-[350px]"
          >
            {/* profile image & bg  */}
            <div className="relative w-80">
              <img
                width={100}
                height={100}
                className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
                src={team.photo}
                alt="card navigate ui"
              />
            </div>
            {/* profile name & role */}
            <div className="space-y-1 pt-8 text-center">
              <h1 className="text-xl md:text-2xl">{team?.name}</h1>
              <p className="text-sm text-gray-400">{team?.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
