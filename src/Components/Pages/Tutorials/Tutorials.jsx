import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CiPlay1 } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title:
        "A1 - Lesson 1 | Begrüßungen | Greetings | German for beginners | Learn German",
      videoId: "RuGmc662HDg",
    },
    {
      id: 2,
      title:
        " A1 - Lesson 2 | Common Phrases | German for beginners | Learn German",
      videoId: "S8ukFF6SdGk",
    },
    {
      id: 3,
      title:
        "A1 - Lesson 3 | Numbers 0-20 | Zahlen | German for beginners | Learn German",
      videoId: "d54ioeKA-jc",
    },
    {
      id: 4,
      title:
        "A1 - Lesson 4 | Numbers 21-100 | Zahlen | German for beginners | Learn German",
      videoId: "IaerX0Y6wmE",
    },
    {
      id: 5,
      title:
        "A1 - Lesson 5 | Alphabets | das Alphabet | German for beginners | Learn German",
      videoId: "HCytWm3RC9g",
    },
    {
      id: 6,
      title:
        " A1 - Lesson 6 | sich vorstellen | introducing yourself in German | Learn German",
      videoId: "RElBVZ1Wke0",
    },
    {
      id: 7,
      title:
        "A1 - Lesson 7 | jemanden kennenlernen | Getting to know someone | Learn German",
      videoId: "KDkQOXcEr4o",
    },
    {
      id: 8,
      title: "A1 - Lesson 8 | Wie geht's? | How are you? | Learn German",
      videoId: "iWyOKwIf_94",
    },
    {
      id: 9,
      title:
        "A1 - Lesson 9 | Satzstruktur | Sentence Structure Part 1 | Learn German",
      videoId: "n6db5VSUm2o",
    },
    {
      id: 10,
      title:
        "A1 - Lesson 10 | Satzstruktur | Sentence Structure Part 2 | Learn German",
      videoId: "ZNc0y2Dy5N8",
    },
    {
      id: 11,
      title:
        "A1 - Lesson 11 | Personalpronomen | Personal pronouns ich du wir | Learn German",
      videoId: "hY4lHC6YZuQ",
    },
    {
      id: 12,
      title:
        "A1 - Lesson 12 | haben und sein | Verb conjugation | Learn German",
      videoId: "xy4a1c7W7k0",
    },
  ];
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { user, loading } = useContext(AuthContext);
  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    document.getElementById("video_modal").showModal();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const closeModal = () => {
    document.getElementById("video_modal").close();
    setSelectedVideo(null);
  };
  const handleLearnVocab = () => {
    navigate("/start-learning");
  };
  if (!user || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <RingLoader color="#22c55d" size={150} />
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Fluent Deutsch | Tutorials</title>
      </Helmet>
      <div className="relative py-5">
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl mb-3">
            Learn German with Engaging Tutorials
          </h1>
          <p className="text-gray-500 w-[90%] md:w-1/2 mx-auto">
            Explore a curated collection of video tutorials to master German at
            your own pace. From grammar tips and vocabulary building to
            pronunciation practice, these engaging YouTube videos are perfect
            for learners of all levels. Start watching and take your German to
            the next level!
          </p>
        </div>

        <div className="w-fit mx-auto">
          <button
            onClick={handleLearnVocab}
            className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold text-xl"
          >
            Learn Vocabularies
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 p-5 lg:grid-cols-3 gap-5">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white p-5 my-5 shadow-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100"
          >
            <div
              className="cursor-pointer relative"
              onClick={() => openModal(tutorial.videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${tutorial.videoId}/0.jpg`}
                alt="Video thumbnail"
                className="w-[300px] md:w-[350px] lg:w-[450px] h-[250px] lg:h-[300px] rounded-2xl object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
                <span className="flex items-center gap-2 text-green-500 text-2xl font-bold">
                  <CiPlay1 className="text-green-500" /> Play
                </span>
              </div>
            </div>
            <h1 className="font-bold text-xl mt-3">{tutorial.title}</h1>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog
        id="video_modal"
        className="modal modal-middle"
        onClose={closeModal}
      >
        <div className="modal-box relative">
          {/* Close Button */}
          <button
            className="absolute z-10 bg-black top-2 right-2 text-white p-2 rounded-full hover:bg-red-700"
            onClick={closeModal}
          >
            <ImCross className="text-red-500" />
          </button>

          {/* Video Iframe */}
          {selectedVideo ? (
            <iframe
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Loading video...</p>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Tutorials;
