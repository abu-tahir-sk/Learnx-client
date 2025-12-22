import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../hooks/useAuth";
import Swal from "sweetalert2";

const AddAssignments = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { theme } = useTheme();
  const { user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
     initialData.dueDate = startDate;
    console.log(initialData);

    for (const key in initialData) {
      if (!initialData[key]) {
        setError(`${key}  is required!`);
        return;
      }
    }
    setError("");

    fetch(`${import.meta.env.VITE_API_URL}/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success Assignment",
            text: "You clicked the button!",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/assignments");
        }
      });
  };
  return (
    <div className="pt-10">
      <div className="max-w-4xl mx-auto py-8 bg-base-100 mb-10 rounded">
        <div className="text-6xl font-extrabold py-6 px-8 md:w-3xl">
          Let's talk about everything!
        </div>

        <form onSubmit={handleSubmit} className="px-6">
          <div className="flex gap-6 w-full py-6">
            <div className="w-full">
              <input
                name="title"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                type="text"
                placeholder="Assignment Title"
              />
            </div>
            <div className="w-full">
              <textarea
                name="description"
                placeholder="Description"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
              ></textarea>
            </div>
          </div>
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <input
                name="marks"
                className={` ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                type="number"
                placeholder="Marks"
              />
            </div>
            <div className="w-full">
              <select
                defaultValue="Select difficulty" 
                name="difficulty"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
              >
                <option>Easy</option>

                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 w-full py-6">
            <div className="w-full">
              <DatePicker
                name="dueData"
                wrapperClassName="w-full"
                
                type="date"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="w-full">
              <input
                name="thumbnail"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                type="url"
                placeholder="Thumbnail Image URL"
              />
            </div>
          </div>
          <div className="flex gap-6 w-full pb-6 justify-center items-center">
            <div className="w-full">
              <input
                name="email"
                className={` ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                defaultValue={user?.email}
                placeholder="User Email"
                readOnly
              />
            </div>
            <div className="w-full">
              <input
                name="username"
                className={` ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                type="text"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
          </div>
          {error && <p className="py-3 text-red-500 text-center">{error} </p>}

          <div className="w-full flex flex-col justify-center">
            <button className="py-3 px-6 text-white font-bold bg-blue-500 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignments;
