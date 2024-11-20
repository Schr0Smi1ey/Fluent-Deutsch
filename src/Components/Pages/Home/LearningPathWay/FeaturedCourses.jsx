const LearningPathway = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-green-500 text-center mb-10">
          Your Learning Pathway
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Follow our structured approach to mastering German, step by step.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Basics & Essentials
            </h3>
            <p className="text-gray-600">
              Learn the fundamentals of German, including essential vocabulary
              and grammar rules.
            </p>
          </div>
          {/* Step 2 */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Conversational Fluency
            </h3>
            <p className="text-gray-600">
              Build confidence in speaking through dialogues and real-life
              scenarios.
            </p>
          </div>
          {/* Step 3 */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md border-t-4 border-green-500">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Advanced Skills
            </h3>
            <p className="text-gray-600">
              Master advanced grammar, expand your vocabulary, and improve
              listening comprehension.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="btn bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition duration-200">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPathway;
