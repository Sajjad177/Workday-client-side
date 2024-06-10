import MenuItem from "./MenuItem";
import { IoMdHome } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAddLink } from "react-icons/md";

const EmployeeMenu = () => {
  return (
    <div>
      <MenuItem
        label={"Home"}
        address={"employee-home"}
        icon={IoMdHome}
      ></MenuItem>
      <MenuItem
        label={"My Assets"}
        address={"my-assets"}
        icon={FaClipboardList}
      ></MenuItem>
      <MenuItem
        label={"Request For Assets"}
        address={"request-asset"}
        icon={MdOutlineAddLink}
      ></MenuItem>
      <MenuItem label={"My Team"} address={"my-team"} icon={FaUsers}></MenuItem>
    </div>
  );
};

export default EmployeeMenu;
