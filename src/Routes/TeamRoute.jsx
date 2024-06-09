
import PropTypes from 'prop-types';
import useAllTeams from '../Hook/useAllTeams';
import { Navigate } from "react-router-dom";
import useSingleUser from '../Hook/useSingleUser';

const TeamRoute = ({children}) => {
    const singleUser = useSingleUser()
    console.log(singleUser)
    const teams = useAllTeams()
    console.log(teams)
    if( teams?.role ==="employee" && teams?.email === singleUser?.email) return children

    return <Navigate to ='/'></Navigate>
};

TeamRoute.propTypes = {
    children:PropTypes.element
};

export default TeamRoute;