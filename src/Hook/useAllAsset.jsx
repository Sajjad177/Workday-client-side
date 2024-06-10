
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllAsset = () => {
  const axiosCommon = useAxiosCommon();

  const { data: assets = [], refetch } = useQuery({
    queryKey: ["assets"],
    queryFn: async () => {
      const response = await axiosCommon.get("/assets");
      return response.data;
    },
  });

  return [assets, refetch];
};

export default useAllAsset;
