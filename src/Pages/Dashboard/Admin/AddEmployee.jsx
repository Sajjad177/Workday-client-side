import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import useSingleUser from "../../../Hook/useSingleUser";
import { Helmet } from "react-helmet-async";

const AddEmployee = () => {
  const { user: loggedUser } = useAuth();
  const singleUser = useSingleUser();
  const admin_package = singleUser?.category;
  const price = admin_package?.split(".")[0].slice(0, 2) || 0;

  const axiosCommon = useAxiosCommon();
  const queryClient = useQueryClient();

  const {
    data: userData = [],
    isLoading: isUsersLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosCommon("/users");
      return data;
    },
  });

  const { data: teamData = [], isLoading: isTeamLoading } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/team/${loggedUser.email}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (userData) => {
      const userInfo = {
        name: userData.name,
        email: userData.email,
        image: userData.image,
        role: userData.role,
        workAt: loggedUser.email,
        team: true,
      };
      const { data } = await axiosCommon.post("/team", userInfo);
      return data;
    },
    onSuccess: (data, user) => {
      queryClient.setQueryData(["users"], (oldData) =>
        oldData.filter((u) => u._id !== user._id)
      );
      queryClient.invalidateQueries(["team"]);
      refetch();
      toast.success("Added to your team successfully");
    },
    onError: (error) => {
      console.error("Error adding to team:", error);
      toast.error("Please check again");
    },
  });

  const handleAddTeam = async (user) => {
    const userAlreadyInTeam = teamData.some(
      (teamMember) => teamMember.email === user.email
    );
    if (userAlreadyInTeam) {
      toast.error("User is already in your team");
      return;
    }

    await mutateAsync(user);
  };

  if (isUsersLoading || isTeamLoading) return <LoadingSpinner />;

  const employeeCount = teamData.length;
  const employees = userData.filter((user) => user.role === "employee");

  return (
    <div>
      <Helmet>
        <title>WorkDay / Add Employee</title>
      </Helmet>
      <div className="container mx-auto mt-16">
        <div className="flex justify-center items-center gap-x-3 mb-10">
          <h2 className="lg:text-4xl text-2xl font-medium text-gray-800 ">
            Add Employee
          </h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {employees.length}
          </span>
        </div>
        <div className="mb-6 flex items-center justify-around">
          <h3 className="text-lg font-semibold">
            Employee Count: {employeeCount} / {price - employeeCount}
          </h3>

          <Link to="/dashboard/packages">
            <button className="btn">Increase the Limit</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <label>
                    <input disabled type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Employee Name</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((user) => (
                <tr key={user._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-full w-12 h-12">
                          <img src={user?.image} alt={user.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <th>
                    <button
                      onClick={() => handleAddTeam(user)}
                      className="btn bg-yellow-500"
                      disabled={price <= 0}
                    >
                      Add To Team
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn mt-16">Add Selected Member</button>
      </div>
    </div>
  );
};

export default AddEmployee;
