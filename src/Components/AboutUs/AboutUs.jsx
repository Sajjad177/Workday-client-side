import { useState } from "react";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Asset Tracking and Inventory",
      description:
        "A robust system tracks all assets, their location, condition, and other relevant data. This helps in better planning, maintenance, and utilization.",
    },
    {
      title: "Lifecycle Management",
      description:
        "It involves managing assets from acquisition to disposal. This includes procurement, deployment, maintenance, upgrades, and eventual retirement or replacement.",
    },
    {
      title: "Maintenance and Monitoring",
      description:
        "Regular maintenance schedules and monitoring processes ensure that assets function optimally. Predictive maintenance techniques using data analysis can help preemptively address issues, reducing downtime.",
    },
    {
      title: "Risk Management",
      description:
        " Understanding risks associated with assets (such as cybersecurity threats for digital assets or wear and tear for physical ones) is crucial. Mitigation strategies are put in place to minimize these risks.",
    },
    {
      title: "Financial Management",
      description:
        " This aspect involves tracking costs related to assets, calculating depreciation, and making informed decisions about investments, repairs, or replacements based on financial data.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div>
      <div className="lg:my-20 my-10">
        <h1 className="lg:text-4xl text-2xl text-center font-bold mb-3">
          About US
        </h1>
        <p className="text-center">
          An asset management system refers to a structured approach to
          monitoring, maintaining, and maximizing the value of assets within an
          organization throughout their lifecycle
        </p>
      </div>
      <div>
        <div className=" rounded-lg font-sans">
          {accordionsData.map((PerAccordion, idx) => (
            <div
              key={idx}
              className="border-b border-gray-500 last-of-type:border-none"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex h-full w-full items-center justify-between py-4 font-medium text-white dark:text-black"
              >
                <span className="sm:text-lg md:text-xl">
                  {PerAccordion.title}
                </span>
                <span className="rounded-full p-2 ">
                  <svg
                    className="ml-8 mr-7 shrink-0 fill-[#fff]"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${
                  isOpen === idx
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {PerAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
