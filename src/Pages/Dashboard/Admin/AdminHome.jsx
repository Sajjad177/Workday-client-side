
import Chart from "./AdminHomePages/Chart";
import LimitedStock from "./AdminHomePages/LimitedStock";
import MostRequestItem from "./AdminHomePages/MostRequestItem";
import PendingRequest from "./AdminHomePages/PendingRequest";


const AdminHome = () => {
    
    return (
        <div className="container mx-auto">
             <PendingRequest></PendingRequest>
             <MostRequestItem></MostRequestItem>
             <LimitedStock></LimitedStock>
             <Chart></Chart>
        </div>
    );
};

export default AdminHome;