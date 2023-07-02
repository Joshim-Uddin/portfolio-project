import React from "react";
import js from "./../assets/icons/js.png";
import react from "./../assets/icons/react.png";
import node from "./../assets/icons/nodejs.png";
import mdb from "./../assets/icons/mongo.png";

const Expertise = () => {
  return (
    <div className="lg:px-10 px-2">
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
    </div>
  );
};

export default Expertise;
