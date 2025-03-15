import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MobileHeroSection from "./MobileHeroSection";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const slideContent = [
  {
    heading: "Slide 1 Heading",
    paragraph: "Description for slide 1...",
    imageSrc: "/programs.webp",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/programs.webp",
  },
];

const programsData = [
  {
    id: 1,
    title: "Program 1",
    description: "Description of Program 1...",
    imageSrc: "/programs.webp",
    imageAlt: "Program 1",
    category: "All",
  },
  {
    id: 2,
    title: "Program 2",
    description: "Description of Program 2...",
    imageSrc: "/programs.webp",
    imageAlt: "Program 2",
    category: "Health",
  },
  {
    id: 3,
    title: "Program 3",
    description: "Description of Program 3...",
    imageSrc: "/programs.webp",
    imageAlt: "Program 3",
    category: "Spirituality",
  },
  {
    id: 4,
    title: "Program 4",
    description: "Description of Program 4...",
    imageSrc: "/programs.webp",
    imageAlt: "Program 4",
    category: "Personal Growth",
  },
  {
    id: 5,
    title: "Program 5",
    description:
      "Description of Program 5 programsprogramsprogramsprogramsp rogramsprograms programsprogramsprograms Description of Program 5 programsprogramsprogramsprogramsp rogramsprograms programsprogramsprograms Description of Program 5 programsprogramsprogramsprogramsp ",
    imageSrc: "/programs.webp",
    imageAlt: "Program 5",
    category: "All",
  },
];
const truncateText = (text, length) =>
  text.length <= length ? text : text.slice(0, length) + "...";

const Programs = () => {
  const [filter, setFilter] = useState("All");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredPrograms = programsData.filter(
    (program) => filter === "All" || program.category === filter
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
                    <p className="text-lg text-white">{slide.paragraph} </p>
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
          {/* <p className="text-lg mb-8 text-center">
            Explore our range of programs designed to elevate your spiritual
            journey.
          </p> */}
          <div className="mb-8 flex overflow-x-auto space-x-4 py-2">
            <button
              className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                filter === "All" ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                filter === "Health"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Health")}
            >
              Health
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                filter === "Spirituality"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Spirituality")}
            >
              Spirituality
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
                filter === "Personal Growth"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Personal Growth")}
            >
              Personal Growth
            </button>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  <Image
                    src={program.imageSrc}
                    alt={program.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-2xl font-semibold mb-2">
                      {program.title}
                    </h2>
                    <p className="text-lg mb-4 flex-1">
                      {truncateText(program.description, 100)}
                    </p>
                    <Link
                      href={`/programs/${program.id}`} // Dynamic link based on program.id
                      className="bg-black text-white py-2 px-4 rounded"
                      style={{ alignSelf: "start" }}
                    >
                      More Information
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
