import { useNavigate } from "react-router-dom";
import slide1 from "../../../../../public/Slide1.png";
import slide2 from "../../../../../public/Slide2.jpg";
import slide3 from "../../../../../public/Slide3.jpg";
import slide4 from "../../../../../public/Slide4.jpg";
import slide5 from "../../../../../public/Slide5.png";
import { useState } from "react";

const Banner = () => {
  const sliderContent = [
    {
      id: "slide1",
      title: "Unlock the Beauty of German",
      description:
        "Unlock the beauty of the German language with FluentDeutsch. Start learning today and dive into a world of culture, communication, and opportunities!",
      buttonText: "Start Learning",
      imgSrc: slide1,
      bgFrom: "#ff88381c",
      bgTo: "#2f6469",
    },
    {
      id: "slide2",
      title: "Interactive Lessons and Fun Challenges",
      description:
        "Master German with engaging lessons, interactive exercises, and fun quizzes. Learn at your own pace while enjoying every step of the journey!",
      buttonText: "Start Learning",
      imgSrc: slide2,
      bgFrom: "#ff88381c",
      bgTo: "#c94730",
    },
    {
      id: "slide3",
      title: "Fluent in No Time!",
      description:
        "From beginner to fluent speaker, FluentDeutsch guides you every step of the way. Build confidence and fluency with real-world conversations and immersive content.",
      buttonText: "Start Learning",
      imgSrc: slide3,
      bgFrom: "#ff88381c",
      bgTo: "#fe6f2a",
    },
    {
      id: "slide4",
      title: "Learn Anytime, Anywhere",
      description:
        "With FluentDeutsch, you can access lessons on the go! Whether at home or on the move, take your German learning with you wherever you are.",
      buttonText: "Start Learning",
      imgSrc: slide4,
      bgFrom: "#ff88381c",
      bgTo: "#315364",
    },
    {
      id: "slide5",
      title: "Join a Global Community",
      description:
        "Connect with fellow learners from around the world! Practice German, share experiences, and grow together in a supportive learning environment.",
      buttonText: "Start Learning",
      imgSrc: slide5,
      bgFrom: "#ff88381c",
      bgTo: "#6d4c41",
    },
  ];
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderContent.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderContent.length - 1 ? 0 : prev + 1
    );
  };

  const handleLearningBtn = () => {
    navigate("/start-learning");
  };
  return (
    <section className="md:container mx-auto my-5">
      <div className="carousel w-full">
        {sliderContent.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <div
              className={`w-full md:p-10 md:px-16 lg:px-28 flex justify-center items-center bg-gradient-to-r from-[${slide.bgFrom}] to-[${slide.bgTo}]`}
            >
              <div className="text-center md:text-left flex flex-col items-center md:flex-row">
                <div className="flex justify-center items-center md:w-4/6 lg:w-3/6">
                  <img
                    src={slide.imgSrc}
                    alt={`Slide ${index + 1}`}
                    className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full"
                  />
                </div>
                <div className="w-4/6 mb-4 md:ml-4 lg:ml-6">
                  <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5">
                    {slide.title}
                  </h1>
                  <p className="font-normal text-base text-gray-800 mb-6">
                    {slide.description}
                  </p>
                  <button
                    onClick={handleLearningBtn}
                    className="btn bg-green-500 font-semibold text-lg text-white"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              <div className="absolute left-2 right-2 md:left-4 md:right-4 lg:left-14 lg:right-14 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                  onClick={goToPreviousSlide}
                  className="btn btn-circle text-lg bg-transparent border-none hover:bg-orange-100"
                >
                  ❮
                </button>
                <button
                  onClick={goToNextSlide}
                  className="btn btn-circle text-lg bg-transparent border-none hover:bg-orange-100"
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
