import { useEffect, useState } from "react";
import image1 from "../../assets/banner-1.jpg";
import image2 from "../../assets/banner-2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{ img: image1 }, { img: image2 }];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    <div className="container m-auto lg:my-20 my-1">
      <div
        className="w-full lg:h-[70vh] md:h-[50vh] h-80 my-10 flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        <div className="drop-shadow-lg text-white text-center px-5">
          <div className="">
            {currentSlider === 0 ? (
              <h1 className="lg:text-5xl lg:font-bold text-2xl font-semibold">
                Join As a Employee
              </h1>
            ) : (
              <h1 className="lg:text-5xl lg:font-bold text-2xl font-semibold">
                Join As a HR/Admin
              </h1>
            )}
          </div>

          {currentSlider === 0 ? (
            <Link to="/join-employee">
              <button className="text-xl mt-8 box-border border w-48 h-14 rounded-lg text-white relative group">
                Employee
              </button>
            </Link>
          ) : (
            <Link to="/join-hr">
              <button className="text-xl mt-8 box-border border w-48 h-14 rounded-lg text-white relative group">
                HR/Admin
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
