import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const BhuktiMargaPopup = ({ show, onClose }) => {
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
            <div className="flex flex-col items-center max-w-3xl">
              <h2 className="text-4xl font-bold mb-4  text-center ">Bhukti Marga</h2>
              <Image
                src="/test.webp"
                alt="Bhukti Marga"
                width={800}
                height={400}
                className="object-cover w-full h-60 mb-6"
              />
              <p className="text-lg mb-6">
                Content for Bhukti Marga. Materialistic abundance is not limited
                to accumulation of wealth, but understanding its transient
                nature. It’s about appreciating the richness of life and using
                resources to foster growth, compassion, and inner peace,
                transcending mere physical possessions.
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

BhuktiMargaPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BhuktiMargaPopup;
