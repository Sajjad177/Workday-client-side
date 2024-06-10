import { BiConversation } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";


const EmployeeEvent = () => {
  return (
    <div className="p-3 container mx-auto">
      <h1 className="lg:text-4xl text-2xl lg:text-center my-12 font-bold">
        Events
      </h1>
      <div className="flex lg:flex-row flex-col gap-10 justify-around p-3">
        <div className="w-[350px] rounded-2xl bg-[#3572EF] p-6 shadow-lg border md:p-8 text-white">
          <BiConversation className="text-5xl"></BiConversation>
          <p className="mt-2">Please check your today meeting...</p>
          <button className="btn mt-5 flex items-center justify-center gap-1">
            Check Now <FaCheck className="text-2xl"></FaCheck>
          </button>
        </div>
        <div className="w-[350px] rounded-2xl bg-[#B3C8CF] p-6 shadow-lg border md:p-8 text-white">
          <MdOutlineMiscellaneousServices className="text-5xl"></MdOutlineMiscellaneousServices>
          <p className="mt-2">Check your pending services...</p>
          <button className="btn mt-5 flex items-center justify-center gap-1">
            Check Now <FaCheck className="text-2xl"></FaCheck>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEvent;
