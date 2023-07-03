import React, { useRef } from "react";
import fb from "./../assets/icons/facebook.png";
import twt from "./../assets/icons/twitter.png";
import insta from "./../assets/icons/insta.png";
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
    <div className="flex lg:flex-row flex-col justify-around gap-8 bg-purple-700 text-white px-8 mt-4 py-8">
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
