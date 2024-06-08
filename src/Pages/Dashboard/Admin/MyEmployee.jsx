
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { useQuery, useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const MyEmployee = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

 

  const { data: teamsInfo = [], isLoading, refetch } = useQuery({
    queryKey: ["teamsInfo"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/team/${user.email}`);
      return data;
    },
  });

  console.log(teamsInfo)

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosCommon.delete(`/team/${id}`);
      return data;
    },
    onSuccess: () => {
      refetch()
      toast.success('Removed from list')
    },
    onError: () => {
      
      toast.error("Please check again")
    },
  });

  const handleRemove = async(id) => {
    await mutateAsync(id)
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>WorkDay / My Employee List</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800 ">
            My Employee List
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {teamsInfo.length}
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Image</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Type</span>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamsInfo.map((team) => (
                      <tr key={team._id}>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <img
                            src={team.image}
                            alt={team.name}
                            className="w-10 h-10 rounded-full"
                          />
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {team.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {team.role}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleRemove(team._id)}
                            className="btn text-red-500"
                          >
                            Remove
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

export default MyEmployee;


