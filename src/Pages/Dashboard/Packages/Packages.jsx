import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Packages = () => {
  const { user: loggedUser } = useAuth();
  const axiosCommon = useAxiosCommon();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: buyPackage } = useMutation({
    mutationFn: async (packageType) => {
      const { data } = await axiosCommon.post("/package", {
        packageType,
        userEmail: loggedUser.email,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["package"]);
      navigate("/add-employee");
      toast.success('Package purchased successfully');
    },
    onError: (error) => {
      console.error("Error purchasing package:", error);
      toast.error("Please check again");
    },
  });

  const handleBuyPackage = async (packageType) => {
    await buyPackage(packageType);
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-20 mt-10">Select a Package</h1>
      <div className="flex flex-col items-center space-y-4">
        <button onClick={() => handleBuyPackage('5_members')} className="btn bg-blue-500 text-white">
          5 members for $5
        </button>
        <button onClick={() => handleBuyPackage('10_members')} className="btn bg-blue-500 text-white">
          10 members for $8
        </button>
        <button onClick={() => handleBuyPackage('20_members')} className="btn bg-blue-500 text-white">
          20 members for $15
        </button>
      </div>
    </div>
  );
};

export default Packages;
