// import { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import useAxiosCommon from "../../../Hook/useAxiosCommon";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

// const RequestForAsset = () => {
//   const [openModal, setOpenModal] = useState(false);

//   const axiosCommon = useAxiosCommon();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [stockStatus, setStockStatus] = useState("");
//   const [assetType, setAssetType] = useState("");

//   const {
//     data: assets = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["asset", searchQuery, stockStatus, assetType],
//     queryFn: async () => {
//       const { data } = await axiosCommon.get("/assets", {
//         params: {
//           search: searchQuery,
//           stockStatus,
//           assetType,
//         },
//       });
//       return data;
//     },
//   });

//   console.log(assets);

  

//   const handleSearch = () => {
//     setSearchQuery(searchInput);
//   };

//   const handleRequest = (assetId) => {
//     console.log("clicked",assetId);
//   };

//   if (isLoading) return <LoadingSpinner></LoadingSpinner>;

//   return (
//     <div>
//       <section className="container px-4 mx-auto pt-12">
//         <div className="flex justify-center items-center gap-x-3 mb-10">
//           <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
//             Request For Assets
//           </h2>

//           <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
//             05
//           </span>
//         </div>

//         <div className="flex justify-around">
//           <div className="max-w-md ">
//             <div className="relative flex items-center w-full h-12 rounded-lg pl-2 focus-within:shadow-lg border bg-white overflow-hidden">
//               <input
//                 className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
//                 type="text"
//                 id="search"
//                 placeholder="Search item name.."
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//               <button
//                 className="place-items-center h-full w-12 bg-yellow-200 text-gray-300 cursor-pointer flex"
//                 onClick={handleSearch} // Update the search when button is clicked
//               >
//                 <IoIosSearch className="text-2xl"></IoIosSearch>
//               </button>
//             </div>
//           </div>
//           <div className="border-b-2">
//             <select
//               value={stockStatus}
//               onChange={(e) => setStockStatus(e.target.value)}
//               className="select focus:outline-none w-full max-w-xs"
//             >
//               <option disabled selected>
//                 available/out-of-stock
//               </option>
//               <option>available</option>
//               <option>out-of-stock</option>
//             </select>
//           </div>
//           <div className="border-b-2">
//             <select
//               value={assetType}
//               onChange={(e) => setAssetType(e.target.value)}
//               className="select focus:outline-none w-full max-w-xs"
//             >
//               <option disabled selected>
//                 Returnable/non-returnable
//               </option>
//               <option>Returnable</option>
//               <option>Non-returnable</option>
//             </select>
//           </div>
//         </div>

//         {/* table is blow */}

//         <div className="flex flex-col mt-6">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//               <div className="overflow-hidden border border-gray-200  md:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
//                       >
//                         <div className="flex items-center gap-x-3">
//                           <span>Name</span>
//                         </div>
//                       </th>

//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
//                       >
//                         <span>Type</span>
//                       </th>

//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
//                       >
//                         <button className="flex items-center gap-x-2">
//                           <span>Availability</span>
//                         </button>
//                       </th>

//                       <th className="px-4  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200 ">
//                     {assets.map((asset) => (
//                       <tr key={asset._id}>
//                         <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//                           {asset.assetName}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//                           {asset.category}
//                         </td>
//                         <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//                           {asset.quantity == 0 ? "Out of stock" : "Available"}
//                         </td>
//                         <td className="px-4 py-4 text-sm whitespace-nowrap">
//                           <button
//                             onClick={() => {
//                               setOpenModal(true), handleRequest(asset._id);
//                             }}
//                             className="rounded-md bg-gray-700 py-2 px-5 text-white"
//                           >
//                             Action
//                           </button>
//                           <div
//                             onClick={() => setOpenModal(false)}
//                             className={`fixed z-[100] flex items-center justify-center ${
//                               openModal
//                                 ? "opacity-1 visible"
//                                 : "invisible opacity-0"
//                             } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
//                           >
//                             {/* <RequestModal
                            
