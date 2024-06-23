import FetchData from "../../hooks/FetchData";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";

const ViewProperty = () => {
  const estateData = FetchData();
  const { id } = useParams();
  const isProperty = estateData?.find((item) => item.id == id);
  
  
  return (
    <div className="h-fit">
      <Navbar />
      <div data-aos="fade-down"
    data-aos-duration="300"
    data-aos-easing="ease-in-out" className="p-4 xl:p-0 relative max-w-7xl h-fit mx-auto my-16">
        <div className="">
          <img
            src={isProperty?.image}
            className="w-full max-h-[600px] rounded-lg shadow-2xl"
          />
        </div>
        <div  className=" md:absolute p-6 md:w-[95%] bottom-3 right-1/2 md:translate-x-1/2 bg-white/90 shadow-lg shadow-sky-100 rounded-md hover:scale-105 duration-300">
          <h1 className="text-3xl font-bold">{isProperty?.segment_name}</h1>
          <p className="flex items-center gap-2 text-lg ">
            <FaMapMarkerAlt className="text-sky-500" />
            {isProperty?.location}
          </p>
          <p className=" font-medium my-2">
            <span className="font-bold">Description</span> :
            {isProperty?.description}
          </p>
          <p className=" font-semibold flex items-center gap-2">
            <span className="font-bold">Area</span> :
            <SlSizeFullscreen className="text-sky-500" />
            {isProperty?.area}
          </p>
          <div className="flex items-center gap-4 font-medium mt-1">
            <span className="font-bold">Facilities</span> :
            {isProperty?.facilities?.map((facility, idx) => (
              <span key={idx} className="font-medium">
                {facility}
              </span>
            ))}
          </div>
          <p className="uppercase font-medium mt-1">
            <span className="capitalize font-bold">Status</span> : For{" "}
            {isProperty?.status}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-sky-400">{isProperty?.price}</p>
            <Link
              to="/"
              className="btn bg-sky-500 px-4 py-2 text-white font-semibold mt-2 hover:bg-sky-600"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
