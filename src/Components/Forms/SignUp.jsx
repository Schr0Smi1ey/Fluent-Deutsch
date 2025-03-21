import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  const location = useLocation();
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { createUser, Toast, updateUserProfile, signInWithGoogle, setLoading } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handlePasswordVisivility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      validatePassword(value);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 500 });
  }, []);
  const validatePassword = (password) => {
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!uppercase) {
      setPasswordError("Password must include at least one uppercase letter.");
    } else if (!lowercase) {
      setPasswordError("Password must include at least one lowercase letter.");
    } else if (!minLength) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, photoURL } = formData;
    const navigationPath = location.state?.from ? location.state.from : "/";
    createUser(email, password)
      .then((userCredential) => {
        return updateUserProfile(name, photoURL)
          .then(() => {
            Toast("Account Created Successfully", "success");
            setTimeout(() => {
              navigate(`${navigationPath}`);
            }, 200);
          })
          .catch((error) => {
            Toast(`Profile update failed: ${error.message}`, "error");
          });
      })
      .catch((error) => {
        Toast(`Sign-up failed: ${error.message}`, "error");
      })
      .finally(() => {
        setLoading(false);
        setFormData({ name: "", email: "", photoURL: "", password: "" });
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((userCredential) => {
        setTimeout(() => {
          navigate(`${location.state?.from ? location.state.from : "/"}`);
          Toast("Login Successful", "success");
        }, 200);
      })
      .catch((error) => {
        Toast(`Login failed: ${error.message}`, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="min-h-[600px] py-10 flex items-center justify-center bg-gradient-to-t from-green-200 to-green-100">
      <Helmet>
        <title>Fluent Deutsch | Sign Up</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
      >
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold mb-6 text-center"
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div data-aos="fade-up">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div data-aos="fade-up">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div data-aos="fade-up">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter photo URL"
            />
          </div>

          <div data-aos="fade-up">
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
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                  passwordError ? "focus:ring-red-400" : "focus:ring-green-400"
                }`}
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={handlePasswordVisivility}
              >
                {showPassword ? (
                  <VscEyeClosed className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                ) : (
                  <IoMdEye className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                )}
              </div>
            </div>
            {passwordError && (
              <p className="text-sm text-red-500 mt-1">{passwordError}</p>
            )}
          </div>

          <button
            data-aos="fade-up"
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
          >
            Register
          </button>
        </form>

        <div
          data-aos="fade-up"
          className="flex items-center justify-between my-4"
        >
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <p className="text-xs text-gray-500">OR</p>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <button
          data-aos="fade-up"
          onClick={handleSignInWithGoogle}
          className="w-full bg-gray-100 font-bold py-2 rounded-lg hover:bg-gray-200 flex items-center justify-center space-x-2"
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
          <span>Sign Up with Google</span>
        </button>

        <p data-aos="fade-right" className="mt-4 text-lg text-center">
          Already have an account?{" "}
          <Link
            to={"/login"}
            state={{ from: location.state?.from }}
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
