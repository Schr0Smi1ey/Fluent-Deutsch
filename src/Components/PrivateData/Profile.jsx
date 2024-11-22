import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
      <Helmet>
        <title>Fluent Deutsch | Profile</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        className="bg-white shadow-lg rounded-lg  flex flex-col sm:flex-row items-center sm:gap-20 justify-center max-w-4xl p-6"
      >
        <div
          data-aos="fade-right"
          className="flex justify-center items-center mb-6 sm:mb-0"
        >
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-60 h-48 rounded-full border-4 border-green-500"
          />
        </div>

        <div className="flex flex-col justify-center items-center sm:items-start md:w-2/3 px-6">
          <h1
            data-aos="fade-left"
            className="text-2xl font-bold text-gray-800 mb-2"
          >
            Welcome, {user.displayName || "Guest"}!
          </h1>
          <p data-aos="fade-left" className="text-gray-600 text-lg mb-4">
            Email:{" "}
            <span className="font-medium">{user.email || "Not Provided"}</span>
          </p>
          <button
            data-aos="fade-left"
            onClick={handleUpdateProfile}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-bold"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
