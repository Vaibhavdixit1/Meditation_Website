import React from "react";
import PropTypes from "prop-types";

const TestimonialsHeader = ({ heading, paragraph }) => {
  return (
    <header className="bg-black flex flex-col items-center justify-center py-16">
      <p className="text-yellow-300 text-lg md:text-4xl text-center mb-4">
        {paragraph}
      </p>
      <h1 className="text-white text-center text-4xl md:text-8xl font-bold">
        {heading}
      </h1>
    </header>
  );
};

TestimonialsHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default TestimonialsHeader;
