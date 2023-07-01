import React from "react";
import toys from "./../assets/toys-house.png";
import career from "./../assets/career.png";
import chefs from "./../assets/chefs.png";

const Projects = () => {
  return (
    <div className="container">
      <h2 className="text-4xl text-center my-8 font-semibold">My Projects</h2>
      <div className="my-8 grid lg:grid-cols-3 gap-4 grid-cols-1">
        <div>
          <a href="https://toys-house-de90b.web.app">
            <img src={toys} alt="" />
          </a>
          <p className="ps-5">
            <span className="text-xl font-semibold underline">
              Key Features
            </span>
            <ul className="grid grid-cols-2">
              <li className="list-disc">React js</li>
              <li className="list-disc">Tailwind</li>
              <li className="list-disc">MongoDB</li>
              <li className="list-disc">Node js</li>
              <li className="list-disc">Express js</li>
              <li className="list-disc">Firebase</li>
            </ul>
          </p>
        </div>
        <div>
          <a href="https://careermatch.netlify.app">
            <img src={career} alt="" />
          </a>
          <p className="ps-5">
            <span className="text-xl font-semibold underline">
              Key Features
            </span>
            <ul className="grid grid-cols-2">
              <li className="list-disc">React js</li>
              <li className="list-disc">Tailwind</li>
              <li className="list-disc">Firebase</li>
              <li className="list-disc">Chrome Dev tools</li>
            </ul>
          </p>
        </div>
        <div>
          <a href="https://great-bd-chef-recipes.web.app">
            <img src={chefs} alt="" />
          </a>
          <p className="ps-5">
            <span className="text-xl font-semibold underline">
              Key Features
            </span>
            <ul className="grid grid-cols-2">
              <li className="list-disc">React js</li>
              <li className="list-disc">Tailwind</li>
              <li className="list-disc">Firebase</li>
              <li className="list-disc">Chrome Dev tools</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
