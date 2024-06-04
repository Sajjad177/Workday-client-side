// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import useAxiosCommon from "../../../Hook/useAxiosCommon";
// import useAuth from "../../../Hook/useAuth";
// import toast from "react-hot-toast";

// const AddEmployee = () => {
//   const { user: loggedUser } = useAuth();
//   const axiosCommon = useAxiosCommon();
//   const queryClient = useQueryClient();

//   const { data: userData = [], isLoading, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const { data } = await axiosCommon("/users");
//       return data;
//     },
//   });

//   const { data: teamData = [] } = useQuery({
//     queryKey: ["team"],
//     queryFn: async () => {
//       const { data } = await axiosCommon(`/team/${loggedUser.email}`);
//       return data;
//     },
//   });

//   const { mutateAsync } = useMutation({
//     mutationFn: async (user) => {
//       const userInfo = {
//         name: user.name,
//         email: user.email,
//         photo: user.photo,
//         role: user.role,
//         userEmail: loggedUser.email,
//       };
//       const { data } = await axiosCommon.post("/team", userInfo);
//       return data;
//     },
//     onSuccess: (data, user) => {
//       queryClient.setQueryData(["users"], (oldData) =>
//         oldData.filter((u) => u._id !== user._id)
//       );
//       queryClient.invalidateQueries(["team"]);
//       refetch();
//       toast.success('Added to your team successfully');
//     },
//     onError: (error) => {
//       console.error("Error adding to team:", error);
//       toast.error("Please check again");
//     },
//   });

//   const handledAddTeam = async (user) => {
//     const userAlreadyInTeam = teamData.some((teamMember) => teamMember.email === user.email);
//     if (userAlreadyInTeam) {
//       toast.error("User is already in your team");
//       return;
//     }
//     await mutateAsync(user);
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1 className="text-3xl text-center mb-20 mt-10">Add Employee</h1>
//       <div>
//         <h4>Total Employees: {userData.length}</h4>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>
//                 <label>
//                   <input disabled type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <th>Image</th>
//               <th>Employee Name</th>
//               <th>Type</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData.map((user) => (
//               <tr key={user._id}>
//                 <th>
//                   <label>
//                     <input type="checkbox" className="checkbox" />
//                   </label>
//                 </th>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle w-12 h-12">
//                         <img
//                           src={user.photo}
//                           alt={user.name}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>{user.name}</td>
//                 <td>{user.role}</td>
//                 <th>
//                   <button
//                     onClick={() => handledAddTeam(user)}
//                     className="btn bg-yellow-500"
//                   >
//                     Add To Team
//                   </button>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddEmployee;

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import useAuth from "../../../Hook/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const { user: loggedUser } = useAuth();
  const axiosCommon = useAxiosCommon();
  const queryClient = useQueryClient();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery({
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

  const { data: packageData } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const { data } = await axiosCommon(`/package/${loggedUser.email}`);
      return data;
    },
  });

  const { mutateAsync: addTeamMember } = useMutation({
    mutationFn: async (user) => {
      const userInfo = {
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        userEmail: loggedUser.email,
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

  const { mutateAsync } = useMutation({
    mutationFn: async (users) => {
      const userInfos = users.map((user) => ({
        name: user.name,
        email: user.email,
        photo: user.photo,
        role: user.role,
        userEmail: loggedUser.email,
      }));
      const { data } = await axiosCommon.post("/team/multiple", userInfos);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries(["team"]);
      refetch();
      toast.success("Selected members added to your team successfully");
    },
    onError: (error) => {
      console.error("Error adding selected members to team:", error);
      toast.error("Please check again");
    },
  });

  const handledAddTeam = async (user) => {
    await mutateAsync(user._id);
    const userAlreadyInTeam = teamData.some(
      (teamMember) => teamMember.email === user.email
    );
    if (userAlreadyInTeam) {
      toast.error("User is already in your team");
      return;
    }
    await addTeamMember(user);
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter((id) => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl text-center mb-20 mt-10">Add Employee</h1>
      <p className="text-red-500 text-center">There is some problem</p>
      <div className="flex text-2xl justify-around">
        <h4>Total Employees: {userData.length}</h4>
        <h4>
          Team Members: {teamData.length} / {packageData?.memberLimit || 5}
        </h4>
        <Link to="/dashboard/packages">
          <button className="btn bg-blue-500 text-white">Increase Limit</button>
        </Link>
      </div>
      <div className="overflow-x-auto mt-4">
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
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt={user.name} />
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
