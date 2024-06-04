import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const RequestForAsset = () => {
  const [openModal, setOpenModal] = useState(false);
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
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg border bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <IoIosSearch className="text-2xl"></IoIosSearch>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
          <div className="border-b-2">
            <select className="select focus:outline-none w-full max-w-xs">
              <option disabled selected>
                available/out-of-stock
              </option>
              <option>available</option>
              <option>out-of-stock</option>
            </select>
          </div>
          <div className="border-b-2">
            <select className="select focus:outline-none w-full max-w-xs">
              <option disabled selected>
                Returnable/non-returnable
              </option>
              <option>Returnable</option>
              <option>non-returnable</option>
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

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        Build Dynamic Website
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        10/04/2024
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        $200
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="mx-auto flex w-72 items-center justify-center">
                          <button
                            onClick={() => setOpenModal(true)}
                            className="rounded-md bg-gray-700 py-2 px-5 text-white"
                          >
                            Login Modal
                          </button>
                          <div
                            onClick={() => setOpenModal(false)}
                            className={`fixed z-[100] flex items-center justify-center ${
                              openModal
                                ? "opacity-1 visible"
                                : "invisible opacity-0"
                            } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
                          >
                            <div
                              onClick={(e_) => e_.stopPropagation()}
                              className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${
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
                                      id="email_navigate_ui_modal"
                                      type="email"
                                      placeholder="example@gmail.com"
                                      className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white dark:text-white"
                                    />
                                    <span className="absolute left-2 top-1/4">
                                      
                                    </span>
                                  </div>
                                </div>
                                {/* button type will be submit for handling form submission*/}
                                <button
                                  type="button"
                                  onClick={() => setOpenModal(false)}
                                  className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300  "
                                >
                                  Request
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
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
