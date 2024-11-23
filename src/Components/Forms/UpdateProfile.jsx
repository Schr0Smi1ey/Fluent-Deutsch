import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
const UpdateProfile = () => {
  const { user, updateUserProfile, Toast, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 500 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUserProfile(formData.displayName, formData.photoURL)
      .then(() => {
        setTimeout(() => {
          navigate("/profile");
          Toast("Profile Updated Successfully", "success");
        }, 200);
      })
      .catch((error) => {
        Toast(error.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100 bg-gradient-to-r from-green-50 to-green-100">
      <Helmet>
        <title>Fluent Deutsch | Profile Update</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        className="bg-white shadow-lg rounded-lg w-full max-w-md p-6"
      >
        <h2
          data-aos="fade-down"
          className="text-3xl text-center font-bold text-gray-800 mb-4"
        >
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div data-aos="fade-up">
            <label
              htmlFor="displayName"
              className="block text-gray-700 font-medium mb-2"
            >
              New Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your new name"
              required
            />
          </div>
          <div data-aos="fade-up">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-medium mb-2"
            >
              New Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter new profile photo URL"
            />
          </div>

          <button
            data-aos="fade-up"
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
