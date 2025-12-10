import { Link } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { GoArrowLeft } from "react-icons/go";

const Register = () => {
  const { theme } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="grid h-screen place-items-center">
      <div
        className={`w-[430px]  mx-auto  rounded-2xl shadow-lg p-6 md:p-8 ${
          theme === "light" ? "bg-base-100" : "bg-[#141e2b]"
        } `}
      >
        {/* header title */}
        <div className="flex justify-center mb-4">
          <h2 className="flex items-center gap-2 text-3xl font-bold text-center pb-4">
            <Link className="font-bold" to="/">
              <GoArrowLeft />
            </Link>
            Register now
          </h2>
        </div>

        {/* forms */}
        <form onClick={handleSubmit} className="space-y-6">
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type="url"
            placeholder="photo URL"
            name="name"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type="password"
            name="password"
            placeholder="password"
            id=""
          />

          <button className="w-full p-3 bg-gradient-to-r from-blue-400 via-blue-500 rounded-2xl  to-blue-400 text-white text-lg font-semibold">
            Submit
          </button>
          <p className="text-center">
            Already have an account{" "}
            <Link className="text-green-400 border-b font-bold" to="/logIn">
              login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
