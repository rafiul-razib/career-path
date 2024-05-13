import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import TableRow from "../components/TableRow";
import TableRowMyJobs from "../components/TableRowMyJobs";

const MyJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/myJobs?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => setPostedJobs(res.data));
  }, [user]);

  return (
    <div>
      <div className="text-2xl font-bold text-gray-800">
        Here are the Jobs added by you
      </div>
      <table className="w-full">
        <thead className="min-w-full bg-gray-800 text-left text-gray-100">
          <tr>
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              SI
            </th>
            {/* ::Name */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Job Title
            </th>
            {/* ::Job Title */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Job Posted On
            </th>
            {/* ::Email */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Deadline
            </th>
            {/* ::Created Date */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Salary
            </th>
            {/* ::Actions */}
            <th
              className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {postedJobs.map((job, idx) => (
            <TableRowMyJobs key={idx} job={job} idx={idx}></TableRowMyJobs>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyJobs;
