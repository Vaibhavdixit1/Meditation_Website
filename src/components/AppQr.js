import React from "react";
import Image from "next/image";
import Link from "next/link";
import DownloadIcon from "@mui/icons-material/Download";

const AppQr = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-center text-2xl font-bold mb-4">
          Access All Supramental Meditations On Tat-Tvam-Asi App
        </h2>
        <div className="relative w-full h-64 mb-4">
          <Image
            src="/App-QR.png"
            alt="QR Code"
           fill
            objectFit="contain"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-center text-lg mb-4">Scan QR Or Click Below</p>
        <Link
          href="https://supramentalawakening.com/"
          className="w-full bg-custom-violet text-white py-3 px-6 rounded-xl flex items-center justify-center"
        >
          <DownloadIcon fontSize="large" className="mr-12" />{" "}
          <span className="text-xl font-semibold">Download The App</span>
        </Link>
      </div>
    </div>
  );
};

export default AppQr;
