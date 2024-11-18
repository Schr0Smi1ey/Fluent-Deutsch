import { NavLink } from "react-router-dom";
const NavBar = () => {
  const navElements = (
    <ul className="flex flex-col lg:flex-row items-center gap-5 font-medium text-lg">
      <NavLink to="/">
        <span className="link-hover">Home</span>
      </NavLink>
      <NavLink to="/Statistics">
        <span className="hover:text-[#3dab0ee1]">Start-Learning</span>
      </NavLink>
      <NavLink to="/Dashboard">
        <span className="hover:text-[#3dab0ee1]">Tutorials</span>
      </NavLink>
      <NavLink to="/About">
        <span className="hover:text-[#3dab0ee1]">About Us</span>
      </NavLink>
    </ul>
  );
  const navElementsEnd = (
    <div className="flex items-center justify-center sm:justify-left gap-2 sm:gap-5">
      {/* <div className="dropdown drop-down text-black">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img
              src={cart}
              alt=""
              className="h-10 w-10 shadow-lg bg-white rounded-full p-2"
            />
            {cartItem > 0 ? (
              <span className="badge badge-sm indicator-item text-[#9538E2]">
                {cartItem}
              </span>
            ) : null}
          </div>
        </div>
        {isOpenCart && (
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 text-black z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                <span className="text-[#9538E2]">{cartItem}</span> Items
              </span>
              <span className="text-[#09080F99]">
                Subtotal: ${cartItemPrice}
              </span>
              <div className="card-actions">
                <button
                  onClick={() => handleViewCart("cart")}
                  className="btn bg-[#9538E2] text-lg text-white hover:bg-[#9538E2] btn-block"
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}
      {/* <div className="dropdown dropdown-end text-black">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img
              src={wish}
              onClick={toggleWishDropdown}
              className="h-10 w-10 shadow-lg rounded-full p-3 bg-white"
              alt=""
            />
            {wishItem > 0 ? (
              <span className="badge badge-sm indicator-item text-[#9538E2]">
                {wishItem}
              </span>
            ) : null}
          </div>
        </div>
        {isOpenWish && (
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-black">
                <span className="text-[#9538E2]">{wishItem}</span> Items
              </span>
              <span className="text-[#09080F99]">
                Subtotal: ${wishItemPrice}
              </span>
              <div className="card-actions">
                <button
                  onClick={() => handleViewCart("wish")}
                  className="btn text-lg bg-[#9538E2] text-white hover:bg-[#9538E2] btn-block"
                >
                  View Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}
      <div className="dropdown dropdown-end text-black">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        {
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        }
      </div>
      <div className="flex gap-4 items-center">
        <button className="font-semibold text-lg">Login</button>
        <button className="bg-white px-2 py-1 rounded-lg text-black font-semibold text-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
  return (
    <div
      className={`navbar container py-5 px-2 sm:p-5 mx-auto ${
        location.pathname === "/"
          ? "bg-[#9538E2] text-white"
          : "bg-white text-black"
      } rounded-t-xl`}
    >
      <div className="navbar-start">
        <a className="text-black flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold bg-white hover:bg-[#9538E2] hover:border-2 hover:border-white hover:text-white text-lg sm:text-xl">
          Fluent <span className="text-orange-500">Deutsch</span>
        </a>
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
          {
            <ul className="menu menu-sm dropdown-content text-black lg:text-white bg-base-100 rounded-box z-[1] mt-12 w-fit p-4 pb-4 space-y-2 shadow">
              <div>{navElements}</div>
              <div className="sm:hidden">{navElementsEnd}</div>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
