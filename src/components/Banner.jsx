
import { LuUsers } from "react-icons/lu";
import { TfiStatsUp, TfiTime } from "react-icons/tfi";
import { useTheme } from "../context/ThemeContext";

const Banner = () => {
  const {theme}=useTheme()
  return (
    <div className="w-full lg:max-w-7xl xl:max-w-6xl mx-auto px-4 py-10 bg-(--background) text-(--text)">
      {data.map((banner) => (
        <div
          key={banner.id}
          className=" text-white md:flex flex-col-reverse justify-center items-center gap-6 md:flex-row-reverse "
        >
          <div className="relative  md:w-1/2 w-full h-[300px] sm:h-[400px] md:h-[450px] mx-auto pb-6">
            <img
              src={banner.sideImage}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div class={`absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-xl ${theme === "light" ? "hidden" :"block"}`}></div>
            <div className={`hidden md:flex absolute top-10  ${theme === "light" ? "bg-black/50 backdrop-blur" : "bg-white/5 backdrop-blur-xl"}  -left-12  p-4  rounded-xl shadow-lg gap-4`}>
              <div className="text-4xl bg-[#17604d]/20 p-3 rounded text-[#20a884]">
                <TfiStatsUp />
              </div>
              <div className="">
                <h3 className="text-3xl font-bold">+127%</h3>
                <p>Revenue Growth</p>
              </div>
            </div>

            <div className={`hidden md:flex absolute top-[45%] -right-16  p-4  rounded-xl shadow-lg gap-4 ${theme === "light" ? "bg-black/50 backdrop-blur" : "bg-white/5 backdrop-blur-xl"}`}>
              <div className="text-4xl bg-[#218bf4]/30 p-3 rounded text-[#218bf4]">
                <LuUsers />
              </div>
              <div>
                <h3 className="text-3xl font-bold">2.4k</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className={`hidden md:flex absolute bottom-10 -left-12  p-4 rounded-xl shadow-lg gap-4 ${theme === "light" ? "bg-black/50 backdrop-blur" : "bg-white/5 backdrop-blur-xl"}`}>
              <div className="text-4xl bg-[#77491c]/30 p-3 rounded text-[#77491c]">
                <TfiTime />
              </div>
              <div>
                <h3 className="text-3xl font-bold">40%</h3>
                <p>Time Saved</p>
              </div>
            </div>
          </div>
        {/* left content  */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight  text-(--text)">
              {banner.title}
            </h1>
            <p className="text-[16px] sm:text-lg md:text-xl leading-relaxed  inter text-(--desc-text)" >
              {banner.description}
            </p>
            <button className="px-6 py-3 text-[18px] font-semibold bg-[#218bf4] rounded-lg hover:bg-[#1a76d0] duration-300">
              {banner.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Welcome to Job Assessment",
    description:
      "Our powerful SaaS platform helps modern teams increase productivity by 40% and reduce operational costs. Join over 10,000+ companies already transforming their workflow.",
    btn: "Get Started",
    bgImage:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    sideImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  // {
  //   id: 2,
  //   title: "Skill Development Training",
  //   description:
  //     "Learn job-ready skills through industry-standard training modules.",
  //   btn: "Explore Training",
  //   bgImage:
  //     "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
  //   sideImage:
  //     "https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg",
  // },
  // {
  //   id: 3,
  //   title: "Performance Analytics",
  //   description:
  //     "Analyze assessment results with detailed reports and data-driven insights.",
  //   btn: "View Analytics",
  //   bgImage:
  //     "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg",
  //   sideImage:
  //     "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
  // },
];

export default Banner;





