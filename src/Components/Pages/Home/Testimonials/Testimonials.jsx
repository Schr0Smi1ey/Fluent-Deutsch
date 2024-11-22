import upArrow from "/Assets/up-arrow.png";
import downArrow from "/Assets/down-arrow.png";
import Commenter2 from "/Assets/commenter2.png";
import Commenter3 from "/Assets/commenter3.png";
import Commenter4 from "/Assets/commenter4.png";
import Commenter1 from "/Assets/commenter1.jpg";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Testimonials = () => {
  const testimonials = [
    {
      text: "Absolutely thrilled with my new headphones from Gadget Heavens! The sound quality is incredible, and the recommendation was spot-on. Shipping was quick and secure—highly recommended!",
      name: "Emily Smith",
      location: "Toronto, Canada",
      image: Commenter1,
    },
    {
      text: "Shopping at Gadget Heavens was incredibly easy! Got a great deal on a laptop, and the support team helped me choose the perfect model. Couldn’t be happier with my purchase!",
      name: "Carlos Mendes",
      location: "São Paulo, Brazil",
      image: Commenter2,
    },
    {
      text: "Amazing service! Bought a new mobile phone and some accessories, and the entire process was seamless. Gadget Heavens made it easy to find exactly what I needed. I’ll definitely be back!",
      name: "Mohammed Al-Mansoori",
      location: "Dubai, UAE",
      image: Commenter3,
    },
    {
      text: "A fantastic shopping experience! Found the perfect laptop bag and charging accessories. Gadget Heavens has everything I needed, and the customer service was excellent. Highly recommend!",
      name: "Liam O'Reilly",
      location: "Dublin, Ireland",
      image: Commenter4,
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeSlide]);
  const { text, name, location, image } = testimonials[activeSlide];
  return (
    <div>
      <section className="md:container mx-auto my-10 lg:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="font-poppins  p-10 space-y-5">
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

          <div className="carousel rounded-box h-fit">
            <div
              data-aos="zoom-in"
              className="carousel-item w-fit rounded-xl shadow-lg h-full flex items-center p-5 relative"
            >
              <div className="relative bg-gradient-to-r from-green-50 to-green-100 w-[80%] ml-3 bg-white rounded-xl space-y-5 p-5 pt-10 sm:pl-14 xl:pt-14 font-poppins font-medium text-base text-[#5E6282]">
                <p className="sm:w-[95%]">{text}</p>
                <div>
                  <h1 className="miama text-xl font-bold">{name}</h1>
                  <h3>{location}</h3>
                </div>
                <div className="absolute -top-8 -left-8">
                  <img
                    src={image}
                    alt={name}
                    className="p-1 border-4 border-green-500 w-14 h-14 sm:w-20 sm:h-20 rounded-full"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col gap-2 mr-2 top-1/2 right-0 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="btn btn-circle bg-white hover:bg-white border-none"
                >
                  <img src={upArrow} alt="Previous" className="w-8 h-8" />
                </button>
                <button
                  onClick={handleNext}
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
