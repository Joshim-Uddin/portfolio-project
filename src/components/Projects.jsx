import React, { useEffect, useState } from "react";
import toys from './../assets/toys-house.png'
import camp from "./../assets/camp.png";
import chefs from "./../assets/chefs.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import './Projects.css';

const Projects = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  },[scrollTop])
  return (
    <div id="projects" className="md:h-screen mt-5 container border-b-8 border-amber-400 mb-5" data-aos="fade-in">
      <h2 className="text-4xl text-center mt-8 mb-5 font-semibold">My Projects</h2>
      <hr className="border-2 border-blue-600 w-2/12 mx-auto" data-aos="fade-left"/>
      <div className="my-8 grid lg:grid-cols-3 gap-4 grid-cols-1">
        <div className="px-2">
          <div className="h-72 toys">
            
          </div>
         <div className="mt-5">
         <p className="ps-5 mb-3 text-xl font-semibold underline">
              Key Features
          </p>
          <ul className="ps-5">
              <li className="list-disc">User Login by Firebase Authentication</li>
              <li className="list-disc">Logged In user can add a toy</li>
              <li className="list-disc">User can see the list of added toys</li>
              <li className="list-disc">My toys list sorting by price</li>
              <li className="list-disc mb-2">All toys list search by text</li>
              <Link to="https://toys-house-de90b.web.app" target="blank" className="mt-2 font-semibold">Live Link</Link>
            </ul>
           
         </div>
        </div>
        <div className="px-2">
          <div className="h-72 camp">
            
          </div>
         <div className="mt-5">
         <p className="ps-5 mb-3 text-xl font-semibold underline">
              Key Features
          </p>
          <ul className="ps-5">
              <li className="list-disc">Role based Dashboard</li>
              <li className="list-disc">Secured by JWT and AxiosSecure</li>
              <li className="list-disc">MongoDB aggregate implemented</li>
              <li className="list-disc">Instructor can add classes</li>
              <li className="list-disc mb-2">Payment system integrated</li>
              <Link to="https://sports-fushion-camp-a87dd.web.app" target="blank" className="mt-2 font-semibold">Live Link</Link>
            </ul>
           
         </div>
        </div>
        <div className="px-2">
          <div className="h-72 chefs">
            
          </div>
         <div className="mt-5">
         <p className="ps-5 mb-3 text-xl font-semibold underline">
              Key Features
          </p>
          <ul className="ps-5">
              <li className="list-disc">User Login by Firebase Authentication</li>
              <li className="list-disc">Logged In user can view recipe details</li>
              <li className="list-disc">User can add a recipe as favorite</li>
              <li className="list-disc">Dark light mode integrated</li>
              <li className="list-disc mb-2">Responsive in mobile phone</li>
              <Link to="https://great-bd-chef-recipes.web.app" target="blank" className="mt-2 font-semibold">Live Link</Link>
            </ul>
           
         </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
