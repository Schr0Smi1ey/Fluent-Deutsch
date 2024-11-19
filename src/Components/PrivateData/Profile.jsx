import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
      <Helmet>
        <title>Fluent Deutsch | Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-6">
        {/* Profile Image */}
        <div className="flex justify-center items-center md:w-1/3 mb-6 md:mb-0">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-green-500 object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-center md:w-2/3 px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome, {user.displayName || "Guest"}!
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Email:{" "}
            <span className="font-medium">{user.email || "Not Provided"}</span>
          </p>
          <button
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
