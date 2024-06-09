// import  { useEffect, useState } from 'react';
// import useAxiosCommon from './useAxiosCommon';

// const useAllAsset = () => {
//     //user there secret API
//     const axiosCommon = useAxiosCommon();
//     const [assets, setAssets] = useState([]);

//     useEffect(() => {
//         axiosCommon.get("/assets").then((res) => {
//           setAssets(res.data);
//         });
//       }, [axiosCommon]);
//       return assets;

// };

// export default useAllAsset;

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
