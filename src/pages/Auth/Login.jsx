import image from "../../assets/images/imge.png";
import { TfiEmail } from "react-icons/tfi";
import { IoKeyOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { GoArrowLeft } from "react-icons/go";


const Login = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="relative flex flex-col lg:flex-row items-center">
        {/*  form  */}
       <div className="relative flex flex-col lg:flex-row items-center">
         <div
          className={` lg:static lg:-mr-20 
                      z-20 md:w-[400px] my-6 md:my-0 p-6 md:h-[499px]
                      rounded-2xl shadow-xl  space-y-6 ${
      theme === "light" ? "bg-base-100" : "bg-[#141e2b]"
    }`}
        >
          <h3 className="text-3xl font-bold text-center ">Login please</h3>
          <form className="space-y-6">
            <label className="w-full relative space-y-4">
              <input
                type="email"
                name="email"
                className="placeholder-gray-400 placeholder:pl-4 outline-none placeholder:border-l-2 py-3 pl-14 pr-6 w-full border border-gray-600 rounded    focus:ring-2 focus:ring-[#1f8af3]"
                placeholder="Enter your User email "
              />
              <span className="absolute text-xl top-[1px] text-gray-400 left-6  ">
                {" "}
                <TfiEmail />
              </span>
            </label>
            <label className="w-full relative space-y-2">
              <input
                type="password"
                name="password"
                className="placeholder-gray-400 placeholder:pl-4 outline-none placeholder:border-l-2 py-3 pl-14 pr-6 w-full border border-gray-600 rounded  focus:ring-2 focus:ring-[#1f8af3]"
                placeholder="Enter your Password"
              />
              <span className="absolute text-xl top-[1px] text-gray-400 left-6 ">
                {" "}
                <IoKeyOutline />
              </span>
            </label>
            <div className="flex justify-between items-center gap-4  w-full">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-gray-700 bg-white"
                />
                <span>Remember me</span>
              </div>
              <div>
                <button className="hover:border-b hover:border-white">
                  Forgat Password
                </button>
              </div>
            </div>

            <button className="uppercase btn w-full   text-white bg-[#1f8af3] font-bold border-none text-[17px]">
              log in
            </button>
            <div className="divider border-gray-900">OR</div>
          </form>

         
            <button className={`uppercase btn w-full       font-bold border-none text-[17px] flex items-center gap-4 ${
      theme === "light" ? "text-gray-900 bg-gray-100 hover:bg-blue-800 hover:text-white" : "bg-blue-800 hover:bg-gray-100 hover:text-gray-900"
    }`}>
              <FcGoogle className="text-2xl" />
            sign In with google
          </button>
         

          <p className="text-center text-[17px]">
            New account Please{" "}
            <Link className="text-green-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
       </div>
      </div>
      {/* right side image  */}

      <div
        className="hidden w-[600px] h-[600px] rounded-2xl shadow-xl 
                     lg:flex flex-col justify-center items-center  relative"
      >
        {/* form image  */}
        <img
          src={image}
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
        {/* for title and description */}
        <div className="absolute inset-0 rounded-xl flex flex-col justify-center items-center">
          <Link to="/">
          <h4 className="text-gray-100 font-bold text-3xl  p-3 shadow-2xl rounded-full"><GoArrowLeft /></h4>
          </Link>
          <h3 className="text-gray-100 uppercase text-3xl font-bold ">
            welcome !
          </h3>
          <p className="text-gray-100 py-3 font-medium">
            Enter your details and start journory with us
          </p>
          <button className="px-6 py-4 text-white font-bold text-xl bg-[#003ece] shadow-2xl rounded uppercase">
            learnx
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
