import React, { useRef, useState } from "react";
import DownloadTheApp from "@/components/DownloadTheApp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import MobileHeroSection from "@/components/MobileHeroSection";
import BhuktiMargaPopup from "@/components/BhuktiMargaPopup";
import MuktiMargaPopup from "@/components/MuktiMargaPopup";
import ContactForm from "@/components/ContactForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const slideContent = [
  {
    heading: "Heading 1",
    paragraph:
      "This is a paragraph for Slide 1. It provides additional information and context.",
    imageSrc: "/header.webp",
  },
  {
    heading: "Heading 2",
    paragraph:
      "This is a paragraph for Slide 2. It provides additional information and context.",
    imageSrc: "/header.webp",
  },
  {
    heading: "Heading 3",
    paragraph:
      "This is a paragraph for Slide 3. It provides additional information and context.",
    imageSrc: "/header.webp",
  },
];

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [showBhuktiMarga, setShowBhuktiMarga] = useState(false);
  const [showMuktiMarga, setShowMuktiMarga] = useState(false);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      {/* Slider with 3 larger images where 40% of each image is blurred */}
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
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mt-16 mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-7xl	 font-extrabold mb-4">
            SANMARGA SRIVIDYA
          </h1>
          <p className="text-xl hidden md:block">
            Divine Wisdom, that Bestows “Bhukthi” and “Mukthi”.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col items-center">
            <Image
              alt="Description 1"
              className="w-full h-auto rounded-3xl"
              src="/test.webp"
              width={500}
              height={500}
            />
            <div className="mt-4 text-center w-full px-4">
              <p className="text-xl mb-4 leading-8 sm:mt-10">
                Materialistic abundance is not limited to accumulation of
                wealth, but understanding its transient nature. It’s about
                appreciating the richness of life and using resources to foster
                growth, compassion, and inner peace, transcending mere physical
                possessions.
              </p>
              <button
                className="w-full px-6 py-3 bg-black text-white rounded-lg text-3xl font-semibold italic"
                onClick={() => setShowBhuktiMarga(true)}
              >
                Explore Bhukti Marga
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              alt="Description 2"
              className="w-full h-auto rounded-3xl"
              src="/header.webp"
              width={500}
              height={500}
            />
            <div className="mt-4 text-center w-full px-4">
              <p className="text-xl mb-4 leading-8 sm:mt-10">
                Mental and emotional liberation involves releasing limiting
                beliefs and negative emotions. It’s a journey towards
                self-awareness, understanding, and enabling one to experience
                life with clarity, joy, and a deep connection to the self and
                the world around.
              </p>
              <button
                className="w-full px-6 py-3 bg-black text-white rounded-lg text-3xl	 font-semibold italic"
                onClick={() => setShowMuktiMarga(true)}
              >
                Explore Mukti Marga
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 md:mt-40 mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl	 font-extrabold mb-12 md:mb-24">
            TRANSFORMATION JOURNEYS
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <iframe
              className="w-full md:w-[560px] h-[315px] rounded-lg"
              src="https://www.youtube.com/embed/XUxMUcFDWhA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full md:w-[560px] h-[315px] rounded-lg"
              src="https://www.youtube.com/embed/IGNRdx_pcmk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-20 mb-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-12 md:mb-24">
            IMPACT OF SRIVIDYA
          </h1>

          <div className="flex justify-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              className="w-full max-w-[1200px]"
            >
              <SwiperSlide>
                <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
                  <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-left">
                        Testimonial 1
                      </h2>
                      <p className="text-yellow-500 text-left">
                        #Hashtag1 #Hashtag2
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <FacebookIcon className="text-white text-5xl bg-black rounded-full p-2" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto">
                    <p className="text-center text-lg mb-2">
                      "This is a fantastic service. Highly recommend!"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
                  <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-left">
                        Testimonial 2
                      </h2>
                      <p className="text-yellow-500 text-left">
                        #Hashtag3 #Hashtag4
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <YouTubeIcon className="text-white text-5xl bg-black p-2" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto">
                    <p className="text-center text-lg mb-2">
                      "Excellent experience, very satisfied with the results."
                    </p>
                    <p className="text-center text-lg mb-2">
                      "The team went above and beyond to ensure I was satisfied
                      with every aspect of the service."
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
                  <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-left">
                        Testimonial 3
                      </h2>
                      <p className="text-yellow-500 text-left">
                        #Hashtag3 #Hashtag4
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <YouTubeIcon className="text-white text-5xl bg-black p-2" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto">
                    <p className="text-center text-lg mb-2">
                      "Excellent experience, very satisfied with the results."
                    </p>
                    <p className="text-center text-lg mb-2">
                      "The team went above and beyond to ensure I was satisfied
                      with every aspect of the service."
                    </p>
                    <p className="text-center text-lg mb-2">
                      "The team went above and beyond to ensure I was satisfied
                      with every aspect of the service."
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
                  <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-left">
                        Testimonial 4
                      </h2>
                      <p className="text-yellow-500 text-left">
                        #Hashtag3 #Hashtag4
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <InstagramIcon className="text-white text-5xl bg-black p-2" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto">
                    <p className="text-center text-lg mb-2">
                      "Excellent experience, very satisfied with the results."
                    </p>
                    <p className="text-center text-lg mb-2">
                      "The team went above and beyond to ensure I was satisfied
                      with every aspect of the service."
                    </p>
                    <p className="text-center text-lg mb-2">
                      "Excellent experience, very satisfied with the results."
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <DownloadTheApp />
      <ContactForm />
      <BhuktiMargaPopup
        show={showBhuktiMarga}
        onClose={() => setShowBhuktiMarga(false)}
      />
      <MuktiMargaPopup
        show={showMuktiMarga}
        onClose={() => setShowMuktiMarga(false)}
      />
    </>
  );
};

export default Home;
