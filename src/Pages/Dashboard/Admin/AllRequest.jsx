import { IoIosSearch } from "react-icons/io";
import useAllAsset from "../../../Hook/useAllAsset";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";


const AllRequest = () => {
  const [assets, refetch] = useAllAsset();
  console.log(assets);
  const axiosCommon = useAxiosCommon();
  const [assetRequest, setRequestAsset] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredAsset = assets.filter((asset) => asset.status === "pending");
    setRequestAsset(filteredAsset);
  }, [assets]);

  // Filter assetRequest based on search query
  const filteredRequests = assetRequest.filter((asset) =>
    asset.assetName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const approveMutation = useMutation(
  //   (id) => axiosCommon.put(`/request-update/${id}`, {
  //     status: "approved",
  //     approvedDate: new Date(),
  //   }),
  //   {
  //     onSuccess: () => {
  //       toast.success("Approved the request");
  //       refetch(); // Refetch the data after mutation success
  //     },
  //     onError: (error) => {
  //       console.error(error);
  //       toast.error("Failed to approve the request");
  //     },
  //   }
  // );

  // // Define mutation for rejecting requests
  // const rejectMutation = useMutation(
  //   (id) => axiosCommon.put(`/request-update/${id}`, {
  //     status: "rejected",
  //     rejectedDate: new Date(),
  //   }),
  //   {
  //     onSuccess: () => {
  //       toast.success("Rejected the request");
  //       refetch(); // Refetch the data after mutation success
  //     },
  //     onError: (error) => {
  //       console.error(error);
  //       toast.error("Failed to reject the request");
  //     },
  //   }
  // );

  // // Event handlers for approve and reject buttons
  // const handleApprove = (id) => {
  //   approveMutation.mutate(id);
  // };

  // const handleReject = (id) => {
  //   rejectMutation.mutate(id);
  // };



  const handelApproved = async (id) => {
    console.log(id);

    try {
      const currentInfo = {
        status: "approved",
        approvedDate: new Date(),
      };

      const { data } = await axiosCommon.put(
        `/request-update/${id}`,
        currentInfo
      );
      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("Approved the request");
      }

      // Update the local state to reflect the change
      setRequestAsset((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, ...currentInfo } : request
        )
      );
      refetch()
    } catch (error) {
      console.log(error);
    }
  };

  const handelReject = async (id) => {
    console.log(id);

    try {
      const currentInfo = {
        status: "rejected",
        rejectedDate: new Date(),
      };

      const { data } = await axiosCommon.put(
        `/request-update/${id}`,
        currentInfo
      );
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("You rejected the request");
      }

      // Update the local state to reflect the change
      setRequestAsset((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, ...currentInfo } : request
        )
      );
      refetch()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>WorkDay / All Request</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
            Request For Assets
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {filteredRequests.length}
          </span>
        </div>

        <div className="flex justify-around">
          <div className="max-w-md ">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg border bg-white overflow-hidden">
              <input
                className="peer ml-3 h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="grid place-items-center h-full w-12 text-gray-300 bg-yellow-300">
                <IoIosSearch className="text-2xl"></IoIosSearch>
              </div>
            </div>
          </div>
        </div>

        {/* table is below */}
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
                          <span>Email Requester</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Name Requester</span>
                        </button>
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
                        <button className="flex items-center gap-x-2">
                          <span>Note</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {filteredRequests.map((asset) => (
                      <tr key={asset._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {asset.assetName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {asset.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {asset.requested_by}
                        </td>
                        <td className="px-4 text-gray-500 py-4 text-sm  whitespace-nowrap">
                          {asset.requester_name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(asset.request_date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {asset.note}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {asset.status}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handelApproved(asset._id)}
                            className="btn bg-green-500"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handelReject(asset._id)}
                            className="btn bg-red-600 ml-2"
                          >
                            Reject
                          </button>
                        </td>
                        {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleApprove(asset._id)}
                            className="btn bg-green-500"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(asset._id)}
                            className="btn bg-red-600 ml-2"
                          >
                            Reject
                          </button>
                        </td> */}
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

export default AllRequest;
