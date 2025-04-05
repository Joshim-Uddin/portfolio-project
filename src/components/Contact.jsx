import React, { useRef } from "react";
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm('service_6zmn7or', 'template_l88cpmg', form.current, 'N-WXnQCmAF7r3XgTZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contact" className="container h-screen mt-20 bg-[rgba(96,96,96,0.3)] pt-10" data-aos="fade-left">
      <h2 className="text-4xl font-semibold text-center mb-3">Contact</h2>
      <hr className="border-2 border-blue-600 w-1/12 mx-auto" data-aos="fade-right"/>
      <div className="flex lg:flex-row flex-col justify-around gap-8 px-8 mt-4 py-8">
      <div className="w-1/2">
        <h2 className="text-orange-600 font-bold text-3xl underline">
          Let&apos;s Connect
        </h2>
        <p className="mt-8 text-base sm:text-lg">
          Please fill out the form on this section to contact with me or call at +8801712113334
          between 9:00 A.M and 8.00 P.M ET, Sunday through Thursday.
          <br />Email: joshimuddin1831@gmail.com
          <br />
          Address: Masterpara, Daulatpur-7050, Kushtia, Bangladesh
        </p>
        <div className="flex gap-5 mt-8">
        <a href="https://www.linkedin.com/in/md-joshim-uddin-kushtia/" target="blank">
            <FaLinkedin className="text-orange-600 text-xl hover:text-blue-600"/>
          </a>
          <a href="https://www.facebook.com/joshim3334" target="blank">
            <FaFacebook className="text-orange-600 text-xl hover:text-blue-600"/>
          </a>
          <a href="https://twitter.com/Joshimu744288" target="blank">
            <FaTwitter className="text-orange-600 text-xl hover:text-blue-600"/>
          </a>
          <a href="#" target="blank">
            <FaInstagram className="text-orange-600 text-xl hover:text-blue-600"/>
          </a>
        </div>
      </div>
      <div className="text-black">
        <h2 className="text-orange-600 font-bold text-3xl underline">
          Message me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center gap-4 mt-8">
          <input type="text" name="from_name" placeholder="Your Name" />
          <input type="email" name="from_email" placeholder="Your Email" />
          <textarea
            name="message"
            id=""
            cols="40"
            rows="6"
            placeholder="message"
            className="resize-none"
          ></textarea>
          <button type="submit" className="btn btn-custom">
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
