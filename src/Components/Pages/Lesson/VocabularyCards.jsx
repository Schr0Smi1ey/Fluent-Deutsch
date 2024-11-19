import { useLoaderData, useNavigate } from "react-router-dom";
import VocabularyCard from "../../Cards/VocabularyCard";
import { useEffect, useState } from "react";

const difficultyColors = {
  easy: "bg-green-100 border-green-400",
  medium: "bg-yellow-100 border-yellow-400",
  hard: "bg-red-100 border-red-400",
};
const VocabularyCards = () => {
  const vocabularies = useLoaderData();
  const [filterVocab, setFilterVocab] = useState(vocabularies);
  const navigate = useNavigate();
  const handleBackToLesson = () => {
    navigate("/start-learning");
  };
  const handleFilter = (dificulty) => {
    const filteredVocab = vocabularies.filter(
      (vocab) => vocab.difficulty === dificulty
    );
    setFilterVocab(filteredVocab);
  };
  return (
    <div className="container mx-auto p-5">
      <div className="text-center mb-8">
        <h1 className="font-extrabold text-4xl mb-5 text-gray-800">
          Master German Vocabulary
        </h1>
        <p className="text-gray-500 w-[90%] md:w-2/3 mx-auto text-lg leading-relaxed">
          Kickstart your journey to fluency with FluentDeutsch! Explore words
          based on difficulty levels, learn their usage, and strengthen your
          communication in German. Expand your world today—one word at a time.
        </p>
        <div className="flex justify-center gap-5 mt-6">
          <div
            onClick={() => handleFilter("easy")}
            className={`w-24 h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.easy} border-4`}
          >
            <p className="text-lg font-semibold text-green-600">Easy</p>
          </div>
          <div
            onClick={() => handleFilter("medium")}
            className={`w-24 h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.medium} border-4`}
          >
            <p className="text-lg font-semibold text-yellow-600">Medium</p>
          </div>
          <div
            onClick={() => handleFilter("hard")}
            className={`w-24 h-24 cursor-pointer rounded-full flex items-center justify-center ${difficultyColors.hard} border-4`}
          >
            <p className="text-lg font-semibold text-red-600">Hard</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
        {filterVocab.map((vocab) => (
          <VocabularyCard key={vocab.id} vocab={vocab}></VocabularyCard>
        ))}
      </div>
      <div className="w-fit mx-auto">
        <button
          onClick={handleBackToLesson}
          className="p-2 px-4 bg-green-500 rounded-xl font-semibold text-xl"
        >
          Back To Lesson
        </button>
      </div>
    </div>
  );
};

export default VocabularyCards;
