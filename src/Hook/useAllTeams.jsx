import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
// import useAuth from "./useAuth";

const useAllTeams = () => {
  const axiosCommon = useAxiosCommon();
  // const { user } = useAuth();
  const { data:teams } = useQuery({
    queryKey: ["work"],
    queryFn: async () => {
      const {data} =  await axiosCommon.get("/teams");
      console.log(data)
      return data;
    },
  });
  return teams ;
};

export default useAllTeams;
