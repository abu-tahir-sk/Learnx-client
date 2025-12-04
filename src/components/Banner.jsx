import { LuUsers } from "react-icons/lu";
import { TfiStatsUp, TfiTime } from "react-icons/tfi";

const Banner = () => {
  return (
    <div className="w-full md:max-w-6xl mx-auto">
      {data.map((banner) => (
        <div
          key={banner.id}
          className=" text-white md:flex justify-center items-center gap-6 flex-row-reverse h-[90vh]"
        >
          <div className="md:w-1/2 md:mx-auto  relative">
            <img
              src={banner.sideImage}
              className="rounded w-[600px] shadow-2xl h-[60vh] "
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute hidden md:flex backdrop-blur-2xl  justify-center items-center p-4 bg-blue-200/30 rounded -left-12 bottom-[60%] gap-4">
              <div className="text-4xl bg-[#17604d]/20 p-2 rounded text-[#20a884]">
                <TfiStatsUp />
              </div>
              <div className="">
                <h3 className="text-3xl font-bold">+127%</h3>
                <p>Revenue Growth</p>
              </div>
            </div>

            <div className="absolute hidden md:flex backdrop-blur-2xl  justify-center items-center p-4 bg-blue-200/10 rounded -right-16 bottom-[30%] gap-4">
              <div className="text-4xl bg-[#218bf4]/30 p-2 rounded text-[#218bf4]">
                <LuUsers />
              </div>
              <div>
                <h3 className="text-3xl font-bold">2.4k</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="hidden md:flex absolute backdrop-blur-2xl  justify-center items-center p-4 bg-blue-200/10 rounded -left-12 bottom-[10%] gap-4">
              <div className="text-4xl bg-[#77491c]/20 p-2 rounded text-[#77491c]">
                <TfiTime />
              </div>
              <div>
                <h3 className="text-3xl font-bold">40%</h3>
                <p>Time Saved</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mx-auto  space-y-2 ">
            <h1 className="text-5xl font-bold text-balance poppins-thin leading-tight">
              {banner.title}
            </h1>
            <p className="py-6 leading-8 text-[17px]" inter>
              {banner.description}
            </p>
            <button className=" px-6 py-3 text-[17px] font-semibold text-white bg-[#218bf4] border-none rounded hover:scale-3d">
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
    title: "Accelerate Your Business Growth",
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
