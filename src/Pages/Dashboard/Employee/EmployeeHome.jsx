import EmployeeEvent from "./EmployeeHome/EmployeeEvent";
import MonthlyRequest from "./EmployeeHome/MonthlyRequest";
import MyPendingRequest from "./EmployeeHome/MyPendingRequest";


const EmployeeHome = () => {
    return (
        <div>
            <MyPendingRequest></MyPendingRequest>
            <MonthlyRequest></MonthlyRequest>
            <EmployeeEvent></EmployeeEvent>
        </div>
    );
};

export default EmployeeHome;