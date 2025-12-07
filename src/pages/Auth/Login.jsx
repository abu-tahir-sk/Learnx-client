import image from "../../assets/images/imge.png";
const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto p-6  lg:flex flex-col justify-end items-end   ">
        {/* mobile screen log in  */}
        <div className="p-6 py-8 w-full text-white bg-[#141e2b] block lg:hidden ">
           <h3 className="text-3xl font-bold text-center pb-10">
              Login please
            </h3>

            <div className=" flex flex-col justify-center items-center ">
              <form>
                <input
                  type="email"
                  name="email"
                  className="placeholder-gray-400 py-2 px-8 w-full border border-gray-600  rounded mb-7"
                  placeholder="Enter your User email "
                />

                <input
                  type="password"
                  name="password"
                  className="placeholder-gray-400 py-2 px-8 w-full border border-gray-600 outline-gray-950/20 rounded"
                  placeholder="Enter your Password"
                />

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
                    <button className="hover:border-b hover:border-white">
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
        </div>
        {/* lg device log in form  */}
        <div className="relative w-2/3 h-[80vh] rounded hidden lg:block">
        {/* lg screen form  */}
          <div className=" p-10 text-white bg-[#141e2b] hidden md:block  absolute top-4 bottom-4 -left-[55%] rounded w-[70%]">
            <h3 className="text-3xl font-bold text-center pb-10">
              Login please
            </h3>

            <div className=" flex flex-col justify-center items-center ">
              <form>
                <input
                  type="email"
                  name="email"
                  className="placeholder-gray-400 py-2 px-8 w-full border border-gray-600  rounded mb-7"
                  placeholder="Enter your User email "
                />

                <input
                  type="password"
                  name="password"
                  className="placeholder-gray-400 py-2 px-8 w-full border border-gray-600 outline-gray-950/20 rounded"
                  placeholder="Enter your Password"
                />

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
                    <button className="hover:border-b hover:border-white">
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
            

          
          </div>
          {/* form image  */}
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
  {/* for title and description */}
          <div class="absolute inset-0 rounded-xl flex flex-col justify-center items-center">
            <h3 className="text-gray-100 uppercase text-3xl font-bold ">
              welcome !
            </h3>
            <p className="text-gray-100 py-3">
              Enter your details and start journory with us
            </p>
            <button className="px-6 py-4 text-white font-bold text-xl bg-[#003ece] shadow-2xl rounded uppercase">
              learnx
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
