import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";
import useSingleUser from "../../../../Hook/useSingleUser";

const MyPendingRequest = () => {
  const [assets] = useAllAsset();
  const singleUser = useSingleUser();
  const [myAssets, setMyAssets] = useState([]);

  useEffect(() => {
    const myAssetsFiltered = assets.filter(
      (asset) =>
        singleUser.email === asset.requested_by && asset.status === "pending"
    );
    setMyAssets(myAssetsFiltered);
  }, [assets, singleUser.email]);

  return (
    <div className="container mx-auto p-3">
      <h1 className="lg:text-4xl text-2xl lg:text-center my-12 font-bold">
        Pending Request
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {myAssets?.slice(0, 5)?.map((asset) => (
          <div
            key={asset._id}
            className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">{asset?.assetName}</h1>
              <p className="text-sm text-gray-500">{asset?.category}</p>
              <h4>Add By: {asset?.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPendingRequest;
