import { GoFileSubmodule } from "react-icons/go";
import { HiArrowSmallRight } from "react-icons/hi2";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";


const Files = () => {
  return (
    <div className="container mx-auto lg:my-20 my-14">
      <h1 className="lg:text-4xl text-2xl text-center font-bold mb-14">
        Check Files
      </h1>
      <div className="flex lg:flex-row flex-col gap-10 justify-around p-3">
        <div>
          <div className="lg:w-[350px] md:w-[270w] w-full  rounded-2xl bg-[#e64f5e] p-6 shadow-lg border md:p-8 cursor-pointer text-white">
            <GoFileSubmodule className="text-7xl"></GoFileSubmodule>
            <p>
              File section is where you can monitor and maintains...
            </p>
            <button className="mt-5 flex items-center justify-center gap-1">
              View More <HiArrowSmallRight className="text-2xl"></HiArrowSmallRight>
            </button>
          </div>
        </div>
        <div>
          <div className="lg:w-[350px] md:w-[270w] w-full rounded-2xl bg-[#35c1a7] p-6 shadow-lg border md:p-8 cursor-pointer text-white">
            <MdOutlineReportGmailerrorred className="text-7xl"></MdOutlineReportGmailerrorred>
            <p>
              The report section give you access to all of our reporting...
            </p>
            <button className="mt-5 flex items-center justify-center gap-1">
              View More <HiArrowSmallRight className="text-2xl"></HiArrowSmallRight>
            </button>
          </div>
        </div>
        <div>
          <div className="lg:w-[350px] md:w-[300w] w-full rounded-2xl bg-[#ee893b] p-6 shadow-lg border md:p-8 cursor-pointer text-white">
            <IoDocumentAttach className="text-7xl"></IoDocumentAttach>
            <p>
              The document section you can see your all important documents...
            </p>
            <button className="mt-5 flex items-center justify-center gap-1">
              View More <HiArrowSmallRight className="text-2xl"></HiArrowSmallRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
