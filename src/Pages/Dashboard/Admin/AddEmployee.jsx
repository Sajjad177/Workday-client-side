import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import useSingleUser from "../../../Hook/useSingleUser";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useSecure from "../../../Hook/useSecure";

const AddEmployee = () => {
  const { user: loggedUser } = useAuth();
  const singleUser = useSingleUser();
  const admin_package = singleUser?.category;

  const price = admin_package
    ? parseInt(admin_package.split(".")[0].match(/\d+/)[0], 10)
    : 0;
  const axiosSecure = useSecure();
  const queryClient = useQueryClient();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const {
    data: userData = [],
    isLoading: isUsersLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });
  const { data: teamData = [], isLoading: isTeamLoading } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/team/${loggedUser.email}`);
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
      const { data } = await axiosSecure.post("/team", userInfo);

      await axiosSecure.patch(`/user/update/${userData._id}`, userInfo);

      return data;
    },
    onSuccess: () => {
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

    refetch();
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleAddSelectedUsers = async () => {
    const usersToAdd = userData.filter((user) =>
      selectedUsers.includes(user._id)
    );

    for (const user of usersToAdd) {
      await handleAddTeam(user);
    }

    setSelectedUsers([]);
  };

  if (isUsersLoading || isTeamLoading) return <LoadingSpinner />;

  const employeeCount = teamData.length;
  const totalAdd = price - employeeCount;
  // console.log(totalAdd)
  const employees = userData.filter(
    (user) => user.role === "employee" && user.workAt === null
  );

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
            Employee Count: {employeeCount} / {totalAdd}
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
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedUsers.includes(user._id)}
                        onChange={() => handleSelectUser(user._id)}
                      />
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
                      className="btn disabled:cursor-not-allowed bg-yellow-500"
                      disabled={totalAdd <= 0}
                    >
                      Add To Team
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn mt-16" onClick={handleAddSelectedUsers}>
          Add Selected Members
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
