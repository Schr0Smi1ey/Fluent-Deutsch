import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import { Helmet } from "react-helmet";

const StartLearning = () => {
  const { user } = useContext(AuthContext);
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/Data/Lessons.json")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data);
      });
  }, []);
  const handleLearningBtn = (id) => {
    console.log("id : ", id);
    navigate(`/lesson/${id}`);
  };
  const handleViewMore = () => {
    navigate("/tutorials");
  };
  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>Fluent Deutsch | Start Learning</title>
      </Helmet>
      <div className="relative py-3 md:py-5 lg:py-8">
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl text-gray-800 mb-3">
            Expand Your German Vocabulary
          </h1>
          <p className="text-gray-600 w-[90%] md:w-1/2 mx-auto text-lg">
            Dive into various categories of German vocabulary, designed to help
            you communicate effectively in different situations. Whether you're
            dining out, visiting the doctor, or talking about pets, we've got
            you covered. Explore our curated vocabulary sets and start speaking
            confidently today!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
        {lessons.map((lesson) => {
          return (
            <div
              key={lesson.lesson_id}
              className="bg-white flex flex-col justify-center items-center p-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100"
            >
              <img
                src={lesson.lesson_img}
                alt={lesson.title}
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-2xl mb-6 transition-transform duration-500 transform hover:scale-110"
              />
              <h1 className="font-bold text-xl md:text-2xl text-gray-800 mb-2">
                {lesson.title}
              </h1>
              <p className="text-[#09080F99] flex-grow text-base text-center md:text-left mb-4">
                {lesson.description}
              </p>
              <button
                onClick={() => handleLearningBtn(lesson.lesson_id)}
                className="px-6 py-2 text-black border-2 border-green-500 hover:bg-green-500 hover:text-white font-bold text-lg rounded-xl mt-3 transition-all duration-200 ease-in-out"
              >
                Start Learning
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-auto w-fit py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-green-50 rounded-xl shadow-lg">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">
            Learn German Basics
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed md:w-2/3 lg:w-1/2 mx-auto">
            Watch this beginner-friendly tutorial to kickstart your German
            learning journey. Learn essential phrases, pronunciation tips, and
            foundational grammar concepts to build a strong base.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mb-8">
          <div className="relative group w-fit rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <iframe
              className="w-[320px] md:w-[560px] lg:w-[720px] h-[180px] md:h-[315px] lg:h-[405px] rounded-xl"
              src="https://www.youtube.com/embed/RuGmc662HDg?si=BorQOlZ52Xhp_mqu"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="w-full md:w-1/2 lg:w-1/3 px-6 py-3 text-xl font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View More Tutorials!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
