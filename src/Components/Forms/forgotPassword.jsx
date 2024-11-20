import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || ""); // Access email from state
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

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gradient-to-t from-green-200 to-green-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center">Reset Password</h2>
        <p className="text-gray-600 mb-4 text-center">
          Enter your email to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
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
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
          >
            Reset Password
          </button>
        </form>
        <div className="text-center mt-4">
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
