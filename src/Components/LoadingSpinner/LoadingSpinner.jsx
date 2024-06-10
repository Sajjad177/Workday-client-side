import Lottie from "lottie-react";
import loading from "../../../public/loading.json";

const LoadingSpinner = () => {
  return (
    <div className="container m-auto w-[20vw] my-20 ">
      <Lottie animationData={loading} />
    </div>
  );
};

export default LoadingSpinner;
