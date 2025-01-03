import { useLoaderData, useNavigate } from "react-router-dom";
import VocabularyCard from "../../Cards/VocabularyCard";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const difficultyColors = {
  easy: "bg-green-100 border-green-400 hover:bg-green-200",
  medium: "bg-yellow-100 border-yellow-400 hover:bg-yellow-200",
  hard: "bg-red-100 border-red-400 hover:bg-red-200",
};

const VocabularyCards = () => {
  const vocabularies = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  const [filterVocab, setFilterVocab] = useState(vocabularies);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 500 });
  }, []);

  if (!user || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RingLoader color="#22c55d" size={150} />
      </div>
    );
  }
  const handleBackToLesson = () => {
    navigate("/start-learning");
  };

  const handleFilter = (difficulty) => {
    const filteredVocab = vocabularies.filter(
      (vocab) => vocab.difficulty === difficulty
    );
    setFilterVocab(filteredVocab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>
          Fluent Deutsch |{" "}
          {filterVocab.length > 0
            ? `Lesson ${filterVocab[0].lesson_no}`
            : "Loading..."}
        </title>
      </Helmet>

      <div className="text-center mb-10">
        <h1
          data-aos="fade-right"
          className="font-extrabold text-4xl md:text-5xl text-gray-800 mb-6"
        >
          Master German Vocabulary
        </h1>
        <p
          data-aos="fade-right"
          className="text-gray-600 text-lg md:text-xl mx-auto w-[90%] md:w-2/3 leading-relaxed mb-4"
        >
          Kickstart your journey to fluency with FluentDeutsch! Explore words
          based on difficulty levels, learn their usage, and strengthen your
          communication in German. Expand your world today—one word at a time.
        </p>

        <h1 data-aos="fade-right" className="text-2xl font-bold">
          Welcome to Lesson{" "}
          <span className="text-green-500 font-extrabold">
            {filterVocab[0].lesson_no}
          </span>
        </h1>
        <div data-aos="fade-up" className="flex justify-center gap-6 mt-10">
          <div
            onClick={() => handleFilter("easy")}
            className={`w-20 h-20 md:w-24 md:h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.easy} border-4 transition-all duration-300 ease-in-out hover:scale-105`}
          >
            <p className="text-xl font-semibold text-green-600">Easy</p>
          </div>
          <div
            onClick={() => handleFilter("medium")}
            className={`w-20 h-20 md:w-24 md:h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.medium} border-4 transition-all duration-300 ease-in-out hover:scale-105`}
          >
            <p className="text-xl font-semibold text-yellow-600">Medium</p>
          </div>
          <div
            onClick={() => handleFilter("hard")}
            className={`w-20 h-20 md:w-24 md:h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.hard} border-4 transition-all duration-300 ease-in-out hover:scale-105`}
          >
            <p className="text-xl font-semibold text-red-600">Hard</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filterVocab.map((vocab) => (
          <VocabularyCard key={vocab.id} vocab={vocab}></VocabularyCard>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleBackToLesson}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Back To Lesson
        </button>
      </div>
    </div>
  );
};

export default VocabularyCards;
