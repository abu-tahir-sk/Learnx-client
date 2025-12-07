import { useEffect } from "react";
import { useState } from "react";
import AssignmentCard from "../../components/AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
   
  useEffect(()=>{
      fetch('http://localhost:3000/assignments')
      .then(res => res.json())
      .then(data =>{
            setAssignments(data)
      })
  },[])
  return <div className="py-12 ">
    
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6">
            {
               assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment} />)   
            }
      </div>
  </div>;
};

export default Assignments;
