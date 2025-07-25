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
    payout: "$1,131.92",
    location: "Bangladesh",
  },
  {
    name: "David",
    src: trader2,
    alt: "David",
    payout: "$2,424.04",
    location: "USA",
  },
  {
    name: "Bode",
    src: trader3,
    alt: "Bode",
    payout: "$1,151.25",
    location: "Canada",
  },
  {
    name: "Charl",
    src: trader4,
    alt: "Charl",
    payout: "$731.12",
    location: "Mexico",
  },
  {
    name: "Karim",
    src: trader5,
    alt: "Karim",
    payout: "$2,453.74",
    location: "germany",
  },
  {
    name: "Raphael",
    src: trader6,
    alt: "Raphael",
    payout: "$3,636.34",
    location: "South America",
  },
  {
    name: "Alex",
    src: trader7,
    alt: "Alex",
    payout: "$10,765.23",
    location: "USA",
  },
  {
    name: "Looi",
    src: trader8,
    alt: "Looi",
    payout: "$1,552.52",
    location: "UK",
  },
  {
    name: "Chris",
    src: trader9,
    alt: "Chris",
    payout: "$9,584.58",
    location: "Germany",
  },
  {
    name: "Emeka",
    src: trader10,
    alt: "Emeka",
    payout: "$2,348.53",
    location: "South Africa",
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
                  <p className="font-bold text-white text-xl">{trader.name}</p>
                  <p className="font-bold text-white ">
                    Payout: {trader.payout}
                  </p>
                  <p className="font-bold text-white ">{trader.location}</p>
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
