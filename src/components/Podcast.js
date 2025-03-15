import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MobileHeroSection from "./MobileHeroSection";
import { Autoplay, Pagination } from "swiper/modules";

const slideContent = [
  {
    heading: "Slide 1 Heading",
    paragraph: "Description for slide 1...",
    imageSrc: "/podcast.jpeg",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/podcast.jpeg",
  },
];

const podcastData = [
  {
    id: 1,
    title: "Podcast 1",
    imageSrc: "/Importance-of-Meditation.jpg",
    imageAlt: "Podcast 1",
    category: "All",
  },
  {
    id: 2,
    title: "Podcast 2",
    imageSrc: "/Importance-of-Meditation.jpg",
    imageAlt: "Podcast 2",
    category: "Parenting",
  },
  {
    id: 3,
    title: "Podcast 3",
    imageSrc: "/Importance-of-Meditation.jpg",
    imageAlt: "Podcast 3",
    category: "Self Improvement",
  },
  {
    id: 4,
    title: "Podcast 4",
    imageSrc: "/Importance-of-Meditation.jpg",
    imageAlt: "Podcast 4",
    category: "Impact of Meditation",
  },
];

const FilterButton = ({ category, currentFilter, setFilter }) => (
  <button
    className={`py-2 px-4 rounded-full font-bold whitespace-nowrap ${
      currentFilter === category ? "bg-black text-white" : "bg-white text-black"
    }`}
    onClick={() => setFilter(category)}
  >
    {category}
  </button>
);

const PodcastCard = ({ podcast }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="w-full h-80 relative">
        <Image
          src={podcast.imageSrc}
          alt={podcast.imageAlt}
          fill
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 items-center">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          {podcast.title}
        </h2>
      </div>
    </div>
  </div>
);

const Podcast = () => {
  const [filter, setFilter] = useState("All");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredPodcasts = podcastData.filter(
    (podcast) => filter === "All" || podcast.category === filter
  );

  return (
    <>
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
      <div className="py-8 px-4 md:px-8 bg-gray-300">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-nowrap space-x-4">
              {[
                "All",
                "Parenting",
                "Self Improvement",
                "Impact of Meditation",
              ].map((category) => (
                <FilterButton
                  key={category}
                  category={category}
                  currentFilter={filter}
                  setFilter={setFilter}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredPodcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;
