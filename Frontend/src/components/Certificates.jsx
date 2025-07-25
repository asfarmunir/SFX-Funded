import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Certificates = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const badges = [
    // "/badge1.png",
    // "/badge2.png",
    // "/badge3.png",
    "/c1.png",
    "/c2.png",
    "/c3.png",
    "/c4.png",
    "/c5.png",
    // If you want more badges later, just add paths here
  ];

  return (
    <div className="w-full px-4 max-w-6xl mx-auto">
      {mounted && (
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          // slidesPerGroup={1} // Important: slides move one by one
        >
          {/* Duplicate badges for smoother looping */}
          {[...badges, ...badges].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center p-4 h-72">
                <img
                  src={src}
                  alt={`Badge ${(index % badges.length) + 1}`}
                  className={`
                              w-full object-cover`}
                  style={{
                    maxWidth: "100%",
                    aspectRatio: "1/1",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Certificates;
