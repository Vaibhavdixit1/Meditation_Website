import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MobileHeroSection from "./MobileHeroSection";
import { Autoplay, Pagination } from "swiper/modules";

const slideContent = [
  {
    heading: "Slide 1 Heading",
    paragraph: "Description for slide 1...",
    imageSrc: "/videos.jpeg",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/videos.jpeg",
  },
];

const videoImages = [
  {
    id: 1,
    src: "/Aim-of-Human-Life.jpeg",
    href: "#",
    alt: "Video 1",
    heading: "Video 1 Title",
    category: "All",
  },
  {
    id: 2,
    src: "/Aim-of-Human-Life.jpeg",
    href: "#",
    alt: "Video 2",
    heading: "Video 2 Title",
    category: "Essential Of Life",
  },
  {
    id: 3,
    src: "/Aim-of-Human-Life.jpeg",
    href: "#",
    alt: "Video 3",
    heading: "Video 3 Title",
    category: "Self Improvement",
  },
];

const Videos = () => {
  const [filter, setFilter] = useState("All");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredVideos = videoImages.filter(
    (video) => filter === "All" || video.category === filter
  );

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
      <div className="py-8 px-4 md:px-8 bg-gray-300">
        <div className="max-w-screen-xl mx-auto">
          {/* Filter Buttons with Horizontal Scrolling */}
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
                  filter === "Essential Of Life"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("Essential Of Life")}
              >
                Essential Of Life
              </button>
              <button
                className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                  filter === "Self Improvement"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setFilter("Self Improvement")}
              >
                Self Improvement
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <Link href={video.href} passHref>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative w-full h-64">
                      <Image
                        src={video.src}
                        alt={video.alt}
                       fill
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mt-4 text-center">
                        {video.heading}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
