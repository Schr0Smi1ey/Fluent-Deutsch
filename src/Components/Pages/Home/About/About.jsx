import about1 from "../../../../Assets/about1.svg";
import about2 from "../../../../Assets/about2.svg";
import about3 from "../../../../Assets/about3.svg";
import about4 from "../../../../Assets/about4.svg";
import ReactCountryFlag from "react-country-flag";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const aboutContent = [
    {
      title: "Free. Fun. Effective.",
      description:
        "Learning with FluentDeutsch is engaging and effective. Studies show that interactive lessons help you learn faster while building real-world communication skills.",
      icon: about1,
    },
    {
      title: "Backed by Science",
      description:
        "Our lessons combine research-based teaching methods with carefully curated content that improves speaking, writing, and comprehension skills.",
      icon: about2,
    },
    {
      title: "Stay Motivated",
      description:
        "We make language learning a habit with gamified lessons, badges, and streaks, all while keeping it fun and rewarding.",
      icon: about3,
    },
    {
      title: "Personalized Learning",
      description:
        "Lessons are tailored just for you, combining the power of AI and your learning preferences to provide the right content at the right time.",
      icon: about4,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="divider"></div>
      <div className="flex px-4 w-fit gap-4 justify-center items-center mx-auto">
        <ReactCountryFlag
          data-aos="fade-right"
          countryCode="DE"
          svg
          style={{
            width: "4em",
            height: "4em",
          }}
          title="US"
        />
        <h3 data-aos="fade-left" className="font-semibold text-2xl">
          The world's most popular way to learn German online
        </h3>
      </div>
      <div className="divider"></div>
      <section className="container mx-auto my-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why FluentDeutsch?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
          {aboutContent.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={`flex gap-3 flex-col justify-center items-center shadow-md hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100 p-5 rounded-2xl ${
                index % 2 === 0
                  ? "sm:flex-row-reverse sm:justify-end"
                  : "sm:flex-row sm:justify-start"
              } items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
            >
              <div
                data-aos="zoom-in"
                className="w-1/2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg"
              >
                <img src={item.icon} alt={item.title} className="w-30 h-30" />
              </div>
              <div className="text-center w-3/4">
                <h3
                  data-aos="fade-up"
                  className={`text-4xl font-bold text-green-600 mb-4 ${
                    index % 2 === 0
                      ? "sm:text-left text-center"
                      : "sm:text-right text-center"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  data-aos="fade-up"
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "sm:text-left" : "sm:text-right mr-0"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
