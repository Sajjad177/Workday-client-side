import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";

const LimitedStock = () => {

  const [assets] = useAllAsset()
  // console.log(assets)
  const [limited, setLimited] = useState()

  useEffect(() => {
    const filteredAsset = assets.filter((asset) => asset?.quantity >= 1 && asset?.quantity <= 10);
    setLimited(filteredAsset);
  }, [assets]);

  console.log(limited)


  return (
    <div className="container mx-auto lg:my-20 my-14">
      <h1 className="mb-10 lg:text-4xl text-2xl text-center font-bold">
        Limited Stock
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {limited?.map((asset) => (
          <div
            key={asset._id}
            className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">{asset?.assetName}</h1>
              <p className="text-sm text-gray-500">{asset?.category}</p>
              <h4>Add By : {asset?.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedStock;
