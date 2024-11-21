import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { user, updateUserProfile, Toast } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData.displayName, formData.photoURL)
      .then(() => {
        navigate("/profile");
        Toast("Profile Updated Successfully", "success");
      })
      .catch((error) => {
        Toast(error.message, "error");
      });
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Fluent Deutsch | Profile Update</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
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
          <div>
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
