// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import useAxiosCommon from "../../Hook/useAxiosCommon";

// const UpdateAsset = () => {
//   const asset = useLoaderData();

//   const { _id } = asset || {};

//   const navigate = useNavigate();
//   const axiosCommon = useAxiosCommon();

//   const updateAssets = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const assetName = form.asset.value;
//     const quantity = parseInt(form.quantity.value);
//     const category = form.category.value;
//     // const addTime = new Date().toISOString();

//     const updateData = {
//       assetName,
//       quantity,
//       category,
//       // addTime,
//       //   email : user?.email
//     };
//     console.log(updateData);

//     try {
//       const { data } = await axiosCommon.put(`/asset/${_id}`, updateData);
//       console.log(data);
//       navigate("/dashboard/asset-list");
//       toast.success("data update successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-4xl text-center mt-10"> Update Asset</h1>
//       <form onSubmit={updateAssets}>
//         <div className="mx-auto my-20 lg:w-[50vw] space-y-6 rounded-xl border bg-white px-4 pb-8 pt-4 font-sans shadow-lg">
//           <div className="relative w-full rounded-lg">
//             <input
//               name="asset"
//               defaultValue={asset.assetName}
//               className="peer w-full rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-3 text-[#1B8EF8] focus:outline-none"
//               type="text"
//               placeholder=""
//               id="navigate_ui_input_33"
//             />
//             <label
//               className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:text-xs peer-focus:text-black peer-focus:border "
//               htmlFor="navigate_ui_input_33"
//             >
//               Asset Name
//             </label>
//           </div>
//           <div className="flex items-center gap-5">
//             <div className="relative w-full rounded-lg">
//               <input
//                 name="quantity"
//                 defaultValue={asset.quantity}
//                 className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-3 text-[#1B8EF8] focus:outline-none w-full"
//                 type="text"
//                 placeholder=""
//                 id="navigate_ui_input_33"
//               />
//               <label
//                 className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:text-xs peer-focus:text-sky-800 peer-focus:border "
//                 htmlFor="navigate_ui_input_33"
//               >
//                 Quantity
//               </label>
//             </div>
//             <div className="border border-[#1B8EF8] rounded-lg w-full">
//               <select
//                 name="category"
//                 defaultValue={asset.category}
//                 className="select focus:outline-none w-full max-w-xs"
//               >
//                 <option disabled selected>
//                   Returnable/non-returnable
//                 </option>
//                 <option>Returnable</option>
//                 <option>Non-returnable</option>
//               </select>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="inline-flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
//           >
//             Add Assets
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateAsset;


// import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../Hook/useAxiosCommon";

const UpdateAsset = () => {
  const asset = useLoaderData();

  const { _id } = asset || {};

  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();

  const updateAssets = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assetName = form.asset.value;
    const quantity = parseInt(form.quantity.value);
    const category = form.category.value;
    // const addTime = new Date().toISOString();

    const updateData = {
      assetName,
      quantity,
      category,
      // addTime,
      //   email : user?.email
    };
    console.log(updateData);

    try{
      const {data} = await axiosCommon.put(`/asset/${_id}`, updateData)
      console.log(data)
      navigate("/dashboard/asset-list")
      toast.success("data update successfully")
    }catch(error){
      console.log(error)
    }

  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-10"> Update Asset</h1>
      <form onSubmit={updateAssets}>
        <div className="mx-auto my-20 w-[50vw] space-y-6 rounded-xl border bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
          <div className="relative w-full rounded-lg">
            <input
              name="asset"
              defaultValue={asset.assetName}
              className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-3 text-[#1B8EF8] focus:outline-none"
              type="text"
              placeholder=""
              id="navigate_ui_input_33"
            />
            <label
              className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
              htmlFor="navigate_ui_input_33"
            >
              Asset Name
            </label>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative w-full rounded-lg">
              <input
                name="quantity"
                defaultValue={asset.quantity}
                className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-3 text-[#1B8EF8] focus:outline-none w-full"
                type="text"
                placeholder=""
                id="navigate_ui_input_33"
              />
              <label
                className="absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A]"
                htmlFor="navigate_ui_input_33"
              >
                Quantity
              </label>
            </div>
            <div className="border-2 rounded-lg w-full">
              <select
                name="category"
                defaultValue={asset.category}
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
          <button type="submit" className="btn">
            Add Assets
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAsset;