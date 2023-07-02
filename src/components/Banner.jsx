import React from "react";
import Typewriter from 'typewriter-effect';
import MovingText from 'react-moving-text'
import image from "./../assets/Untitled-2.png";
import "./Banner.css";
import ResumeButton from "./ResumeButton";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse container items-center gap-8 mb-10 z-10 py-8 lg:pb-0">
      <div className="lg:ps-10 ps-2">
        
        <h4 className="text-3xl font-bold mb-4"><Typewriter options={{
    strings: ["Hello I'm"],
    autoStart: true,
    loop: true,
  }}></Typewriter></h4>
        <h2 className="text-6xl font-semibold">
          <MovingText
  type="effect3D"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="infinite"
  fillMode="white">
  Md. Joshim Uddin
</MovingText> </h2>
        <p className="text-justify my-6">
          Highly committed and enthusiastic fresher web developer with a strong
          foundation in HTML, CSS, JavaScript, and modern frontend frameworks
          like React.
        </p>
        <div className="flex gap-5">
          {" "}
          <button className="btn btn-custom">
            <a href="">Contact Me</a>
          </button>
          <ResumeButton />
        </div>
      </div>
      <div className="image md:ms-48 w-full flex items-center justify-end">
        <img src={image} alt="" className="h-full z-20 p-5 md:pr-10 bg-gradient-to-tr from-purple-200 via-blue-400 to-purple-500 md:rounded-tl-[270px] md:rounded-br-[200px] rounded-tl-[60px] rounded-br-[70px]" />
      </div>
    </div>
  );
};

export default Banner;
