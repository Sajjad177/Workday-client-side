import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Packages from "../Dashboard/Packages/Packages";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="container mx-auto p-3">
      <Banner></Banner>
      <AboutUs></AboutUs>
      {/* <OurPackages></OurPackages> */}
      <Packages></Packages>
      <div className="mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
