import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
const AssignmentCard = ({ assignment }) => {
  const { title, thumbnail, description, dueDate, difficulty, marks } =
    assignment;
  const { theme } = useTheme();

  return (
    <div className={`card   rounded shadow-xl hover:shadow-[#218ce1]/30 text-(--text) transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500/5 ${theme === "light" ? "bg-base-100" : "bg-[#141e2b]"} `}>
      <div className="overflow-hidden rounded-lg relative group">
        <img
          src={thumbnail}
          alt={title}
          className="transition-transform duration-900  group-hover:scale-110"
        />
        <div class="absolute inset-0 group-hover:bg-[#218ce1]/30  rounded-xl"></div>
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 ">
          <span className="text-2xl bg-black/60 p-2 hover:bg-[#218ce1] hover:text-white rounded text-[#218ce1]">
            <MdZoomOutMap />
          </span>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="flex justify-between items-center gap-4 py-3">
          <div>
            <h4
              className={`px-2 py-[2] rounded-md font-semibold ${
                difficulty === "Easy" && "bg-green-600"
              } ${difficulty === "Medium" && "bg-amber-600"} ${
                difficulty === "Hard" && "bg-blue-600"
              }`}
            >
              {difficulty}
            </h4>
          </div>
          <div className="px-1 py-[2px] rounded-md border border-gray-700">
            <p className="text-gray-400">Due Date : {dueDate}</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold py-1">{title}</h2>
        <p className="text-[17px] font-normal text-[--desc-text]">{description}</p>
        <div className="flex justify-between items-end py-4">
          <div className="font-bold">Marks : {marks}</div>
          <div className="flex items-center gap-4 justify-end">
            <button className="text-xl font-bold bg-red-500 p-1 rounded text-white">
              <MdDelete />
            </button>
            <button className="text-xl font-bold bg-cyan-600 p-1 rounded text-white ">
              <BiSolidEdit />
            </button>
            <button className="font-bold ">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
