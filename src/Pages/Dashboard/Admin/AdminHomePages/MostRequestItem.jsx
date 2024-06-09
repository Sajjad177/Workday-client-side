import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";

const MostRequestItem = () => {

  const [assets] = useAllAsset();
  const [assetRequest, setRequestAsset] = useState([]);

  useEffect(() => {
    const filteredAsset = assets.filter((asset) => asset.status === "pending");
    setRequestAsset(filteredAsset);
  }, [assets]);


  return (
    <div className="lg:my-20 my-14">
      <h1 className="lg:text-4xl text-2xl text-center font-bold mb-10">Most Request</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {assetRequest?.slice(0,5)?.map((asset) => (
          <div
            key={asset._id}
            className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
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

export default MostRequestItem;
