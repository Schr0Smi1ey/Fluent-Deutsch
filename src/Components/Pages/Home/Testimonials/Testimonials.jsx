import upArrow from "../../../../Assets/up-arrow.png";
import downArrow from "../../../../Assets/down-arrow.png";
import Commenter1 from "../../../../Assets/commenter1.jpg";
import Commenter2 from "../../../../Assets/commenter2.png";
import Commenter3 from "../../../../Assets/commenter3.png";
import Commenter4 from "../../../../Assets/commenter4.png";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I am absolutely thrilled with my experience on FluentDeutsch! The lessons are engaging, and the interactive exercises make learning German so much fun. Highly recommend it to anyone looking to improve their language skills!",
      name: "Emily Smith",
      location: "Toronto, Canada",
      image: Commenter1,
    },
    {
      id: 2,
      text: "Learning German with FluentDeutsch has been fantastic! The personalized study plans and practical vocabulary lessons have made a huge difference. It’s the best platform I’ve tried so far!",
      name: "Carlos Mendes",
      location: "São Paulo, Brazil",
      image: Commenter2,
    },
    {
      id: 3,
      text: "FluentDeutsch has been a game-changer for me. The grammar explanations are clear and easy to follow, and the speaking exercises have boosted my confidence in real-life conversations. Amazing service!",
      name: "Mohammed Al-Mansoori",
      location: "Dubai, UAE",
      image: Commenter3,
    },
    {
      id: 4,
      text: "An incredible learning platform! FluentDeutsch helped me prepare for my German language exam with their tailored exercises and practice tests. I couldn’t have done it without them!",
      name: "Liam O'Reilly",
      location: "Dublin, Ireland",
      image: Commenter4,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const { id, text, name, location, image } = testimonials[currentSlide];
  return (
    <div>
      <section className="md:container mx-auto my-10 lg:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div data-aos="fade-up" className="font-poppins  p-10 space-y-5">
            <h2 className="font-semibold text-green-600 text-xl lg:text-lg">
              Testimonials
            </h2>
            <h1 className="font-volkhov font-bold text-4xl md:text-5xl text-black leading-[65px]">
              What Our Students Say <br /> about Us.
            </h1>
            <p className="text-gray-600 text-lg">
              Discover how FluentDeutsch has helped students from all walks of
              life achieve their language learning goals. Hear it directly from
              them!
            </p>
            <div className="flex gap-8">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
              <div className="w-5 h-5 rounded-full bg-[#af6aca]"></div>
              <div className="w-5 h-5 rounded-full bg-sky-500"></div>
            </div>
          </div>

          <div className="carousel w-full p-4 rounded-box h-fit">
            <div
              key={id}
              className="carousel-item relative w-fit rounded-xl shadow-lg h-full flex items-center p-5"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <div className="relative bg-gradient-to-r from-green-50 to-green-100 w-[80%] ml-3 bg-white rounded-xl space-y-5 p-5 pt-10 sm:pl-14 xl:pt-14 font-poppins font-medium text-base text-[#5E6282]">
                <p
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  className="sm:w-[95%]"
                >
                  {text}
                </p>
                <div>
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                    className="miama text-xl font-bold"
                  >
                    {name}
                  </h1>
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                  >
                    {location}
                  </h3>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="800"
                  className="absolute -top-8 -left-8"
                >
                  <img
                    src={image}
                    alt={name}
                    className="p-1 border-4 border-green-500 w-14 h-14 sm:w-20 sm:h-20 rounded-full"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col gap-2 mr-2 top-1/2 right-0 transform -translate-y-1/2">
                <button
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  onClick={goToPreviousSlide}
                  className="btn btn-circle bg-white hover:bg-white border-none"
                >
                  <img src={upArrow} alt="Previous" className="w-8 h-8" />
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  onClick={goToNextSlide}
                  className="btn btn-circle bg-white hover:bg-white border-none"
                >
                  <img src={downArrow} alt="Next" className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
