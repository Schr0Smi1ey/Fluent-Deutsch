import React, { useEffect } from "react";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";

const Success = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className="container mx-auto">
      <section
        id="success"
        className="my-16 text-center bg-gradient-to-r from-green-50 via-white to-green-50 py-12 px-8 rounded-3xl shadow-xl"
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-12 tracking-tight">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            data-aos="zoom-in"
            className="bg-white shadow-lg hover:bg-gradient-to-t hover:from-green-200 p-8 rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-6xl font-extrabold text-green-500">
              <CountUp end={15000} duration={2.5} />
            </h3>
            <p className="text-xl font-medium text-gray-700 mt-4">Users</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white shadow-lg hover:bg-gradient-to-t hover:from-green-200 p-8 rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-6xl font-extrabold text-green-500">
              <CountUp end={1200} duration={2.5} />
            </h3>
            <p className="text-xl font-medium text-gray-700 mt-4">Lessons</p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white shadow-lg hover:bg-gradient-to-t hover:from-green-200 p-8 rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-6xl font-extrabold text-green-500">
              <CountUp end={8000} duration={2.5} />
            </h3>
            <p className="text-xl font-medium text-gray-700 mt-4">
              Words Learned
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className="bg-white shadow-lg hover:bg-gradient-to-t hover:from-green-200 p-8 rounded-xl transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-6xl font-extrabold text-green-500">
              <CountUp end={300} duration={2.5} />
            </h3>
            <p className="text-xl font-medium text-gray-700 mt-4">Tutorials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
