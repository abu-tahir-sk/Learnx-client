import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="fixed top-0 w-full backdrop-blur-sm  bg-[#0c1623] border-b border-gray-600 z-50 shadow" >
      <div className="shadow-sm text-white/90 w-full md:max-w-6xl flex justify-between items-center py-4 mx-auto px-8 md:px-0 relative">
        <div>
          <h3 className=" text-[22px] font-extrabold text-white">LEARNX</h3>
        </div>
     
          <ul className={`md:flex md:justify-center items-center absolute right-0 top-20 md:sticky  gap-8   p-4   text-white   ${open  ? "-right-full hidden duration-800" : " w-[95%] mx-auto h-[85vh] md:h-16 rounded-md bg-[#1b2634] md:bg-[#0c1623] opacity-100 fixed inset-0  backdrop-blur-sm z-40"}`}>
            <li className={`text-[#218bf4]`} >
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={``}>
              <NavLink to="/assignments">Assignments</NavLink>
            </li>
            <li className={``}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={``}>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        
        <div className="flex items-center gap-6 md:block">
          <button className="rounded p-3 px-5 bg-[#218bf4] border-none text-white">
            Login
          </button>
          <div
            onClick={() => setOpen(!open)}
            className="flex md:hidden text-3xl text-white"
          >
            {open ? <IoMenu /> :   <RiCloseLargeFill />}
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

// 👉 প্রায় নিশ্চিত Poppins (700 / 800 weight)

// Body text:

// 👉 সাধারণত Poppins 400 / 500
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
