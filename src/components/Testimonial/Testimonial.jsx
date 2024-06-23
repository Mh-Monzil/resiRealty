import client1 from "../../assets/clients/client1.jpg";
import client2 from "../../assets/clients/client2.jpg";
import client3 from "../../assets/clients/client3.jpg";


const Testimonial = () => {
  return (
    <section className="mt-24 max-w-7xl mx-auto">
      <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-bold  text-center">
          What Our Client Say?
        </h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 p-4 lg:p-0">
        <div className="flex flex-col max-w-sm mx-auto my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 flex-grow">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-sky-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              As a first-time homebuyer, ResiRealty made the process seamless and stress-free. Their team was supportive and knowledgeable every step of the way.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-sky-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-700 text-gray-50">
            <img
              src={client1}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
            />
            <p className="text-xl font-semibold leading-tight">
              Krity Roy
            </p>
            <p className="text-sm">Teacher</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-auto my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 flex-grow">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-sky-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              ResiRealty exceeded our expectations with their in-depth market knowledge and exceptional customer service. They found us our dream home quickly and efficiently.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-sky-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-700 text-gray-50">
            <img
              src={client2}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
            />
            <p className="text-xl font-semibold leading-tight">
              Tim Stokes
            </p>
            <p className="text-sm">Singer</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-auto my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-sky-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Selling our home through ResiRealty was a great decision. Their professionalism and dedication were evident, resulting in a sale above our listing price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-sky-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-700 text-gray-50">
            <img
              src={client3}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
            />
            <p className="text-xl font-semibold leading-tight">
              Anna Alina
            </p>
            <p className="text-sm">Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
