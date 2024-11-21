import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser, signInWithGoogle, Toast } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const attemptedPath = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target[1].value;
    signInUser(email, password)
      .then(() => {
        console.log("attempted path: ", attemptedPath);
        navigate(attemptedPath);
        Toast("Login Successful", "success");
      })
      .catch((error) => {
        Toast(error.message, "error");
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate(attemptedPath);
        Toast("Login Successful", "success");
      })
      .catch((error) => {
        Toast(error.message, "error");
      });
  };

  return (
    <div className="min-h-[400px] py-10 flex items-center justify-center bg-gradient-to-t from-green-200 to-green-100">
      <Helmet>
        <title>Fluent Deutsch | Login</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
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

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? (
                  <VscEyeClosed className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                ) : (
                  <IoMdEye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                )}
              </div>
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
          >
            Login
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        <button
          onClick={handleSignInWithGoogle}
          className="w-full bg-gray-100 font-bold py-2 rounded-lg flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.67 0 6.57 1.5 8.52 3.05l6.32-6.33C34.25 2.57 29.68.5 24 .5 14.91.5 7.27 6.74 4.13 15.13l7.66 5.94C13.8 14.38 18.52 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M47.65 24.5c0-1.49-.12-2.96-.35-4.39H24v8.79h13.55c-.58 3.03-2.27 5.4-4.87 7.07l7.67 5.96C43.58 37.33 47.65 31.49 47.65 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M11.77 27.02c-.57-1.67-.9-3.47-.9-5.32 0-1.85.33-3.65.9-5.32L4.13 15.13C1.48 20.03 0 24 0 24c0 2.59.65 5.03 1.8 7.24L11.77 27.02z"
            />
            <path
              fill="#34A853"
              d="M24 47.5c5.68 0 10.58-1.88 14.11-5.1l-7.67-5.96c-2.13 1.43-4.91 2.36-7.96 2.36-5.47 0-10.19-4.88-11.94-11.37l-7.66 5.94C7.27 41.26 14.91 47.5 24 47.5z"
            />
          </svg>
          <span>Login with Google</span>
        </button>

        <p className="mt-4 text-lg text-center">
          New to Fluent Deutsch?{" "}
          <Link
            to={"/signup"}
            state={{ from: attemptedPath }}
            className="text-blue-500 hover:underline text-lg font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
