import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MobileHeroSection from "./MobileHeroSection";
import { Autoplay, Pagination } from "swiper/modules";
import AppQr from "./AppQr";

const slideContent = [
  {
    heading: "Slide 1 Heading",
    paragraph: "Description for slide 1...",
    imageSrc: "/events.jpeg",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/events.jpeg",
  },
];
const eventData = [
  {
    id: 1,
    date: "August 1, 2024",
    description: "Sample city event description goes here.",
    availability: "Available",
    category: "City Event",
  },
  {
    id: 2,
    date: "August 5, 2024",
    description: "Sample webinar event description goes here.",
    availability: "Available",
    category: "Webinar Event",
  },
];

const Events = () => {
  const [filter, setFilter] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredEvents = eventData.filter(
    (event) => filter === "All" || event.category === filter
  );

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Slider with different images for each slide */}
      <div className="relative w-full bg-black md:py-8 py-0">
        <div className="hidden md:block">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination", // Use custom class for pagination
            }}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-full max-w-screen-xl mx-auto mb-10"
          >
            {slideContent.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="relative w-full h-[600px] md:h-[800px]">
                  <Image
                    src={slide.imageSrc}
                    alt={`Slide ${index + 1}`}
                   fill
                    objectFit="cover"
                    className="object-cover w-full h-full rounded-3xl"
                  />
                  <div className="absolute inset-y-0 left-0 w-2/5 bg-black/60 backdrop-blur-md rounded-l-3xl p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {slide.heading}
                    </h2>
                    <p className="text-lg text-white">{slide.paragraph}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
            <div className="swiper-pagination" style={{ color: "white" }}></div>
          </Swiper>
        </div>
      </div>
      <MobileHeroSection />

      <div className="py-8 px-4 md:px-8 bg-gray-200">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 flex flex-wrap justify-start space-x-4">
            <button
              className={`py-2 px-4 rounded-full font-bold ${
                filter === "All" ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold ${
                filter === "City Event"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("City Event")}
            >
              City Event
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold ${
                filter === "Webinar Event"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Webinar Event")}
            >
              Webinar Event
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-base md:text-lg lg:text-xl">
                    Date
                  </th>
                  <th className="py-3 px-4 text-left text-base md:text-lg lg:text-xl">
                    Description
                  </th>
                  <th className="py-3 px-4 text-left text-base md:text-lg lg:text-xl">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="border-b border-gray-300">
                    <td className="py-3 px-4 text-left">{event.date}</td>
                    <td className="py-3 px-4 text-left">{event.description}</td>
                    <td className="py-3 px-4 text-left">
                      <button
                        className="bg-black text-white py-3 px-6 text-lg rounded-lg transition duration-300"
                        onClick={openPopup}
                      >
                        {event.availability}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AppQr isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Events;
