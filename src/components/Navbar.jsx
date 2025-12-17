import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { BsMoonFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  return (
    <div
      className={`fixed top-0 w-full backdrop-blur-sm shadow-sm   z-50 bg-(--background) text-(--text) ${
        theme === "light"
          ? "border-b border-gray-100 bg-(--background)/70"
          : "border-b border-gray-600"
      }`}
    >
      <div className="  w-full md:max-w-6xl flex justify-between items-center py-4 mx-auto px-8 md:px-0 relative">
        <div>
          <h3 className={`text-[22px] font-extrabold text-(--text)`}>
            LEARN<span className="text-blue-500">X</span>
          </h3>
        </div>

        <ul
          className={`md:flex md:justify-center items-center absolute right-0 top-20 md:sticky  gap-8   p-4      ${
            open
              ? "-right-full hidden duration-800"
              : " w-[95%] mx-auto h-[85vh] md:h-16 rounded-md bg-(--background)  lg:bg-none text-[--text]  opacity-100 fixed inset-0  backdrop-blur-sm z-40"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[17px] font-semibold ${
                  isActive
                    ? "text-blue-600 font-bold border-b-4 rounded border-blue-600"
                    : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[17px] font-semibold ${
                  isActive
                    ? "text-blue-600 font-bold border-b-[3px] rounded border-blue-600"
                    : ""
                }`
              }
              to="/assignments"
            >
              Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[17px] font-semibold ${
                  isActive
                    ? "text-blue-600 font-bold border-b-[3px] rounded border-blue-600"
                    : ""
                }`
              }
              to="/pending-assignments"
            >
              Pending Assignments
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-6 md:block">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`text-3xl p-2  rounded-full text-white ${
                theme === "light" ? "text-white bg-blue-600" : "bg-gray-700 text-yellow-400"
              }`}
            >
              {theme === "light" ? <IoSunny /> : <BsMoonFill />}
            </button>
            {user ? (
            
                <div className="dropdown dropdown-bottom dropdown-end">
                  <img
                    tabIndex={0}
                    role="button"
                    className="w-[55px] h-[55px] rounded-full  m-1"
                    src={user?.photoURL}
                    alt=""
                  />
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <Link>Assignments</Link>
                    </li>
                    <li>
                      <a>Assignments</a>
                    </li>
                    <li>
                      <button
                        onClick={logOut}
                        className="rounded p-3 px-5 bg-[#218bf4] border-none text-white"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
             
            ) : (
              <button className="rounded p-3 px-5 bg-[#218bf4] border-none text-white">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="flex md:hidden text-3xl text-[--text]"
          >
            {open ? <IoMenu /> : <RiCloseLargeFill />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// Primary Font (Google Font)

// Poppins

// ✔ Alternative Fonts

// Inter

// Roboto

// Nunito Sans

// Hero Heading font:

//  Poppins (700 / 800 weight)

// Body text:

//  Poppins 400 / 500
{
  /* <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
            </ul> */
}

//
// <nav>
//
// </nav>
// <div className="flex gap-2">
//   <div className="flex">
//     <div
//       className=""
//     >
//

//     </div>
//

//   </div>
// </div>
