import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-black p-8 container">
      <h3 className="text-4xl font-semibold text-center mb-8">About Me</h3>
      <p className="text-justify px-8">
        I&apos;m a talented fresher web developer specializing in frontend
        technologies such as HTML, CSS, Tailwind, Bootstrap, JavaScript, and
        React. With a strong foundation in backend development using Node.js,
        Express.js, and MongoDB, Joshim possesses the skills to build dynamic
        and responsive web applications. Additionally, his expertise in Firebase
        authentication adds an extra layer of security to his projects.
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
                <td>joshimuddin.kushtia.bd@gmail.com</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>Kushtia, Bangladesh</td>
              </tr>
              <tr>
                <td>Skills: </td>
                <td>
                  MERN Stack Web Developer, Web Developer, React Developer
                </td>
              </tr>
              <tr>
                <td>Expertise: </td>
                <td>
                  React, JavaScript (comfortable), Node js, Express js, MongoDB,
                  Firebase
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
