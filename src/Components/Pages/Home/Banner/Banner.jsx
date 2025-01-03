import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthContext/AuthProvider";
import slide1 from "../../../../Assets/Slide1.png";
import slide2 from "../../../../Assets/Slide2.jpg";
import slide3 from "../../../../Assets/Slide3.jpg";
import slide4 from "../../../../Assets/Slide4.jpg";
import slide5 from "../../../../Assets/Slide5.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const sliderContent = [
    {
      id: "slide1",
      title: "Unlock the Beauty of German",
      description:
        "Unlock the beauty of the German language with FluentDeutsch. Start learning today and dive into a world of culture, communication, and opportunities!",
      buttonText: "Start Learning",
      imgSrc: slide1,
    },
    {
      id: "slide2",
      title: "Interactive Lessons and Fun Challenges",
      description:
        "Master German with engaging lessons, interactive exercises, and fun quizzes. Learn at your own pace while enjoying every step of the journey!",
      buttonText: "Start Learning",
      imgSrc: slide2,
    },
    {
      id: "slide3",
      title: "Fluent in No Time!",
      description:
        "From beginner to fluent speaker, FluentDeutsch guides you every step of the way. Build confidence and fluency with real-world conversations and immersive content.",
      buttonText: "Start Learning",
      imgSrc: slide3,
    },
    {
      id: "slide4",
      title: "Learn Anytime, Anywhere",
      description:
        "With FluentDeutsch, you can access lessons on the go! Whether at home or on the move, take your German learning with you wherever you are.",
      buttonText: "Start Learning",
      imgSrc: slide4,
    },
    {
      id: "slide5",
      title: "Join a Global Community",
      description:
        "Connect with fellow learners from around the world! Practice German, share experiences, and grow together in a supportive learning environment.",
      buttonText: "Start Learning",
      imgSrc: slide5,
    },
  ];
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderContent.length) % sliderContent.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
  };

  const handleLearningBtn = () => {
    navigate("/start-learning");
  };
  const { id, title, description, buttonText, imgSrc } =
    sliderContent[currentSlide];
  return (
    <section className="md:container mx-auto my-5">
      {user && (
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center font-bold text-green-500 text-2xl mb-4"
        >
          Welcome , {user.displayName}
        </h1>
      )}
      <div className="carousel w-full">
        <div
          key={id}
          className={`carousel-item relative w-full`}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div
            className={`w-full md:p-10 md:px-16 lg:px-28 flex justify-center items-center`}
          >
            <div className="text-center md:text-left flex flex-col items-center md:flex-row">
              <div className="flex justify-center items-center md:w-4/6 lg:w-3/6">
                <img
                  src={imgSrc}
                  alt={`Slide ${id}`}
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full hover:scale-105 border-4 border-green-400 p-2"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                />
              </div>
              <div className="w-4/6 mb-4 md:ml-4 lg:ml-6">
                <h1
                  className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5"
                  data-aos="fade-left"
                >
                  {title}
                </h1>
                <p
                  className="font-normal text-base text-gray-800 mb-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  {description}
                </p>
                <button
                  onClick={handleLearningBtn}
                  className="btn bg-green-500 hover:bg-white hover:text-black hover:border-2 hover:border-green-500 font-semibold text-lg text-white"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  {buttonText}
                </button>
              </div>
            </div>
            <div
              key={id}
              className="absolute left-2 right-2 md:left-4 md:right-4 lg:left-14 lg:right-14 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <button
                onClick={goToPreviousSlide}
                className="btn btn-circle bg-white text-lg border-none hover:bg-white"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                ❮
              </button>
              <button
                onClick={goToNextSlide}
                className="btn btn-circle bg-white text-lg border-none hover:bg-white"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