//                               setOpenModal={setOpenModal}
//                               openModal={openModal}
//                             ></RequestModal> */}
//                             <div
//                               onClick={(e_) => e_.stopPropagation()}
//                               className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${
//                                 openModal
//                                   ? "opacity-1 translate-y-0 duration-300"
//                                   : "-translate-y-20 opacity-0 duration-150"
//                               }`}
//                             >
//                               <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
//                                 <div className="space-y-5">
//                                   <label
//                                     htmlFor="email_navigate_ui_modal"
//                                     className="block"
//                                   >
//                                     Additional notes
//                                   </label>
//                                   <div className="relative">
//                                     <input
//                                       type="text"
//                                       placeholder="add short node..."
//                                       className="block w-full rounded-lg p-5 pl-10 outline-none drop-shadow-lg bg-white "
//                                     />
//                                     <span className="absolute left-2 top-1/4"></span>
//                                   </div>
//                                 </div>
//                                 {/* button type will be submit for handling form submission*/}
//                                 <button
//                                   type="button"
//                                   onClick={() => setOpenModal(false)}
//                                   className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 text-center"
//                                 >
//                                   Request
//                                 </button>
//                               </form>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RequestForAsset;



import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
// import toast from "react-hot-toast";

const RequestForAsset = () => {
  const [openModal, setOpenModal] = useState(false);

  const axiosCommon = useAxiosCommon();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [assetType, setAssetType] = useState("");

  const {
    data: assets = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["asset", searchQuery, stockStatus, assetType],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/assets", {
        params: {
          search: searchQuery,
          stockStatus,
          assetType,
        },
      });
      return data;
    },
  });

  // console.log(assets);

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };
  //! some problem there------------------------------
  const handleRequest = async (assetId) => {
    console.log(assetId)
    try {
      const { data } = await axiosCommon.post(`/request-asset/${assetId}`);
      console.log("Asset updated:", data);
      refetch(); // Refetch assets after updating the quantity
    } catch (error) {
      console.error("Error requesting asset:", error);
    }
    
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
            Request For Assets
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            05
          </span>
        </div>

        <div className="flex justify-around">
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
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
              className="select focus:outline-none w-full max-w-xs"
            >
              <option disabled selected>
                available/out-of-stock
              </option>
              <option>available</option>
              <option>out-of-stock</option>
            </select>
          </div>
          <div className="border-b-2">
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="select focus:outline-none w-full max-w-xs"
            >
              <option disabled selected>
                Returnable/non-returnable
              </option>
              <option>Returnable</option>
              <option>Non-returnable</option>
            </select>
          </div>
        </div>

        {/* table is blow */}

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
                          <span>Availability</span>
                        </button>
                      </th>

                      <th className="px-4  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
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
                          {asset.quantity == 0 ? "Out of stock" : "Available"}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => {
                              setOpenModal(true);
                              // handleRequest(asset._id);
                            }}
                            className=" rounded-md bg-gray-700 py-2 px-5 text-white"
                            disabled={asset.quantity == 0}
                          >
                            Action
                          </button>
                          <div
                            onClick={() => setOpenModal(false)}
                            className={`fixed z-[100] flex items-center justify-center ${
                              openModal
                                ? "opacity-1 visible"
                                : "invisible opacity-0"
                            } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
                          >
                            {/* <RequestModal
                              setOpenModal={setOpenModal}
                              openModal={openModal}
                            ></RequestModal> */}
                            <div
                              onClick={(e_) => e_.stopPropagation()}
                              className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
                                openModal
                                  ? "opacity-1 translate-y-0 duration-300"
                                  : "-translate-y-20 opacity-0 duration-150"
                              }`}
                            >
                              <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                                <div className="space-y-5">
                                  <label
                                    htmlFor="email_navigate_ui_modal"
                                    className="block"
                                  >
                                    Additional notes
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="text"
                                      placeholder="add short node..."
                                      className="block w-full rounded-lg p-5 pl-10 outline-none drop-shadow-lg bg-white "
                                    />
                                    <span className="absolute left-2 top-1/4"></span>
                                  </div>
                                </div>
                                {/* button type will be submit for handling form submission*/}
                                <button
                                  type="button"
                                  onClick={() => {setOpenModal(false), handleRequest(asset._id)}}
                                  className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 text-center"
                                >
                                  Request
                                </button>
                              </form>
                            </div>
                          </div>
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

export default RequestForAsset;
