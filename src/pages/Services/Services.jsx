import { IoIosStarOutline, IoMdHeartEmpty } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import { FiDollarSign } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="my-10 max-w-7xl mx-auto text-center ">
        <h3 className="text-4xl font-bold ">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-12 p-4 md:p-8">
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <IoMdHeartEmpty className=" text-4xl text-sky-500 " />
            </div>
            <p className="text-xl font-bold">Comfortable</p>
            <p className="font-semibold">
            Providing comfortable, hassle-free real estate services to make your property buying experience smooth and enjoyable.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <GoShieldCheck className=" text-4xl text-sky-500" />
            </div>
            <p className="text-xl font-bold">Extra Security</p>
            <p className="font-semibold">
            Offering advanced security solutions that ensure maximum protection and safety for all your real estate investments.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <IoIosStarOutline className=" text-4xl text-sky-500" />
            </div>
            <p className="text-xl font-bold">Luxury</p>
            <p className="font-semibold">
            Delivering luxury real estate options with exclusive amenities to elevate your living to the highest standard.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <FiDollarSign className=" text-4xl text-sky-500" />
            </div>
            <p className="text-xl font-bold">Best Price</p>
            <p className="font-semibold">
            Offering the best prices on premium properties, ensuring you receive unparalleled value in every transaction.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <SlLocationPin className=" text-4xl text-sky-500" />
            </div>
            <p className="text-xl font-bold">Strategic Location</p>
            <p className="font-semibold">
            Strategically located properties ensuring convenience, connectivity, and prime investment potential for discerning buyers and investors.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-20 h-20 bg-sky-50 flex justify-center items-center rounded-full">
              <FaRegCircleCheck className=" text-4xl text-sky-500" />
            </div>
            <p className="text-xl font-bold">Efficient</p>
            <p className="font-semibold">
            Efficient real estate services designed to streamline your property search and transaction process seamlessly.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Services;
