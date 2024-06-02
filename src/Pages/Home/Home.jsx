import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import OurPackages from "../../Components/OurPackages/OurPackages";

const Home = () => {
  return (
    <div className="container mx-auto p-3">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurPackages></OurPackages>
    </div>
  );
};

export default Home;