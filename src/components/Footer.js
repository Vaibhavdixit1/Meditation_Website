import Link from "next/link";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubscribe = () => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear any previous error
      // Proceed with the subscription process
      alert("Subscribed successfully!");
      setEmail(""); // Clear the input field after subscription
    }
  };
  return (
    <>
      <footer className="bg-black text-white py-12 ">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          <div className="text-left">
            <h1 className="font-bold mb-4 text-2xl">Tat-Tvam-Asi</h1>
            <Link
              target="_blank"
              href="https://supramentalawakening.com/"
              className="bg-white text-black py-2 px-4 mt-4 rounded font-bold"
            >
              Download the App
            </Link>
            <h2 className="font-bold mt-4 mb-4">Social Links</h2>
            <div className="flex justify-start mt-2 space-x-2">
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 transform transition-transform duration-300 hover:scale-110"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}
              >
                <FacebookIcon style={{ color: "black" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 transform transition-transform duration-300 hover:scale-110"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}
              >
                <InstagramIcon style={{ color: "black" }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 transform transition-transform duration-300 hover:scale-110"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}
              >
                <YouTubeIcon style={{ color: "black" }} />
              </IconButton>
            </div>
          </div>
          <div className="text-left">
            <h1 className="font-bold mb-4 text-2xl">Quick Links</h1>
            <ul>
              <li className="text-gray-400">
                <Link href="/meditation">Superamental Meditation</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/events">Superamental Events</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/blogs">Sanmarga Blogs</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/podcast">Podcast</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/videos">Discourses</Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h1 className="font-bold mb-4 text-2xl">More Information</h1>
            <ul>
              <li className="text-gray-400">
                <Link href="/about-guruji">Sidhha Guru Atmananda Ji</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/">Sri Sidhha Sanmarga</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/programs">Mentorship Program</Link>
              </li>
              <li className="text-gray-400">
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h1 className="font-bold mb-4 text-2xl">Newsletter</h1>
            <p className="text-gray-400">
              Register for our monthly Newsletter and receive updates, launches,
              and more.
            </p>
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 mb-2 rounded text-black"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              className="bg-white text-black py-2 px-4 rounded font-bold"
              onClick={handleSubscribe}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </footer>
      <div className="bg-white text-black text-center py-4 text-2xl  md:text-sm lg:text-xl">
        &copy; Copyright 2023 Guru Atmananda ji. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
