import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";
import useSingleUser from "../../../../Hook/useSingleUser";

const PendingRequest = () => {
  const [assets] = useAllAsset();
  console.log(assets)
  const singleUser = useSingleUser()
  console.log(singleUser)
  const [assetRequest, setRequestAsset] = useState([]);

  useEffect(() => {
    if(singleUser.email === assets.email){
      const filteredAsset = assets.filter((asset) => asset.status === "pending");
    setRequestAsset(filteredAsset);
    }
  }, [assets, singleUser.email]);


  // useEffect(() => {
  //   const filteredAsset = assets.filter((asset) => asset.status === "pending");
  //   setRequestAsset(filteredAsset);
  // }, [assets]);

  return (
    <div className="container mx-auto p-3">
      <h1 className="lg:text-4xl text-2xl lg:text-center my-12 font-bold p-3">
        Pending Request
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-20 gap-10">
        {assetRequest?.slice(0,5)?.map((asset) => (
          <div
            key={asset._id}
            className="max-w-[350px] w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">{asset?.assetName}</h1>
              <p className="text-sm text-gray-500">{asset?.note}</p>
              <h4>{asset?.requested_by}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequest;
