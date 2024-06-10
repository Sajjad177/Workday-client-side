import { Link } from "react-router-dom";

import { BsCheck2All } from "react-icons/bs";

const Packages = () => {
  const listArray = [
    "100+ components",
    "20+ built-in pages",
    "5 month free updates",
  ];

  return (
    <div>
      <h1 className="lg:text-4xl text-3xl text-center lg:my-20 my-14 font-bold">
        Our Package
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <div className="mx-auto max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md ">
            <div className="flex items-center justify-between">
              <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl">
                <sup className="text-2xl font-black">$</sup>5
                <sub className="text-sm tracking-tight">/mo</sub>
              </h1>
              <div className=" w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r  from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                <h3 className="font-semibold tracking-wider text-white md:text-xl">
                  POPULAR
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                {" "}
                <BsCheck2All className="text-xl" />5 Employees
              </li>
              {listArray?.map((each, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]"
                >
                  <BsCheck2All className="text-xl" /> {each}
                </li>
              ))}
            </ul>
            <div className="mr-8">
              <Link to="/payment">
                <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto  max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md ">
            <div className="flex items-center justify-between">
              <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl">
                <sup className="text-2xl font-black">$</sup>8
                <sub className="text-sm tracking-tight">/mo</sub>
              </h1>
              <div className=" w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r  from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                <h3 className="font-semibold tracking-wider text-white md:text-xl">
                  STANDARD
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                {" "}
                <BsCheck2All className="text-xl" />5 Employees
              </li>
              {listArray?.map((each, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]"
                >
                  <BsCheck2All className="text-xl" /> {each}
                </li>
              ))}
            </ul>
            <div className="mr-8">
              <Link to="/payment">
                <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md ">
            <div className="flex items-center justify-between">
              <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl">
                <sup className="text-2xl font-black">$</sup>15
                <sub className="text-sm tracking-tight">/mo</sub>
              </h1>
              <div className=" w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r  from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                <h3 className="font-semibold tracking-wider text-white md:text-xl uppercase">
                  premium
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]">
                {" "}
                <BsCheck2All className="text-xl" />5 Employees
              </li>
              {listArray?.map((each, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm font-semibold text-sky-900 dark:text-[#4BB3FF]"
                >
                  <BsCheck2All className="text-xl" /> {each}
                </li>
              ))}
            </ul>
            <div className="mr-8">
              <Link to="/payment">
                <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
