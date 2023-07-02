import React from "react";
import fb from "./../assets/icons/facebook.png";
import twt from "./../assets/icons/twitter.png";
import insta from "./../assets/icons/insta.png";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col justify-around gap-8 bg-purple-700 text-white px-8 mt-4 py-8">
      <div className="w-1/2">
        <h2 className="text-orange-600 font-bold text-3xl underline">
          Lets Connect
        </h2>
        <p className="mt-8">
          Please fill out the form on this section to contact with me or call
          between 9:00 A.M and 8.00 P.M ET, Sunday through Thursday.
        </p>
        <div className="flex gap-5 mt-8">
          <a href="https://www.facebook.com/joshim3334">
            <img src={fb} alt="Facebook icon" />
          </a>
          <a href="https://twitter.com/Joshimu744288">
            <img src={twt} alt="Twitter icon" />
          </a>
          <a href="#">
            <img src={insta} alt="Instagram Icon" />
          </a>
        </div>
      </div>
      <div className="">
        <h2 className="text-orange-600 font-bold text-3xl underline">
          Message me
        </h2>
        <form className="flex flex-col items-center gap-4 mt-8">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols="40"
            rows="6"
            placeholder="message"
            className="resize-none"
          ></textarea>
          <button type="submit" className="btn btn-custom">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
