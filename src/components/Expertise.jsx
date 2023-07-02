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

const Expertise = () => {
  return (
    <div className="lg:px-10 px-2 container">
      <h2 className="text-4xl font-bold text-center my-8">My Expertises</h2>
      <p className="text-xl lg:w-10/12 mx-auto text-justify">
        I am Md. Joshim Uddin, a fresher web developer with expertise in HTML,
        CSS, Tailwind CSS, Bootstrap, JavaScript, React for frontend
        development. I also have skills in Node.js, Express.js for backend
        development, and MongoDB for database management. Additionally, I am
        experienced in utilizing Firebase for authentication purposes.
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-8 gap-5">
        <div className="card shadow-xl flex items-start">
          <figure>
            <img src={js} alt="JavaScript" className="ps-5 pt-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">JavaScript</h2>
            <p>
              I&apos;m comfortable in JavaScript. I use this programming
              language in client side logic building and backend side server
              communication purposes.
            </p>
          </div>
        </div>
        <div className="card shadow-xl flex items-start">
          <figure>
            <img src={react} alt="React" className="ps-5 pt-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">React</h2>
            <p>
              I&apos;m expert in React js. I like React js in frontend
              development. It is very easy and handy to build component and use
              those components.
            </p>
          </div>
        </div>
        <div className="card shadow-xl flex items-start">
          <figure>
            <img src={node} alt="Node js" className="ps-5 pt-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Node.js</h2>
            <p>
              Node js is the JavaScript language base backend Library. It is
              used widley in backend development. I personaly use node js along
              with Express js the node js frameworks to manage server in
              backend.
            </p>
          </div>
        </div>
        <div className="card shadow-xl flex items-start">
          <figure>
            <img src={mdb} alt="MongoDB" className="ps-5 pt-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MongoDB</h2>
            <p>
              MongoDB is a NoSQL Database management platform. It is used widley
              all over the world. I&apos;m very handy to use MongoDB for
              database purposes. Especially I&apos;m good at CRUD Operations.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-purple-600 via-purple-400 to-purple-200 p-5 shadow-lg shadow-[#FF9100]">
        <div>
          <img src={html} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 p-5 shadow-lg shadow-[#2196F3]">
        <div>
          <img src={css} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 p-5 shadow-lg shadow-[#FFC107]">
        <div>
          <img src={jes} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-green-600 via-green-400 to-green-200 p-5 shadow-lg shadow-[#8012FA]">
        <div>
          <img src={bs} alt="html icon" />
        </div>
  </Tilt>
  <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-sea-600 via-sea-400 to-sea-200 p-5 shadow-lg shadow-[#44A8B3]">
        <div>
          <img src={tailwind} alt="html icon" className="h-48 my-auto" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-fuchsia-600 via-fuchsia-400 to-fuchsia-200 p-5 shadow-lg shadow-[#00E0D7]">
        <div>
          <img src={reacts} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-violet-600 via-violet-400 to-violet-200 p-5 shadow-lg shadow-[#00ACF1]">
        <div>
          <img src={nodes} alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 p-5 shadow-lg shadow-violet-600">
        <div>
          <img src={express} alt="html icon" className="h-48 my-auto" />
        </div>
  </Tilt>
      <Tilt className="w-52 h-52 rounded-lg bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 p-5 shadow-lg shadow-stone-600">
        <div>
          <img src={mongodb} alt="html icon" className="h-48 my-auto" />
        </div>
  </Tilt>
     
      </div>
    </div>
  );
};

export default Expertise;
