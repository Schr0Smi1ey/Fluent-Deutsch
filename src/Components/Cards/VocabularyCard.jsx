import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const difficultyColors = {
  easy: "bg-green-100 border-green-400",
  medium: "bg-yellow-100 border-yellow-400",
  hard: "bg-red-100 border-red-400",
};
const VocabularyCard = ({ vocab }) => {
  const openModal = () => {
    document.getElementById("my_modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal").close();
  };
  const pronounceWord = (vocab) => {
    const utterance = new SpeechSynthesisUtterance(vocab.vocab.word);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div>
      <div
        key={vocab.id}
        className={`border rounded-lg shadow-lg p-5 ${
          difficultyColors[vocab.difficulty]
        }`}
      >
        <h2 className="text-xl font-bold mb-2">{vocab.word}</h2>
        <p className="text-sm italic mb-2">
          Pronunciation: {vocab.pronunciation}
        </p>
        <p className="text-lg mb-2">Meaning: {vocab.meaning}</p>
        <p className="text-sm mb-2">Part of Speech: {vocab.part_of_speech}</p>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => openModal(vocab)}
            className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600"
          >
            When to Say
          </button>
          <button
            onClick={() => pronounceWord({ vocab })}
            className="p-2 bg-blue-500 font-semibold text-white rounded-lg"
          >
            Pronounce
          </button>
        </div>
      </div>
      {/* Modal */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box w-80 max-w-4xl">
          <h3 className="font-bold text-lg">{vocab.word}</h3>
          <p className="py-2">
            <strong>Meaning:</strong> {vocab.meaning}
          </p>
          <p className="py-2">
            <strong>When to Say:</strong> {vocab.when_to_say}
          </p>
          <p className="py-2">
            <strong>Example:</strong> {vocab.example}
          </p>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="py-2 rounded-lg font-bold text-lg w-full bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VocabularyCard;
