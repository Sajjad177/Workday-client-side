import MenuItem from "./MenuItem";
import { MdAddHomeWork } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { MdAddLink } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";



const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label={"Home"}
        address={"admin-home"}
        icon={MdAddHomeWork}
      ></MenuItem>
      <MenuItem
        label={"Assets List"}
        address={"asset-list"}
        icon={FaClipboardList}
      ></MenuItem>
      <MenuItem
        label={"My Employee List"}
        address={"my-employee"}
        icon={FaUserTie}
      ></MenuItem>
      <MenuItem
        label={"All Request"}
        address={"all-request"}
        icon={FaFileCircleQuestion}
      ></MenuItem>
      <MenuItem
        label={"Add Assets"}
        address={"add-asset"}
        icon={MdAddLink}
      ></MenuItem>
      <MenuItem
        label={"Add Employee"}
        address={"add-employee"}
        icon={IoMdPersonAdd}
      ></MenuItem>
    </div>
  );
};

export default AdminMenu;
