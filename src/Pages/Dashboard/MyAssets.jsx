import { IoIosSearch } from "react-icons/io";
import useSingleUser from "../../Hook/useSingleUser";
import { useEffect, useState } from "react";
import useAllAsset from "../../Hook/useAllAsset";
import { Helmet } from "react-helmet-async";

const MyAssets = () => {
  const user = useSingleUser();
  const assets = useAllAsset();
  const [myAssets, setMyAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const filteredAssets = assets.filter(
      (asset) =>
        user.email === asset.requested_by &&
        (searchTerm === "" ||
          asset.assetName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === "" || asset.status === statusFilter) &&
        (typeFilter === "" || asset.category === typeFilter)
    );
    setMyAssets(filteredAssets);
  }, [assets, user.email, searchTerm, statusFilter, typeFilter]);

  return (
    <div>
      <Helmet>
        <title>WorkDay / My Assets</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
            My Assets
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {myAssets.length}
          </span>
        </div>

        <div className="flex justify-around">
          <div className="max-w-md ">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg border bg-white overflow-hidden">
              <input
                className="peer ml-4 h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid place-items-center h-full w-12 text-gray-300 bg-yellow-200">
                <IoIosSearch className="text-2xl"></IoIosSearch>
              </div>
            </div>
          </div>

          <div className="border-b-2">
            <select
              className="select focus:outline-none w-full max-w-xs"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Pending/Approved</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
          </div>

          <div className="border-b-2">
            <select
              className="select focus:outline-none w-full max-w-xs"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Returnable/non-returnable</option>
              <option value="Returnable">Returnable</option>
              <option value="non-returnable">Non-returnable</option>
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
                        <button className="flex items-center gap-x-2">
                          <span>Request Date</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Approval Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Request Status
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myAssets.map((asset) => (
                      <tr key={asset._id}>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {asset.assetName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {asset.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {new Date(asset.request_date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 rounded-full text-xs ${
                                asset.status === "pending"
                                  ? "text-blue-500 bg-blue-100/60"
                                  : "text-green-500 bg-green-100/60"
                              }`}
                            >
                              {asset.status === "pending"
                                ? "not complete"
                                : "approved date"}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className={`px-3 py-1 rounded-full text-xs ${
                                asset.status === "pending"
                                  ? "text-red-500 bg-red-100/60"
                                  : "text-green-500 bg-green-100/60"
                              }`}
                            >
                              {asset.status}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            title="Mark Complete"
                            className="btn text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
                          >
                            Cancel-- not complete
                          </button>
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

export default MyAssets;
