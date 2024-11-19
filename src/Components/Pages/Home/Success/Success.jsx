import React from "react";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div className="container mx-auto">
      <section
        id="success"
        className="my-10 text-center shadow-xl p-10 rounded-lg"
      >
        <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={15000} duration={2.5} />
            </h3>
            <p className="text-lg font-medium text-gray-600 mt-2">Users</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={1200} duration={2.5} />
            </h3>
            <p className="text-lg font-medium text-gray-600 mt-2">Lessons</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={8000} duration={2.5} />
            </h3>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Words Learned
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-green-500">
              <CountUp end={300} duration={2.5} />
            </h3>
            <p className="text-lg font-medium text-gray-600 mt-2">Tutorials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
