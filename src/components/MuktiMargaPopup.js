import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const MuktiMargaPopup = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-black text-white w-full h-full flex flex-col items-center justify-center p-4"
          >
            <CloseIcon
              className="absolute top-4 right-4 text-5xl cursor-pointer bg-white text-black rounded-full p-4 transition-transform transform-gpu"
              onClick={onClose}
            />
            <div className="flex flex-col items-center  max-w-3xl">
              <h2 className="text-4xl font-bold mb-4 text-center">
                Mukti Marga
              </h2>
              <Image
                src="/header.webp"
                alt="Mukti Marga"
                width={800}
                height={400}
                className="object-cover w-full h-60 mb-6"
              />
              <p className="text-lg mb-6">
                Content for Mukti Marga. Mental and emotional liberation
                involves releasing limiting beliefs and negative emotions. It’s
                a journey towards self-awareness, understanding, and enabling
                one to experience life with clarity, joy, and a deep connection
                to the self and the world around.
              </p>
              <button className="bg-[#220047] text-white px-6 py-3 rounded-lg text-xl font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MuktiMargaPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MuktiMargaPopup;
