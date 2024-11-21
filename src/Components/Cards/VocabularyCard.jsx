const VocabularyCard = ({ vocab }) => {
  const difficultyColors = {
    easy: "bg-gradient-to-r from-green-200 to-green-100 border-green-400",
    medium: "bg-gradient-to-r from-yellow-200 to-yellow-100 border-yellow-400",
    hard: "bg-gradient-to-r from-red-200 to-red-100 border-red-400",
  };
  const hoverDifficultyColors = {
    easy: "hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:border-green-400",
    medium:
      "hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-200 hover:border-yellow-400",
    hard: "hover:bg-gradient-to-r hover:from-red-300 hover:to-red-200 hover:border-red-400",
  };
  const openModal = () => {
    const modal = document.getElementById("my_modal");
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal");
    modal.close();
  };

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="mb-8">
      <div
        key={vocab.id}
        className={`border rounded-lg shadow-lg p-5 ${
          difficultyColors[vocab.difficulty]
        } transition-all duration-300 transform hover:scale-105 ease-in-out ${
          hoverDifficultyColors[vocab.difficulty]
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 leading-tight">
          {vocab.word}
        </h2>

        <p className="text-sm italic mb-3 text-gray-700">
          Pronunciation:{" "}
          <span className="font-medium text-gray-900">
            {vocab.pronunciation}
          </span>
        </p>

        <p className="text-lg mb-3 text-gray-800 leading-relaxed">
          <strong>Meaning:</strong> {vocab.meaning}
        </p>

        <p className="text-sm mb-4 text-gray-600">
          <strong>Part of Speech:</strong> {vocab.part_of_speech}
        </p>

        <div className="flex gap-4 items-center">
          <button
            onClick={openModal}
            className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium text-sm transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            When to Say
          </button>
          <button
            onClick={() => pronounceWord(vocab.word)}
            className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium text-sm transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Pronounce
          </button>
        </div>
      </div>

      <dialog
        id="my_modal"
        className="modal transition-all duration-500 ease-in-out"
      >
        <div className="modal-box w-80 max-w-lg">
          <h3 className="font-bold text-lg text-gray-900">{vocab.word}</h3>
          <p className="py-2 text-gray-700">
            <strong>Meaning:</strong> {vocab.meaning}
          </p>
          <p className="py-2 text-gray-700">
            <strong>When to Say:</strong> {vocab.when_to_say}
          </p>
          <p className="py-2 text-gray-700">
            <strong>Example:</strong> {vocab.example}
          </p>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="py-2 rounded-lg font-bold text-lg w-full bg-red-500 hover:bg-red-600 text-white"
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
