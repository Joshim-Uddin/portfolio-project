import React from "react";
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Expertise = () => {
  return (
    <div id="expertise"  className="my-5 pb-5 container" data-aos="fade-out">
      <h2 className="text-4xl font-bold text-center mt-8 mb-5">My Expertises</h2>
      <hr className="border-2 border-blue-600 w-3/12 mx-auto" data-aos="fade-right"/>
      <p className="text-base sm:text-lg mt-3 mx-auto text-justify">
        I am Md. Joshim Uddin, a web developer with expertise in <span className="font-bold uppercase">HTML,
        CSS, Tailwind CSS, Bootstrap, JavaScript, React</span> for frontend
        development. I also have skills in <span className="font-bold uppercase">Node.js, Express.js</span> for backend
        development, and <span className="font-bold uppercase">MongoDB</span> for database management. Additionally, I am
        experienced in utilizing <span className="font-bold uppercase">Firebase</span> for authentication purposes. I use <span className="font-bold uppercase">Json Web Token (JWT)</span> for safe user login and data transfering. I also use <span className="font-bold uppercase">AxiosSecure</span> and <span className="font-bold uppercase">ReactQuery</span> for fetching data smoothly. I regularly use <span className="font-bold uppercase">netlify, vercel, git</span> and <span className="font-bold uppercase">github</span> as my supporting tools.
      </p>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-6 md:my-8 md:px-8 my-5">
      <Tilt className="rounded-lg bg-gradient-to-t from-purple-600 via-purple-400 to-purple-200 p-5 shadow-lg shadow-[#FF9100]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/html_o7ibll.png" alt="html icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 p-5 shadow-lg shadow-[#2196F3]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711374/css_c2rijo.png" alt="css icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 p-5 shadow-lg shadow-[#FFC107]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/javascript_jykw7g.png" alt="javaScript icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-green-600 via-green-400 to-green-200 p-5 shadow-lg shadow-[#8012FA]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/bootstrap_qyzr4x.png" alt="bootstrap icon" />
        </div>
  </Tilt>
  <Tilt className="rounded-lg bg-gradient-to-t from-sea-600 via-sea-400 to-sea-200 p-5 shadow-lg shadow-[#44A8B3]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711377/tailwind_f2ljdw.png" alt="tailwind icon"/>
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-fuchsia-600 via-fuchsia-400 to-fuchsia-200 p-5 shadow-lg shadow-[#00E0D7]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711376/physics_z7w373.png" alt="react icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-yellow-600 via-amber-400 to-yellow-200 p-5 shadow-lg shadow-[#00ACF1]">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711377/nodejs_1_bnplud.png" alt="node js icon" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-200 p-5 shadow-lg shadow-violet-600">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/express_qfcbun.png" alt="express icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 p-5 shadow-lg shadow-stone-600">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711376/mongodb_ccepmv.png" alt="mongodb icon"  />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-green-600 via-green-400 to-green-200 p-5 shadow-lg shadow-amber-600">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/firebase_p2d3ns.png" alt="firebase icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-teal-600 via-teal-400 to-teal-200 p-5 shadow-lg shadow-white">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/github_obfqcc.png" alt="github icon" className="h-full"  />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 p-5 shadow-lg shadow-red-400">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/gitbash_kdqjko.png" alt="gitbash icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 p-5 shadow-lg shadow-pink-600">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711375/jwt_zntlmu.png" alt="jwt icon" className="h-full my-auto" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-blue-200 p-5 shadow-lg shadow-slate-600">
        <div className="h-full">
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711377/vercel_xbwpnt.png" alt="vercel icon" className="h-full" />
        </div>
  </Tilt>
      <Tilt className="rounded-lg bg-gradient-to-t from-fan-600 via-fan-400 to-fan-200 p-5 shadow-lg shadow-rose-600">
        <div>
          <LazyLoadImage src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746711376/netlify_axg57y.png" alt="netlify icon"/>
        </div>
  </Tilt>
     
      </div>
    </div>
  );
};

export default Expertise;
