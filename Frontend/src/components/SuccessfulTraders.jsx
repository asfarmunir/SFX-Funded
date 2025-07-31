import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const trader1 = "/traders/t1.svg";
const trader2 = "/traders/t2.svg";
const trader3 = "/traders/t3.svg";
const trader4 = "/traders/t4.svg";
const trader5 = "/traders/t5.svg";
const trader6 = "/traders/t6.svg";
const trader7 = "/traders/t7.svg";
const trader8 = "/traders/t8.svg";
const trader9 = "/traders/t9.svg";
const trader10 = "/traders/t10.svg";
const traders = [
  {
    name: "Fahad",
    src: trader1,
    alt: "Fahad",
    payout: "$2,471.73",
    location: "Bangladesh",
  },
  {
    name: "David",
    src: trader2,
    alt: "David",
    payout: "$2,000",
    location: "nigeria",
  },
  {
    name: "Bode",
    src: trader3,
    alt: "Bode",
    payout: "$4,465.12",
    location: "Nigeria",
  },
  {
    name: "Charl",
    src: trader4,
    alt: "Charl",
    payout: "$7,012.21",
    location: "south africa",
  },
  {
    name: "Karim",
    src: trader5,
    alt: "Karim",
    payout: "$5,279.99",
    location: "germany",
  },
  {
    name: "Raphael",
    src: trader6,
    alt: "Raphael",
    payout: "$4,749.00",
    location: "UK",
  },
  {
    name: "Alex",
    src: trader7,
    alt: "Alex",
    payout: "$3,752.50",
    location: "Germany",
  },
  {
    name: "Looi",
    src: trader8,
    alt: "Looi",
    payout: "$1,663.42",
    location: "Malaysia",
  },
  {
    name: "Chris",
    src: trader9,
    alt: "Chris",
    payout: "$3,600.00",
    location: "switzerland",
  },
  {
    name: "Emeka",
    src: trader10,
    alt: "Emeka",
    payout: "$965.88",
    location: "nigeria",
  },
];
const SuccessfulTraders = () => {
  return (
    <div className="mb-8">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {traders.map((trader, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="relative ">
                <img
                  src={trader.src}
                  alt={trader.alt}
                  className="w-full  object-cover object-center"
                />
                <div
                  className="absolute inset-0 shadow-inner"
                  style={{
                    boxShadow: "inset 0 -140px 60px -30px rgba(0, 0, 0, 0.7)",
                  }}
                ></div>
                <div className="absolute bottom-4 left-4 ">
                  <p className="font-bold capitalize text-white text-xl">
                    {trader.name}
                  </p>
                  <p className="font-normal text-sm  text-white ">
                    Payout: {trader.payout}
                  </p>
                  <p className="font-normal text-sm capitalize text-white ">
                    {trader.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessfulTraders;
