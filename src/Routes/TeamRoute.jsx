import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const TeamRoute = ({ children }) => {


    
  return <Navigate to="/"></Navigate>;
};

TeamRoute.propTypes = {
  children: PropTypes.element,
};

export default TeamRoute;
