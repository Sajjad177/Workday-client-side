import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllTeams = () => {
    const axiosCommon = useAxiosCommon();

    const {data: teams } = useQuery({
        queryKey:["work"],
        queryFn: async() => {
            const {data} = await axiosCommon.get("/teams");
            console.log(data)
            return data
        }
    })
    return {teams}
};

export default useAllTeams;