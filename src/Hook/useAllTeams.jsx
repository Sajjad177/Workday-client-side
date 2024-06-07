import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";

const useAllTeams = () => {
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["work"],
    queryFn: async () => {
      await axiosCommon.get(`/hrEmail/${user?.email}`);
      // console.log(data)
      return data;
    },
  });
  return { data };
};

export default useAllTeams;
