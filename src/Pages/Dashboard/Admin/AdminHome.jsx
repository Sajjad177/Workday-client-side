
import Chart from "./AdminHomePages/Chart";
import Files from "./AdminHomePages/Files";
import LimitedStock from "./AdminHomePages/LimitedStock";
import MostRequestItem from "./AdminHomePages/MostRequestItem";
import PendingRequest from "./AdminHomePages/PendingRequest";
import Progress from "./AdminHomePages/Progress";


const AdminHome = () => {
    
    return (
        <div className="container mx-auto">
             <PendingRequest></PendingRequest>
             <MostRequestItem></MostRequestItem>
             <LimitedStock></LimitedStock>
             <Chart></Chart>
             <Files></Files>
             <Progress></Progress>
        </div>
    );
};

export default AdminHome;