import MonthlyRequest from "./EmployeeHome/MonthlyRequest";
import MyPendingRequest from "./EmployeeHome/MyPendingRequest";


const EmployeeHome = () => {
    return (
        <div>
            <MyPendingRequest></MyPendingRequest>
            <MonthlyRequest></MonthlyRequest>
        </div>
    );
};

export default EmployeeHome;