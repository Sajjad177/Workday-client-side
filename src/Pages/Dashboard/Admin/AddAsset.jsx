import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";

const AddAsset = () => {
  const { user } = useAuth();
  console.log(user)
  const navigate = useNavigate();
  const axiosCommon = useAxiosCommon();

  const { mutateAsync } = useMutation({
    mutationFn: async (assetData) => {
      const { data } = await axiosCommon.post("/asset", assetData);
      return data;
    },
    onSuccess: () => {
      toast.success("Asset add successfully");
      navigate("/dashboard/asset-list");
    },
  });

  const addAssets = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assetName = form.asset.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const addTime = new Date().toISOString();

    const assetData = {
      assetName,
      quantity,
      category,
      addTime,
      email : user?.email
    };

    try {
      await mutateAsync(assetData);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Add Asset</h1>
      <form onSubmit={addAssets}>
        <div className="mx-auto my-20 w-[50vw] space-y-6 rounded-xl border bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
          <div className="relative w-full rounded-lg">
            <input
              name="asset"
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

export default AddAsset;