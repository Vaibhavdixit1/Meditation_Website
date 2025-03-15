import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import MobileHeroSection from "./MobileHeroSection";

const slideContent = [
  {
    heading: "Slide 1 Heading",
    paragraph: "Description for slide 1...",
    imageSrc: "/testimonials.webp",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2...",
    imageSrc: "/testimonials.webp",
  },
];

const testimonialsImages = [
  {
    id: 1,
    src: "/Abhayam-Thumbnail.webp",
    href: "/testimonials/1",
    alt: "testimonials 1",
  },
  {
    id: 2,
    src: "/Abhayam-Thumbnail.webp",
    href: "/testimonials/2",
    alt: "testimonials 2",
  },
  {
    id: 3,
    src: "/Abhayam-Thumbnail.webp",
    href: "/testimonials/3",
    alt: "testimonials 3",
  },
];

const TestimonialsList = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
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
      <div className="py-8 px-4 md:px-8 md:bg-gray-300  bg-white">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-5xl mb-4  md:mb-5 text-center font-extrabold italic">
            Select A Program
          </h1>
          <div className="flex flex-wrap -mx-4">
            {testimonialsImages.map((testimonials) => (
              <div
                key={testimonials.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <Link
                  href={testimonials.href}
                  passHref
                  className="block relative w-full h-64"
                >
                  <Image
                    src={testimonials.src}
                    alt={testimonials.alt}
                   fill
                    objectFit="cover"
                    className="w-full h-full rounded-lg"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsList;
