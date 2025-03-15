import { useRouter } from "next/router";
import TestimonialsHeader from "@/components/TestimonialsHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Pagination, Navigation } from "swiper/modules";

const TestimonialsDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <TestimonialsHeader paragraph="Sanmarga Abhayam" heading="Testimonials" />
      <div className="relative flex justify-center my-10">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
                  <h2 className="text-lg font-bold text-left">Testimonial 1</h2>
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
                  <h2 className="text-lg font-bold text-left">Testimonial 2</h2>
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
                  "The team went above and beyond to ensure I was satisfied with
                  every aspect of the service."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
              <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-left">Testimonial 3</h2>
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
                  "The team went above and beyond to ensure I was satisfied with
                  every aspect of the service."
                </p>
                <p className="text-center text-lg mb-2">
                  "The team went above and beyond to ensure I was satisfied with
                  every aspect of the service."
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[450px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-between border border-black overflow-hidden">
              <div className="w-full bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-left">Testimonial 4</h2>
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
                  "The team went above and beyond to ensure I was satisfied with
                  every aspect of the service."
                </p>
                <p className="text-center text-lg mb-2">
                  "Excellent experience, very satisfied with the results."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TestimonialsDetail;
