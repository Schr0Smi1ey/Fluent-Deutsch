import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700">About Us</h1>
          <p className="text-lg text-gray-700 mt-2">
            Learn German with FluentDeutsch - Your trusted companion on the
            journey to mastering the German language.
          </p>
        </header>

        <section className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At FluentDeutsch, our mission is to make learning German easy,
            accessible, and enjoyable for everyone. Whether you are a beginner
            or looking to improve your skills, our platform offers a variety of
            tools, exercises, and resources to help you achieve fluency.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We believe in the power of immersive learning, providing real-world
            examples, interactive lessons, and native speaker content to enhance
            your learning experience.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            FluentDeutsch was created by a passionate team of language
            enthusiasts, educators, and developers. Our team is dedicated to
            bringing the best language learning experience to students across
            the globe.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The idea for FluentDeutsch originated from our own experiences
            learning languages and the challenges we faced in finding effective,
            engaging, and flexible learning resources. That's why we decided to
            build a platform that addresses these challenges and helps learners
            thrive.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose FluentDeutsch?
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-4">
            <li>Interactive lessons that cater to all skill levels</li>
            <li>Real-world language usage with practical exercises</li>
            <li>
              Native speaker content to improve listening and comprehension
            </li>
            <li>Customizable learning paths and progress tracking</li>
            <li>Friendly and supportive community of learners</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Meet the Founder
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs text-center bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Anna Müller
              </h3>
              <p className="text-lg text-gray-600">
                Co-founder & Language Expert
              </p>
            </div>
          </div>

          <section className="mt-12 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Join Us on Your Language Learning Journey
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Start your journey with FluentDeutsch today and immerse yourself
              in the German language with engaging lessons and practical
              exercises.
            </p>
            <a
              href="/get-started"
              className="text-white bg-blue-700 hover:bg-blue-600 py-2 px-6 rounded-lg text-lg"
            >
              Get Started
            </a>
          </section>
        </section>
      </div>
      ;
    </div>
  );
};

export default AboutUs;
