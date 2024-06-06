import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosCommon from "../../../Hook/useAxiosCommon";

const MyTeam = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axiosCommon.get(`/teams`, {
          params: { workAt: user?.email } // Use workAt to filter
        });
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
        // Handle error, show a toast message, etc.
      }
    };

    fetchTeamMembers();
  }, [axiosCommon, user?.email]);

  console.log(teamMembers);

  return (
    <div>
      <h1 className="text-4xl text-center mt-14">My Team</h1>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="mx-auto my-20 max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md md:max-w-[350px]"
        >
          <div className="relative">
            <img
              width={350}
              height={150}
              className="h-[150px] w-[350px] rounded-2xl bg-gray-500"
              src="https://source.unsplash.com/350x150/?northern lights"
              alt="card navigate ui"
            />
            <img
              width={100}
              height={100}
              className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
              src={member.photo}
              alt={member.name}
            />
          </div>
          <div className="space-y-1 pt-8 text-center">
            <h1 className="text-xl md:text-2xl">{member.name}</h1>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between px-4">
            <div className="text-center">
              <h5 className="text-xl font-medium">17</h5>
              <p className="text-sm text-gray-400">Post</p>
            </div>
            <div className="text-center">
              <h5 className="text-xl font-medium">9.7k</h5>
              <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <h5 className="text-xl font-medium">217</h5>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="t w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTeam;
