import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./Navbar.css";
const NavBar = () => {
  const { user, signOutUser, Toast, setLoading } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileOpen(false);
  };
  const toggleProfileDropdown = () => {
    setIsProfileOpen((prevState) => !prevState);
  };
  const handleProfile = () => {
    if (window.innerWidth <= 640) {
      navigate("/profile");
    } else {
      toggleProfileDropdown();
    }
    toggleMenuDropdown();
  };
  const showSignOutModal = (event) => {
    event.preventDefault();
    document.getElementById("signout-modal").showModal();
    toggleProfileDropdown();
  };
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Toast("Logged Out Successfully", "warning");
        navigate("/");
      })
      .catch((error) => {
        Toast(error.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
    hideSignOutModal();
  };
  const hideSignOutModal = () => {
    document.getElementById("signout-modal").close();
  };
  const navElements = (
    <ul className="flex flex-col text-center lg:flex-row items-center justify-center gap-5 font-medium text-lg">
      <NavLink onClick={toggleMenuDropdown} to="/">
        <span>Home</span>
      </NavLink>
      <NavLink onClick={toggleMenuDropdown} to="/start-learning">
        <span>Learn</span>
      </NavLink>
      <NavLink to={"/tutorials"} onClick={toggleMenuDropdown}>
        <span>Tutorials</span>
      </NavLink>
      <NavLink onClick={toggleMenuDropdown} to="/about-us">
        <span className="block text-center">About Us</span>
      </NavLink>
    </ul>
  );
  const navElementsEnd = (
    <div className="flex items-center justify-center sm:justify-left gap-2 sm:gap-5">
      {user && (
        <div className="dropdown dropdown-end text-black">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                onClick={handleProfile}
                alt="Profile Image"
                src={user.photoURL || "https://i.pravatar.cc/500"}
              />
            </div>
          </div>
          {isProfileOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-fit min-w-40 mt-3 mr-4 p-2 shadow"
            >
              <li className="block">
                <img
                  src={user.photoURL}
                  alt=""
                  className="block rounded-2xl mx-auto mb-2"
                />
              </li>
              <li className="hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100">
                <h3 className="justify-between flex font-bold text-base">
                  {user.displayName}
                </h3>
              </li>
              <li className="font-semibold hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100">
                <Link onClick={toggleProfileDropdown} to="/profile">
                  Profile
                </Link>
              </li>
              <li className="font-semibold hover:bg-gradient-to-t hover:from-green-200 hover:to-green-100">
                <Link onClick={showSignOutModal}>Logout</Link>
              </li>
            </ul>
          )}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 items-center">
        {!user && (
          <Link
            onClick={toggleMenuDropdown}
            to={"/login"}
            className="bg-white px-2 py-1 rounded-lg text-black font-semibold text-lg"
          >
            Login
          </Link>
        )}
        {!user && (
          <Link
            onClick={toggleMenuDropdown}
            to={"/signup"}
            className="bg-white px-2 py-1 rounded-lg text-black font-semibold text-lg"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`navbar shadow-md rounded-b-md container mx-auto center z-[70] w-[98%] sm:w-full md:w-[96%] py-2 px-3 md:py-3 md:px-5 flex justify-between items-center my-5 fixed top-0 left-[49.8%] sm:left-[50.7%] md:left-[50.7%] lg:left-1/2 xl:left-[50.1%]  transform -translate-x-1/2 transition-all duration-500 -translate-y-4 ${
        scroll ? "bg-green-500 mt-4 rounded-b-2xl" : "bg-white"
      }`}
    >
      <dialog
        id="signout-modal"
        className="modal flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        <div className="modal-box w-full max-w-sm bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-3xl text-center font-semibold text-gray-800 mb-4">
            Sign Out
          </h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to sign out? You can always come back later!
          </p>
          <div className="modal-action justify-between flex mx-auto items-center">
            <button
              onClick={hideSignOutModal}
              className="px-4 py-2 bg-green-500 font-semibold text-base rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 font-semibold text-base bg-red-500 rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </dialog>
      <div className="navbar-start">
        <Link
          to={"/"}
          className="text-black flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold bg-white hover:border-2 hover:border-black text-lg sm:text-xl"
        >
          Fluent <span className="text-green-500">Deutsch</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">{navElements}</div>
      <div className="navbar-end">
        <div className="hidden sm:flex">{navElementsEnd}</div>
        <div className="dropdown dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              onClick={toggleMenuDropdown}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content text-black lg:text-white bg-base-100 rounded-box z-[1] mt-14 w-fit min-w-40 p-2 pb-4 space-y-2 shadow">
              {user ? (
                <div className="sm:hidden">{navElementsEnd}</div>
              ) : (
                <div>{navElements}</div>
              )}
              {user ? (
                <div>{navElements}</div>
              ) : (
                <div className="sm:hidden">{navElementsEnd}</div>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
