import { useEffect, useState } from "react";
import useAllAsset from "../../../../Hook/useAllAsset";

const LimitedStock = () => {
  const [assets] = useAllAsset();
  const [limited, setLimited] = useState();

  useEffect(() => {
    const filteredAsset = assets.filter(
      (asset) => asset?.quantity >= 1 && asset?.quantity <= 10
    );
    setLimited(filteredAsset);
  }, [assets]);

  console.log(limited);

  return (
    <div className="container mx-auto lg:my-20 my-14 p-3">
      <h1 className="mb-10 lg:text-4xl text-2xl lg:text-center font-bold">
        Limited Stock
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-20 gap-10">
        {limited?.map((asset) => (
          <div
            key={asset._id}
            className="lg:max-w-[350px] w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] border"
          >
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">{asset?.assetName}</h1>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">{asset?.category}</p>
                <div className="flex items-center gap-2">
                  <h5>Quantity: </h5>
                  <p className=" text-gray-500">{asset?.quantity}</p>
                </div>
              </div>
              <h4>Add By : {asset?.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitedStock;
