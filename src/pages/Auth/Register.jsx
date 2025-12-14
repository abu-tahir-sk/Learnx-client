import { Link, useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));

    console.log(name, photoURL, email, password);
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
        <form onSubmit={handleSubmit} className="space-y-6">
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
            name="photoURL"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-400 placeholder-gray-500"
            type={show ? "password":"type"}
            name="password"
            placeholder="password"
            id=""
          />
          <div  className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onClick={()=>setShow(!show)}
                    defaultChecked
                    className="checkbox text-gray-700 bg-white"
                  />
                  <span>Show Password</span>
                </div>
             

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
