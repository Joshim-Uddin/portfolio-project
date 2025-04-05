import React from "react";

const AboutMe = () => {
  return (
    <div className="py-5 container sm:text-lg text-base" id="aboutme">
      <h3 className="text-4xl font-semibold text-center mb-5">About Me</h3>
      <hr className="border-2 border-blue-600 w-2/12 mx-auto" data-aos="fade-left"/>
      <p className="text-justify mt-3">
        I&apos;m a passionate web developer specializing in frontend
        technologies. I have been exploring web technologies for 2 years. I have completed the &apos;complete web development course&apos; from programing hero. It took six months to finish the course. During the course, I went through several topics on JavaScript in depth. I learnt react, created some projects with react. I worked with Node, express, and MongoDB. I want to expand my adaptability to updated web technologies and libraries.
      </p>
      <p className="text-justify mt-3">
        I myself prefer to work in a team environment. Because I believe that, different new terms are easy to learn through team work. I have a strength of patient to work in cool head and I enjoy coding like playing. My weakness is impatient about completeing things that in hand. I face challenges with patient and diving in deep of problem makes me feel joy. 
      </p>
    </div>
  );
};

export default AboutMe;
