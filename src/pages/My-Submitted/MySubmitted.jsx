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
  return <div className="mt-24">my assignments : {assignments.length}</div>;
};

export default MySubmitted;
