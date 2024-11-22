import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="text-center">
        <h3 className="flex justify-center items-center gap-3 font-bold text-3xl mb-3">
          Fluent <span className="text-green-500">Deutsch</span>
        </h3>
        <p className="font-medium text-base text-[#09080F99]">
          Leading the way in German language learning with engaging and
          innovative tools.
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-[#09080F99]">
        <div className="flex justify-center md:justify-end text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">
              Language Learning
            </h2>
            <Link
              className="hover:text-green-500 hover:font-semibold"
              to="/tutorials"
            >
              Tutorial
            </Link>
            <Link className="hover:text-green-500 hover:font-semibold">
              Practice Exercises
            </Link>
            <Link className="hover:text-green-500 hover:font-semibold">
              Proficiency Exams
            </Link>
            <Link className="hover:text-green-500 hover:font-semibold">
              Community Forum
            </Link>
          </div>
        </div>
        <div className="flex justify-center text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">Company</h2>
            <Link
              className="hover:text-green-500 hover:font-semibold"
              to="/about-us"
            >
              About Us
            </Link>
            <Link className="hover:text-green-500 hover:font-semibold">
              Careers
            </Link>
            <Link className="hover:text-green-500 hover:font-semibold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">Follow Us</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="https://www.facebook.com/radiant.remel.5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-green-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://x.com/sarafat_karim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-green-500"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-green-500"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/sarafat-karim/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-600 hover:text-green-500"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center w-fit mx-auto mt-5">
        &copy; 2024 FluentDeutsch. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
