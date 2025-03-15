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
    imageSrc: "/Blog.webp",
  },
  {
    heading: "Slide 2 Heading",
    paragraph: "Description for slide 2 ",
    imageSrc: "/Blog.webp",
  },
];

const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    description:
      "Description of Blog 1 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3",
    imageSrc: "/Blog.webp",
    imageAlt: "Blog 1",
    category: "All",
    date: "January 13, 2023",
  },
  {
    id: 2,
    title: "Blog 2",
    description:
      "Description of Blog 2 Description of Blog 3Description of Blog 3  Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 ",
    imageSrc: "/Blog.webp",
    imageAlt: "Blog 2",
    category: "Health",
    date: "January 13, 2023",
  },
  {
    id: 3,
    title: "Blog 3",
    description:
      "Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3  ",
    imageSrc: "/Blog.webp",
    imageAlt: "Blog 3",
    category: "Spirituality",
    date: "January 13, 2023",
  },
  {
    id: 4,
    title: "Blog 4",
    description:
      "Description of Blog 4 Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4Description of Blog 4 Blog 4DescriptionBlog 4DescriptionBlog 4DescriptionBlog ",
    imageSrc: "/Blog.webp",
    imageAlt: "Blog 4",
    category: "Personal Growth",
    date: "January 13, 2023",
  },
  {
    id: 5,
    title: "Blog 5",
    description:
      "Description of Blog 5 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3 Description of Blog 3",
    imageSrc: "/Blog.webp",
    imageAlt: "Blog 5",
    category: "All",
    date: "January 13, 2023",
  },
];

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

const Blogs = () => {
  const [filter, setFilter] = useState("All");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const filteredBlogs = blogsData.filter(
    (blog) => filter === "All" || blog.category === filter
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
                filter === "Health"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Health")}
            >
              Health
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold ${
                filter === "Spirituality"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setFilter("Spirituality")}
            >
              Spirituality
            </button>
            <button
              className={`py-2 px-4 rounded-full font-bold ${
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
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  <Image
                    src={blog.imageSrc}
                    alt={blog.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl  mb-2 text-[#8366A3]">
                      {blog.title}
                    </h2>
                    <p className="text-lg mb-4 flex-1">
                      {truncateText(blog.description, 100)}
                    </p>
                    <Link
                      href={`/blog/${blog.id}`}
                      passHref
                      className="bg-black text-white py-2 px-4 rounded"
                      style={{ alignSelf: "start" }}
                    >
                      Read More
                    </Link>
                    <hr className="my-4" />
                    <span className="text-gray-500 text-sm">{blog.date}</span>
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

export default Blogs;
