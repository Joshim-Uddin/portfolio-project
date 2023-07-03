import React from "react";
import Typewriter from 'typewriter-effect';
import MovingText from 'react-moving-text'
import image from "./../assets/Untitled-2.png";
import "./Banner.css";
import ResumeButton from "./ResumeButton";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse container items-center gap-8 mb-10 z-10 py-8 lg:pb-0">
      <div className="lg:ps-10 ps-2">
      <h4 className="md:text-4xl text-3xl font-semibold">
          Hi I&apos;m
  
 </h4>
        <h2 className="md:text-6xl text-4xl font-bold mb-4"><Typewriter options={{
    strings: ["Md. Joshim Uddin", "A Front End Developer", "Exprerienced in MERN"],
    autoStart: true,
    loop: true,
  }}></Typewriter></h2>
        
        <p className="text-justify my-6">
          Highly committed and enthusiastic fresher web developer with a strong
          foundation in HTML, CSS, JavaScript, and modern frontend frameworks
          like React.
        </p>
        <div className="flex gap-5">
          {" "}
          <HashLink to='#contact'>
          <button className="btn btn-custom">
            Contact Me
          </button>
          </HashLink>
          <ResumeButton />
        </div>
      </div>
      <div className="image w-4/6 flex items-center justify-end">
        <img src={image} alt="" className="h-full z-20 p-5 md:pr-10 bg-gradient-to-tr from-purple-200 via-blue-400 to-purple-500 md:rounded-tl-[270px] md:rounded-br-[200px] rounded-tl-[60px] rounded-br-[70px]" />
      </div>
    </div>
  );
};

export default Banner;
