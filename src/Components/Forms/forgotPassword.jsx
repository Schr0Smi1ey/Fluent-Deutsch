import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const { resetPassword, Toast } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        Toast("Password reset mail was sent to your email!", "success");
        navigate("/login");
      })
      .catch(() => {
        Toast(error.message, "error");
      });
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gradient-to-t from-green-200 to-green-100">
      <div
        data-aos="zoom-in"
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold mb-6 text-center"
        >
          Reset Password
        </h2>
        <p data-aos="fade-down" className="text-gray-600 mb-4 text-center">
          Enter your email to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-up">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            data-aos="fade-up"
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
          >
            Reset Password
          </button>
        </form>
        <div data-aos="fade-up" className="text-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-blue-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
