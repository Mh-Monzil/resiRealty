import bgImage1 from "../../assets/banner/banner1.jpg";
import bgImage2 from "../../assets/banner/estate6.png";
import bgImage3 from "../../assets/banner/estate1.png";

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="relative">
          <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`}} className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center">
            <h2 data-aos="fade-right"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]">
              Easy way to find your dream property
            </h2>
            <p data-aos="fade-left"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" className="text-lg font-semibold md:max-w-[900px] text-center py-4">
            Effortlessly navigate through curated property listings to find your dream home. Enjoy personalized searches, expert advice, and simplified home-buying on our user-friendly platform.
            </p>
            <div data-aos="fade-up"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" className="flex items-center gap-8 mt-10">
              <button className="px-4 py-2 md:px-7 md:py-3  bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Services</button>
              <button className="px-4 py-2 md:px-7 md:py-3 bg-transparent border-2 hover:bg-sky-500 hover:border-sky-500 rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Feedback</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage2})`}} className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center">
            <h2 className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]">
              Dream Homes Await: Explore Your Future
            </h2>
            <p className="text-lg font-semibold md:max-w-[900px] text-center px-8 py-4">
              Discover a world where your dream home becomes reality. Dive into our vast collection of listings, each detailed to guide your journey with ease and clarity.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <button className="px-4 py-2 md:px-7 md:py-3  bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Services</button>
              <button className="px-4 py-2 md:px-7 md:py-3 bg-transparent border-2 hover:bg-sky-500 hover:border-sky-500 rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Feedback</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage3})`}} className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center">
            <h2 className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px] px-2">
              Unlock the Door to Your New Beginning
            </h2>
            <p className="text-lg font-semibold md:max-w-[900px] text-center px-8 py-4">
              Your perfect home is just a click away. Experience seamless navigation and personalized recommendations designed to bring your dream property within reach.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <button className="px-4 py-2 md:px-7 md:py-3  bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Services</button>
              <button className="px-4 py-2 md:px-7 md:py-3 bg-transparent border-2 hover:bg-sky-500 hover:border-sky-500 rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">Our Feedback</button>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
