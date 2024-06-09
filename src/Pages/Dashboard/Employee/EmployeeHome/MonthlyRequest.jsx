import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";
import useSingleUser from "../../../../Hook/useSingleUser";

const MonthlyRequest = () => {
  const [assets] = useAllAsset();
  const singleUser = useSingleUser();
  const [myAssets, setMyAssets] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const myAssetsFiltered = assets.filter(
      (asset) => singleUser.email === asset.requested_by
    );
    const filterMonth = myAssetsFiltered.filter((item) => {
      const itemDate = new Date(item.request_date);
      return itemDate >= lastMonth && itemDate <= currentDate;
    });
    const sorted = filterMonth.sort((a, b) => {
      const dateA = new Date(a.request_date);
      const dateB = new Date(b.request_date);
      return dateB - dateA;
    });

    setMyAssets(sorted);
  }, [assets, singleUser.email]);

//   console.log(myAssets);

  return (
    <div className="container mx-auto p-3">
      <h1 className="lg:text-4xl text-2xl lg:text-center my-12 font-bold">
        Monthly Request
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {myAssets?.slice(0, 5)?.map((asset) => (
          <div
            key={asset._id}
            className="max-w-[350px] w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">{asset?.assetName}</h1>
              <p className="text-sm text-gray-500">{asset?.category}</p>
              <div>
                <p>Add Date : {new Date(asset.addTime).toLocaleDateString()} </p>
                <p>Request Time : {new Date(asset.request_date).toLocaleDateString()} </p>
              </div>
              <h4>Add By: {asset?.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyRequest;
