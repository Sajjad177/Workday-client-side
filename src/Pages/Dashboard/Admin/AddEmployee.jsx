import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const AddEmployee = () => {
  const { user: loggedUser } = useAuth();
  const axiosCommon = useAxiosCommon();
  const queryClient = useQueryClient();

  const { data: userData = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosCommon("/users");
      return data;
    },
  });

  const { data: teamData = [] } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/team/${loggedUser.email}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (user) => {
      const userInfo = {
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        workAt: loggedUser.email,
        team:true,
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
      toast.success('Added to your team successfully');
    },
    onError: (error) => {
      console.error("Error adding to team:", error);
      toast.error("Please check again");
    },
  });

  const handledAddTeam = async (user) => {
    if (user.role === "admin") {
      toast.error("Admins cannot be added to the team");
      return;
    }

    const userAlreadyInTeam = teamData.some((teamMember) => teamMember.email === user.email);
    if (userAlreadyInTeam) {
      toast.error("User is already in your team");
      return;
    }

    await mutateAsync(user);
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>

  return (
    <div>
      <h1 className="text-3xl text-center mb-20 mt-10">Add Employee</h1>
      <div>
        <h4>Total Employees: {userData.length}</h4>
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
            {userData.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt={user.name}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <th>
                  <button
                    onClick={() => handledAddTeam(user)}
                    className="btn bg-yellow-500"
                  >
                    Add To Team
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEmployee;


