import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Feature = ({estate}) => {
    const {id,estate_title,image,location,price,status,facilities} = estate;
  return (
    <div data-aos="fade-up"
    data-aos-duration="300"
    data-aos-easing="ease-in-out"
    className="card card-compact mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
            className="hover:scale-110 duration-500 "
          src={image}
        />
      </figure>
      <p className="absolute right-0 m-2 p-4 bg-sky-400 rounded-lg py-1 text-white text-sm font-bold uppercase">For {status}</p>
      <div className="p-6">
        <p className="text-2xl font-bold text-sky-500">{price}</p>
        <h2 className="text-lg md:text-xl font-bold mt-3">{estate_title}</h2>
        <p className="flex items-center gap-2 text-lg ">
          <FaMapMarkerAlt className="text-sky-500" />
          {location}
        </p>
        <div className="flex items-center justify-between mt-3">
          <Link to={`/view-property/${id}`} state={estate.estate_title} className="btn bg-sky-500 px-5 py-2 rounded-md text-white text-lg font-semibold hover:bg-sky-600">View Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
