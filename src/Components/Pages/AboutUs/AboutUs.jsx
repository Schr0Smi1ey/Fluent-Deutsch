import React, { useEffect } from "react";
import story from "../../../Assets/Story.png";
import Founder from "../../../Assets/Founder.jpg";
import Mission from "../../../Assets/Mission.png";
import { SiListmonk } from "react-icons/si";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Aos from "aos";
const AboutUs = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/start-learning");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 600 });
  });
  return (
    <div>
      <Helmet>
        <title>Fluent Deutsch | About Us</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center py-10">
        <header data-aos="fade-left" className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3">
            About Fluent <span className="text-green-500">Deutsch</span>
          </h1>
          <p className="w-[80%] mx-auto text-lg text-gray-500 mt-2">
            Learn German with FluentDeutsch - Your trusted companion on the
            journey to mastering the German language.
          </p>
        </header>

        <section
          data-aos="zoom-in"
          className="max-w-4xl mx-auto px-4 py-8 rounded-lg"
        >
          <div className="bg-gradient-to-r from-green-50 to-green-100 relative mb-5 py-12 px-6 md:px-12 lg:px-20 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-20">
              <img
                src={Mission}
                alt="German Culture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mb-10">
              <h2
                data-aos="fade-left"
                className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight"
              >
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="text-lg md:text-xl text-gray-800 leading-relaxed space-y-8">
              <p data-aos="fade-up">
                At Fluent{" "}
                <span className="text-green-600 font-semibold">Deutsch</span>,
                our mission is to make learning German easy, accessible, and
                enjoyable for everyone. Whether you are a beginner or looking to
                improve your skills, our platform offers a variety of tools,
                exercises, and resources to help you achieve fluency.
              </p>
              <p data-aos="fade-up">
                We believe in the power of immersive learning, providing
                real-world examples, interactive lessons, and native speaker
                content to enhance your learning experience. Together, let’s
                unlock the doors to fluency and explore the beauty of the German
                language.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="relative bg-gradient-to-br from-green-50 to-green-100 py-12 px-6 md:px-16 lg:px-24 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <img
                src={story}
                alt="German Culture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative text-center md:text-left">
              <div className="mb-8">
                <h2
                  data-aos="fade-left"
                  className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4"
                >
                  Our Story
                </h2>
                <div className="w-20 h-2 bg-green-500 mx-auto md:mx-0"></div>
              </div>
              <div className="space-y-6 text-gray-800 text-lg md:text-xl">
                <p data-aos="fade-up">
                  FluentDeutsch was born out of a shared passion for languages,
                  education, and technology. Our founders, a group of language
                  enthusiasts and educators, set out with a mission to break the
                  barriers to language learning by combining innovative
                  technology with immersive experiences.
                </p>
                <p data-aos="fade-up">
                  The journey began with a simple idea: to create a platform
                  that mirrors how we naturally learn languages – through
                  stories, culture, and interaction. FluentDeutsch isn’t just a
                  learning platform; it’s a vibrant gateway to the heart of the
                  German-speaking world.
                </p>
              </div>
              <div data-aos="fade-up" className="mt-8">
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-md transition duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="bg-white p-10 rounded-3xl shadow-2xl max-w-6xl mx-auto my-16"
          >
            <h2
              data-aos="fade-left"
              className="text-4xl font-extrabold mb-12 text-center leading-tight"
            >
              Why Choose <span className="text-green-500">FluentDeutsch</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div
                data-aos="fade-down"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Interactive lessons that cater to all skill levels
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Real-world language usage with practical exercises
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Native speaker content to improve listening and comprehension
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Customizable learning paths and progress tracking
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Friendly and supportive community of learners
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-start gap-6 p-6 bg-green-50 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl text-green-600">
                  <SiListmonk />
                </div>
                <p className="text-lg text-gray-700">
                  Gamified quizzes to make learning fun and engaging
                </p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="py-16 bg-gray-50">
            <div
              data-aos="fade-down"
              className="max-w-6xl mx-auto px-6 text-center md:text-left"
            >
              <h2 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">
                Meet the Founder
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div
                  data-aos="fade-right"
                  className="w-full md:w-1/3 bg-gradient-to-r from-green-400 to-green-300 p-4 rounded-xl shadow-lg"
                >
                  <img
                    src={Founder}
                    alt="Founder"
                    className="w-56 h-56 rounded-full mx-auto mb-6 border-8 border-white shadow-xl"
                  />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3
                    data-aos="fade-left"
                    className="text-3xl font-semibold text-gray-800 mb-4"
                  >
                    Sarafat Karim
                  </h3>
                  <p
                    data-aos="fade-left"
                    className="text-lg text-gray-600 italic mb-4"
                  >
                    Founder & CEO
                  </p>
                  <p
                    data-aos="fade-left"
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                  >
                    Sarafat Karim is the visionary behind FluentDeutsch,
                    dedicated to making the German language accessible and
                    enjoyable for learners around the world. With a passion for
                    education and a commitment to excellence, Sarafat is guiding
                    the team to shape the future of language learning.
                  </p>

                  <div className="flex justify-center md:justify-start space-x-8 mt-6">
                    <Link
                      data-aos="fade-up"
                      to="https://www.facebook.com/radiant.remel.5/"
                      target="_blank"
                      className="text-gray-700 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaFacebook className="text-3xl" />
                    </Link>

                    <Link
                      data-aos="fade-up"
                      to={"https://www.linkedin.com/in/sarafat-karim/"}
                      target="_blank"
                      className="text-gray-700 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
                    >
                      <IoLogoLinkedin className="text-3xl" />
                    </Link>

                    <Link
                      data-aos="fade-up"
                      to="https://x.com/sarafat_karim"
                      target="_blank"
                      className="text-gray-700 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaTwitter className="text-3xl" />
                    </Link>

                    <Link
                      data-aos="fade-up"
                      to={"https://github.com/Schr0Smi1ey"}
                      target="_blank"
                      className="text-gray-700 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaGithubSquare className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            data-aos="zoom-in"
            className="mt-16 bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-16"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h2
                  data-aos="fade-right"
                  className="text-4xl font-extrabold text-green-500 leading-tight mb-6"
                >
                  Start Your German Journey Today
                </h2>
                <p
                  data-aos="fade-right"
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                >
                  FluentDeutsch is your gateway to mastering the German
                  language. Dive into interactive lessons, engaging exercises,
                  and practical tips to speak with confidence.
                </p>
                <button
                  data-aos="fade-up"
                  onClick={handleGetStarted}
                  className="inline-block font-semibold bg-green-500 text-white py-3 px-8 text-lg rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-green-600 focus:ring-4 focus:ring-green-300 shadow-lg"
                >
                  Get Started
                </button>
              </div>

              <div
                data-aos="fade-left"
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  <div
                    data-aos="zoom-in"
                    className="w-full px-4 h-64 md:h-80 lg:h-96 bg-gradient-to-br from-green-200 to-green-500 rounded-lg shadow-lg flex items-center justify-center"
                  >
                    <span
                      data-aos="fade-up"
                      className="text-white text-2xl font-bold"
                    >
                      📘 Learn German
                    </span>
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-100 opacity-50 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      ;
    </div>
  );
};

export default AboutUs;
