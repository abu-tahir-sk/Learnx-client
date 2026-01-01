import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const MySubmitted = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:3000/assignments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [user.email]);
  return <div className="mt-24 w-6xl mx-auto">
    <h2 className="py-8 text-xl font-semibold  "><span className="">My Assignments</span>  : <span className="bg-blue-500 text-white p-1 rounded-full"> {assignments.length}</span></h2>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>Thumbnail & Title</th>
        <th>Assignments</th>
        <th>Difficulty</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1  const {
    _id,
    title,
    thumbnail,
    description,
    dueDate,
    difficulty,
    marks,
    email, */}
  
     {
      assignments.map(assignment =>  <tr key={assignment._id}>
     
        <td >
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={assignment.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{assignment.title}</div>
              <div className="text-sm opacity-50">{assignment.dueDate}</div>
            </div>
          </div>
        </td>
        <td>
          {assignment.email}
          <br />
          <span className="badge badge-ghost badge-sm">{assignment.marks}</span>
        </td>
        <td>{assignment.difficulty}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
     }
 
    </tbody>
  
  </table>
</div>
  </div>;
};

export default MySubmitted;
