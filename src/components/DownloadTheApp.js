import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import Link from "next/link";

const DownloadTheApp = () => {
  return (
    <div className="bg-[#170030] text-white p-6 md:p-20 w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-7xl	 mb-4 text-center font-extrabold italic">
          Tat-Tvam-Asi
        </h1>
        <p className="text-yellow-300 text-lg md:text-xl mb-6 text-center">
          # 01 - Supramental Meditation App in the World
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <Image
              src="/mock.webp"
              alt="Download"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center text-left italic">
            <p className="mb-4 text-base md:text-xl">
              Tat-Tvam-Asi provides a glimpse into the world of Supramental
              meditations designed for you to experience higher levels of
              consciousness.
            </p>
            <p className="mb-6 text-base md:text-xl">
              Download the App and access various Supramental Meditations that
              are designed to help you Tap into your Inner Infinite Potential,
              which is the potential of GOD within.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="https://supramentalawakening.com/">
                <button className="bg-white text-black py-2 px-4 md:py-2 md:px-6 rounded font-bold flex items-center">
                  <DownloadIcon className="mr-2" />
                  Download Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTheApp;
