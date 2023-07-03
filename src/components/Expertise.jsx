import React from "react";
import js from "./../assets/icons/js.png";
import react from "./../assets/icons/react.png";
import node from "./../assets/icons/nodejs.png";
import mdb from "./../assets/icons/mongo.png";
import Tilt from 'react-parallax-tilt';
import html from './../assets/icons/html.png'
import css from './../assets/icons/css.png'
import jes from './../assets/icons/javascript.png'
import bs from './../assets/icons/bootstrap.png'
import tailwind from './../assets/icons/tailwind.png'
import reacts from './../assets/icons/physics.png'
import nodes from './../assets/icons/nodejs (1).png'
import express from './../assets/icons/express.png'
import mongodb from './../assets/icons/mongodb.png'
import firebase from './../assets/icons/firebase.png'
import github from './../assets/icons/github.png'
import gitbash from './../assets/icons/gitbash.png'
import vercel from './../assets/icons/vercel.png'
import jwt from './../assets/icons/jwt.png'
import netlify from './../assets/icons/netlify.png'

const Expertise = () => {
  return (
    <div id="expertise"  className="my-5 pb-5 lg:px-10 px-2 container" data-aos="fade-out">
      <h2 className="text-4xl font-bold text-center mt-8 mb-5">My Expertises</h2>
      <hr className="border-2 border-blue-600 w-3/12 mx-auto" data-aos="fade-right"/>
      <p className="text-xl lg:w-10/12 mt-3 mx-auto text-justify">
        I am Md. Joshim Uddin, a fresher web developer with expertise in HTML,
        CSS, Tailwind CSS, Bootstrap, JavaScript, React for frontend
        development. I also have skills in Node.js, Express.js for backend
        development, and MongoDB for database management. Additionally, I am
        experienced in utilizing Firebase for authentication purposes. I regularly use netlify, vercel, gitbas and github as my supporting tools.
      </p>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-6 md:my-8 md:px-8 my-5">
      <Tilt className="rounded-lg bg-gradient-to-t from-purple-600 via-purple-400 to-purple-200 p-5 shadow-lg shadow-[#FF9100]">
        <div>
          <img src={html} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 p-5 shadow-lg shadow-[#2196F3]">
        <div>
          <img src={css} alt="css icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 p-5 shadow-lg shadow-[#FFC107]">
        <div>
          <img src={jes} alt="javaScript icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-green-600 via-green-400 to-green-200 p-5 shadow-lg shadow-[#8012FA]">
        <div>
          <img src={bs} alt="bootstrap icon" />
        </div>
  </Tilt>
  <Tilt className="rounded-lg bg-gradient-to-t from-sea-600 via-sea-400 to-sea-200 p-5 shadow-lg shadow-[#44A8B3]">
        <div>
          <img src={tailwind} alt="tailwind icon"/>
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-fuchsia-600 via-fuchsia-400 to-fuchsia-200 p-5 shadow-lg shadow-[#00E0D7]">
        <div>
          <img src={reacts} alt="react icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-yellow-600 via-amber-400 to-yellow-200 p-5 shadow-lg shadow-[#00ACF1]">
        <div>
          <img src={nodes} alt="node js icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 p-5 shadow-lg shadow-violet-600">
        <div className="h-full">
          <img src={express} alt="express icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 p-5 shadow-lg shadow-stone-600">
        <div>
          <img src={mongodb} alt="mongodb icon"  />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-green-600 via-green-400 to-green-200 p-5 shadow-lg shadow-amber-600">
        <div className="h-full">
          <img src={firebase} alt="firebase icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-teal-600 via-teal-400 to-teal-200 p-5 shadow-lg shadow-white">
        <div className="h-full">
          <img src={github} alt="github icon" className="h-full"  />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 p-5 shadow-lg shadow-red-400">
        <div className="h-full">
          <img src={gitbash} alt="gitbash icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 p-5 shadow-lg shadow-pink-600">
        <div className="h-full">
          <img src={jwt} alt="jwt icon" className="h-full my-auto" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 p-5 shadow-lg shadow-slate-600">
        <div className="h-full">
          <img src={vercel} alt="vercel icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-fan-600 via-fan-400 to-fan-200 p-5 shadow-lg shadow-rose-600">
        <div>
          <img src={netlify} alt="netlify icon"/>
        </div>
  </Tilt>
     
      </div>
    </div>
  );
};

export default Expertise;
