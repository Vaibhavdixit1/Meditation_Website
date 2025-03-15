import React, { useState, useRef } from "react";
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
    imageSrc: "/meditations.webp",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/meditations.webp",
  },
];

const meditationData = [
  {
    id: 1,
    title: "Meditation 1",
    imageSrc: "/Atmarama.jpg",
    imageAlt: "Meditation 1",
    category: "All",
  },
  {
    id: 2,
    title: "Meditation 2",
    imageSrc: "/Atmarama.jpg",
    imageAlt: "Meditation 2",
    category: "Mindfulness",
  },
  {
    id: 3,
    title: "Meditation 3",
    imageSrc: "/Atmarama.jpg",
    imageAlt: "Meditation 3",
    category: "Relaxation",
  },
  {
    id: 4,
    title: "Meditation 4",
    imageSrc: "/Atmarama.jpg",
    imageAlt: "Meditation 4",
    category: "Focus and Concentration",
  },
  {
    id: 5,
    title: "Meditation 5",
    imageSrc: "/Atmarama.jpg",
    imageAlt: "Meditation 5",
    category: "Other",
  },
];

const Meditation = () => {
  const [filter, setFilter] = useState("All");
  const [selectedMeditation, setSelectedMeditation] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredMeditations = meditationData.filter(
    (meditation) => filter === "All" || meditation.category === filter
  );

  const openPopup = (meditation) => {
    setSelectedMeditation(meditation);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedMeditation(null);
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
              el: ".swiper-pagination",
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
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap space-x-4">
              <button
                className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                  filter === "All"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                  filter === "Mindfulness"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("Mindfulness")}
              >
                Mindfulness
              </button>
              <button
                className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                  filter === "Relaxation"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("Relaxation")}
              >
                Relaxation
              </button>
              <button
                className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                  filter === "Focus and Concentration"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("Focus and Concentration")}
              >
                Focus and Concentration
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredMeditations.map((meditation) => (
              <div
                key={meditation.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full cursor-pointer"
                  onClick={() => openPopup(meditation)}
                >
                  <div className="w-full h-80 relative">
                    <Image
                      src={meditation.imageSrc}
                      alt={meditation.imageAlt}
                     fill
                      objectFit="cover"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 items-center">
                    <h2 className="text-2xl font-semibold mb-2 text-center">
                      {meditation.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      <AppQr isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Meditation;
