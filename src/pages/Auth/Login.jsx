import image from "../../assets/images/imge.png";
import { TfiEmail } from "react-icons/tfi";
import { IoKeyOutline } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
const Login = () => {
  const { theme } = useTheme();
  return (
    <div className="grid  h-screen w-full ">
     
        {/* mobile screen log in  */}
        {/* <div className={`py-8 px-10 w-full text-[--text]  block lg:hidden rounded shadow-xl ${
              theme === "light" ? "bg-base-100" : "bg-[#141e2b]"
            }`}>
          <h3 className="text-3xl font-bold text-center pb-10 ">
            Login please
          </h3>

          <div className=" flex flex-col justify-center items-center ">
            <form>
              <label className="w-full relative ">
                <input
                  type="email"
                  name="email"
                  className="placeholder-gray-400 placeholder:pl-4 placeholder:border-l-2 py-3 pl-14  w-full border-2 border-gray-600 rounded mb-6  focus:ring-2 focus:ring-[#1f8af3] hover:border-[#1f8af3]"
                  placeholder="Enter your User email "
                />
                <span className="absolute text-xl text-gray-400 left-6 top-[1px] ">
                  {" "}
                  <TfiEmail />
                </span>
              </label>
              <label className="w-full relative ">
                <input
                  type="password"
                  name="password"
                  className="placeholder-gray-400 placeholder:pl-4 placeholder:border-l-2 py-3 pl-14  w-full border-2 border-gray-600 rounded focus:ring-2 hover:border-[#1f8af3] focus:ring-[#1f8af3]"
                  placeholder="Enter your Password"
                />
                <span className="absolute text-xl text-gray-400 left-6 top-[1px] ">
                  {" "}
                  <IoKeyOutline />
                </span>
              </label>

              <div className="flex justify-between items-center gap-4 py-4 w-full">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox text-gray-700 bg-white"
                  />
                  <span>Remember me</span>
                </div>
                <div>
                  <button className="hover:border-b-2 hover:border-gray-400">
                    Forgat Password
                  </button>
                </div>
              </div>

              <button className="uppercase btn w-full mt-12 mb-4 text-white bg-[#1f8af3] font-bold border-none text-[17px]">
                log in
              </button>
            </form>
            <div className="divider border-white">OR</div>
            <button className="uppercase btn w-full my-4 text-white bg-emerald-300 font-bold border-none text-[17px]">
              google sign In
            </button>
          </div>
          <p className="text-center">New account Please <Link className="text-green-600 font-bold" to="/register">Register</Link></p>
        </div> */}
        {/* lg device log in form  */}
        <div className="relative w-3xl mx-auto rounded  ">
          {/* lg screen form  */}
          <div
            className={`text-[--text]   hidden md:block  absolute top-10 bottom-8 -left-[50%]  w-[430px] mx-auto bg-white rounded-2xl shadow-lg p-6  ${
              theme === "light" ? "bg-base-100" : "bg-[#141e2b]"
            }`}
          >
         

            
              <form className="space-y-4">
                   <h3 className="text-3xl font-bold text-center">
              Login please
            </h3>
                <label className="w-full relative space-y-4">
                  <input
                    type="email"
                    name="email"
                    className="placeholder-gray-400 placeholder:pl-4 placeholder:border-l-2 py-3 pl-14 pr-6 w-full border border-gray-600 rounded  hover:border-[#1f8af3]  focus:ring-2 focus:ring-[#1f8af3]"
                    placeholder="Enter your User email "
                  />
                  <span className="absolute text-xl text-gray-400 left-6  ">
                    {" "}
                    <TfiEmail />
                  </span>
                </label>
                <label className="w-full relative space-y-2">
                  <input
                    type="password"
                    name="password"
                    className="placeholder-gray-400 placeholder:pl-4 placeholder:border-l-2 py-3 pl-14 pr-6 w-full border border-gray-600 rounded hover:border-[#1f8af3] focus:ring-2 focus:ring-[#1f8af3]"
                    placeholder="Enter your Password"
                  />
                  <span className="absolute text-xl text-gray-400 left-6 ">
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

              <button className="uppercase btn w-full  text-white bg-emerald-300 font-bold border-none text-[17px]">
                google sign In
              </button>
             
              <p>New account Please <Link className="text-green-600 font-bold" to="/register">Register</Link></p>
              
            
              
            </div>
         
          {/* form image  */}
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          {/* for title and description */}
          <div className="absolute inset-0 rounded-xl flex flex-col justify-center items-center">
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
