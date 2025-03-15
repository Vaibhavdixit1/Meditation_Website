import React from "react";
import Image from "next/image";
import Link from "next/link";

const MobileHeroSection = () => {
  return (
    <div className="block md:hidden bg-[#F4F4F4]  text-black p-6 ">
      <div className="max-w-screen-sm mx-auto">
        <Image
          src="/guruji.webp"
          alt="Mobile Hero Image"
          layout="responsive"
          width={700}
          height={475}
          className="rounded-3xl mb-6 mt-5"
        />
        <p className="text-lg mb-4">
          This is the first paragraph for the mobile view section. It provides
          introductory information and context about the content.
        </p>
        <p className="text-lg mb-8">
          This is the second paragraph for the mobile view section. It offers
          more details and enhances the understanding of the content.
        </p>
        <div className="text-center mb-5 ">
          <Link
            href="/about-guruji"
            className="bg-black text-white py-4 px-8 rounded-lg font-bold text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl"
          >
            More About Guruji
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
