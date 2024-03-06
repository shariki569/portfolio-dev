import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <picture>
        <source
          media="min-width: 768px"
          srcSet="https://res.cloudinary.com/duxm7pc8y/image/upload/v1687575420/SepalonAssets/Main-bg-desktop_itkt5a.jpg"
        />
        <img
          className="w-full h-screen object-cover object-bottom"
          src="https://res.cloudinary.com/aquacainta/image/upload/v1687575420/SepalonAssets/Main-bg-desktop_itkt5a.jpg"
        />
      </picture>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Clint Sepalon
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web-Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Digital Illustrator",
                2000,
                "Graphic Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex space-around gap-4 pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/CATS2922"><FaTwitter className="cursor-pointer" size={20} /></a>
            <a href="https://www.facebook.com/clint.sepalon/" target="_blank" rel="noreferrer"><FaFacebookF className="cursor-pointer" size={20} /></a>
            <a href="https://www.linkedin.com/in/clint-sepalon-189768247/" target="_blank" rel="noreferrer"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
            <a href="https://www.instagram.com/clintsepalon/" target="_blank" rel="noreferrer"><FaInstagram className="cursor-pointer" size={20} /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
