import { useTheme } from "../context/ThemeContext";

const AddAssignments = () => {
  const { theme } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch("http://localhost:3000/add-assignments", {
      method: "POST",
      headers: {
        "content-type": "application",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
                name="level"
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
              <input
                name="dueData"
                className={`  ${
                  theme === "light"
                    ? "bg-gray-200  placeholder:text-gray-400 border-gray-100"
                    : "bg-[#030c19] border-gray-700"
                } w-full py-3 outline-none border  focus:border-blue-400 px-6  rounded`}
                type="date"
                placeholder="Due Date"
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
                type="email"
                placeholder="User Email"
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
                placeholder="User Name"
              />
            </div>
          </div>

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
