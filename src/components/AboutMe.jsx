import React from "react";

const AboutMe = () => {
  return (
    <div className="md:p-8 p-2 container">
      <h3 className="text-4xl font-semibold text-center mb-5">About Me</h3>
      <hr className="border-2 border-blue-600 w-3/12 mx-auto" data-aos="fade-left"/>
      <p className="text-justify md:px-8 mt-3 px-2">
        I&apos;m a passionate fresher web developer specializing in frontend
        technologies. I have been exploring web technologies for 2 years. I have completed the &apos;complete web development course&apos; from programing hero. It took six months to finish the course. During the course, I went through several topics on JavaScript in depth. I learnt react, created some projects with react. I worked with Node, express, and MongoDB. I want to expand my adaptability to updated web technologies and libraries.
      </p>
      <div className="text-black">
        <div className="overflow-x-auto p-8 text-xl">
          <table className="table table-zebra w-full">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Full Name :</td>
                <td>Md. Joshim Uddin</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Email: </td>
                <td>joshimuddin1831@gmail.com</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>Kushtia, Bangladesh</td>
              </tr>
              <tr>
                <td>Skills: </td>
                <td>
                  HTML, CSS, JavaScript, React, Bootstrap, Tailwind, Node js, Express js, MongoDB, Firebase, JWT
                </td>
              </tr>
              <tr>
                <td>Specialization: </td>
                <td>
                  Front End Development
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
