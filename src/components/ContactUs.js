import React from "react";
import ContactForm from "./ContactForm";
import {
  Facebook,
  LinkedIn,
  YouTube,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ContactUs = () => {
  return (
    <div>
      <header className="bg-black flex flex-col items-center justify-center py-16">
        <h1 className="text-white text-center text-4xl md:text-8xl">
          Contact Us
        </h1>
        <p className="text-white text-sm md:text-lg text-center">
          info@srisiddhasanmarga.com
        </p>
      </header>
      <ContactForm />
      <section className="bg-gray-200 pb-16">
        <div className="text-center">
          <h2 className="text-black text-4xl font-bold mb-10">
            Follow Guruji on Social Media
          </h2>
          <div className="flex justify-center space-x-4">
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 transform transition-transform duration-300 hover:scale-110"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              <Facebook sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkdin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 transform transition-transform duration-300 hover:scale-110"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              <LinkedIn sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 transform transition-transform duration-300 hover:scale-110"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              <YouTube sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 transform transition-transform duration-300 hover:scale-110"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              <Instagram sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://twiiter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 transform transition-transform duration-300 hover:scale-110"
              sx={{
                color: "white",
                "&:hover": { backgroundColor: "black", color: "white" },
              }}
            >
              <Twitter sx={{ fontSize: 30 }} />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
