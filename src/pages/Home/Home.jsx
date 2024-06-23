import Banner from "../../components/Banner/Banner";
import Broker from "../../components/Broker/Broker";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <div className="p-4">
        <Featured />
      </div>
      <Testimonial />
      <Broker />
    </div>
  );
};

export default Home;
