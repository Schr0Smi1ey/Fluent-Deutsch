import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

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
    {
      user ? navigate(`/lesson/${id}`) : navigate("/login");
    }
  };
  const handleViewMore = () => {
    navigate("/tutorials");
  };
  return (
    <div className="container mx-auto">
      <div className="bg-green-500 relative py-5">
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl mb-3">Start Learning German</h1>
          <p className="text-gray-300 w-[90%] md:w-1/2 mx-auto">
            Begin your journey to mastering German with FluentDeutsch. Explore
            engaging lessons, build your vocabulary, and unlock the beauty of
            communication in a new language. Start today and open doors to new
            opportunities!
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        {lessons.map((lesson) => {
          return (
            <div
              key={lesson.lesson_id}
              className="bg-white flex flex-col justify-center items-center p-5 rounded-xl shadow-lg my-5"
            >
              <img
                src={lesson.lesson_img}
                alt=""
                className="w-[300px] h-3/4 rounded-2xl mb-3"
              />
              <h1 className="font-bold text-2xl">{lesson.title}</h1>
              <p className="text-[#09080F99] flex-grow">{lesson.description}</p>
              <button
                onClick={() => handleLearningBtn(lesson.lesson_id)}
                className="px-4 py-2 text-black border-2 border-green-500 hover:bg-green-500 hover:text-white font-bold text-lg rounded-xl mt-3"
              >
                Start Learning
              </button>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-fit">
        <div className="w-full mb-5">
          <iframe
            className="w-[300px] md:w-[500px] lg:w-[600px] h-[150px] md:h-[250px] lg:h-[300px] rounded-lg"
            src="https://www.youtube.com/embed/RuGmc662HDg?si=BorQOlZ52Xhp_mqu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex text-center">
          <button
            onClick={handleViewMore}
            className="w-full p-2 text-xl font-semibold bg-green-500 text-white rounded-lg"
          >
            View More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
