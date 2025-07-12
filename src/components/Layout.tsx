import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slide1 from "../assets/slides/slide1.jpeg";
import slide2 from "../assets/slides/slide2.jpeg";
import slide3 from "../assets/slides/slide3.jpeg";

function Layout() {
  const listimg = [slide1, slide2, slide3];

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination ,Autoplay]}
      loop={true}
      className="w-full"
      autoplay={
        { 
          delay: 5000,
        }
      }
      effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 1,
          modifier: 1,
          slideShadows: true,
        }}
    >
      {listimg.map((img, index) => (
        <SwiperSlide key={index} className="mt-20">
          <div className="relative w-full h-64">
            <div className="absolute inset-0 bg-gradient-to-b opacity-40 from-black to-transparent z-10"></div>
            <img src={img} className="w-full h-full object-cover " />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Layout;
