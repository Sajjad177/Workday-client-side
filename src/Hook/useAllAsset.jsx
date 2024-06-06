import  { useEffect, useState } from 'react';
import useAxiosCommon from './useAxiosCommon';

const useAllAsset = () => {
    //user there secret API 
    const axiosCommon = useAxiosCommon();
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        axiosCommon.get("/assets").then((res) => {
          setAssets(res.data);
        });
      }, [axiosCommon]);
      return assets;
    
};

export default useAllAsset;