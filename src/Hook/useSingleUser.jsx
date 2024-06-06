import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useSingleUser = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [singleUser, setSingleUser] = useState({});
  const axiosCommon = useAxiosCommon();

  useEffect(() => {
    axiosCommon.get(`/user/${userEmail}`).then((res) => {
        setSingleUser(res.data)
    })
  }, [axiosCommon, userEmail])
//   console.log(singleUser)
  return singleUser
  
};

export default useSingleUser;
