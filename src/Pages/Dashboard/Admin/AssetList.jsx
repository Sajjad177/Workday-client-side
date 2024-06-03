
import { IoIosSearch } from "react-icons/io";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

const AssetList = () => {
  const axiosCommon = useAxiosCommon();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState(""); // New state for input
  const [stockStatus, setStockStatus] = useState("");
  const [assetType, setAssetType] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const { data: assets = [], isLoading } = useQuery({
    queryKey: ["asset", searchQuery, stockStatus, assetType, sortOrder],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/assets", {
        params: {
          search: searchQuery,
          stockStatus,
          assetType,
          sortOrder,
        },
      });
      return data;
    },
  });

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
            Assets List
          </h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {assets.length}
          </span>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="max-w-md ">
            <div className="relative flex items-center w-full h-12 rounded-lg pl-2 focus-within:shadow-lg border bg-white overflow-hidden">
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search item name.."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="place-items-center h-full w-12 bg-yellow-200 text-gray-300 cursor-pointer flex"
                onClick={handleSearch} // Update the search when button is clicked
              >
                <IoIosSearch className="text-2xl"></IoIosSearch>
              </button>
            </div>
          </div>
          <div className="border-b-2">
            <select
              className="select focus:outline-none w-full max-w-xs"
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
            >
              <option value="">Available/Out-of-Stock</option>
              <option value="available">Available</option>
              <option value="out-of-stock">Out-of-Stock</option>
            </select>
          </div>
          <div className="border-b-2">
            <select
              className="select focus:outline-none w-full max-w-xs"
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
            >
              <option value="">Returnable/Non-returnable</option>
              <option value="Returnable">Returnable</option>
              <option value="Non-returnable">Non-returnable</option>
            </select>
          </div>
          <div className="border-b-2">
            <select
              className="select focus:outline-none w-full max-w-xs"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort By Quantity</option>
              <option value="high-to-low">High to Low</option>
              <option value="low-to-high">Low to High</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Type</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Quantity</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Added Date</span>
                        </button>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {assets.map((asset) => (
                      <tr key={asset._id}>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {asset.assetName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {asset.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {asset.quantity}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {new Date(asset.addTime).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="btn bg-green-400">Update</button>
                          <button className="btn bg-red-500 ml-3">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetList;
