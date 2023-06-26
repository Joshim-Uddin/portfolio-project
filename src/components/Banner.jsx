import React from "react";
import image from "./../assets/Untitled-2.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center gap-8 mb-10 bg-indigo-300 pb-5 lg:pb-0">
      <div className="lg:ps-10 ps-2">
        <h4 className="text-3xl font-bold mb-4">Hello I&apos;m</h4>
        <h2 className="text-6xl font-semibold">Md. Joshim Uddin</h2>
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
          <button className="btn btn-outline btn-primary">
            <a href="">Download CV</a>
          </button>
        </div>
      </div>
      <div className="image w-full h-screen flex items-center justify-end">
        <img src={image} alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Banner;
