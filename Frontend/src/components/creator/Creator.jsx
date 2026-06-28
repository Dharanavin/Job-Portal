// import React from "react";
import Navbar from "../components_lite/Navbar";
import amreshsir from "./Dhara Parmar.jpg"; // Import the local image
import ankit from "./person4.jpg";
import ritik from "./person4.jpg";
import gaurav from "./person4.jpg";

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={amreshsir}
              alt="photo"
              className="h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Er. Dhara Parmar
            </h2>
            <p className="text-gray-600 mb-2">
              {" "}
              Er. Dhara Parmar completed her{" "}
              <strong>
                B.E in Computer Science and Engineering (CSE)
              </strong>{" "}
              from <strong>Gujarat Technological University</strong>, in{" "}
              <strong>2025</strong>.
            </p>
            <p className="text-gray-600 mb-2">
              She was later selected as an <strong>Assistant Professor</strong>{" "}
              in the{" "}
              <strong>Computer Science and Engineering (CSE) Department</strong>{" "}
              at <strong>Surat,Gujarat</strong>. She has been teaching{" "}
              <strong>Data Structures and Algorithms (DSA)</strong> and{" "}
              <strong>Web Development</strong> to students for the past 2 years.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300 my-6" />

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Developers and Designers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 */}
          <a
            href="https://ankitpathak.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <img
              src={ankit}
              alt="photo"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Disha Patel
            </h3>
            <p className="text-gray-600 text-sm">
              Registration No: 21110125035
            </p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 */}
          <a href="#" className="block text-center">
            <img
              src={ritik}
              alt="photo"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Roshni Yadav
            </h3>
            <p className="text-gray-600 text-sm">
              Registration No: 21110125043
            </p>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </a>
          {/* Developer 3  */}
          <a href="#" className="block text-center">
            <img
              src={gaurav}
              alt="photo"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">
              Gita Solanki
            </h3>
            <p className="text-gray-600 text-sm">
              Registration No: 21110125023
            </p>
            <p className="text-gray-600 text-sm">Research</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Creator;
