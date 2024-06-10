import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useRole from "../Hook/useRole";



const AdminRout = ({ children }) => {
    const [role, isLoading] = useRole();

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    if(role === "admin") return children

    return <Navigate to="/"></Navigate>
};
AdminRout.propTypes = {
    children: PropTypes.element,
  };
  

export default AdminRout;