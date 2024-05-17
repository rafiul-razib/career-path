import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { ThemeContext } from "../Provider/ThemeProvider";
import axios from "axios";
import TableRowAppliedJobs from "../components/TableRowAppliedJobs";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [myAppliedJobs, setMyAppliedJobs] = useState([]);
  const url = `https://career-path-server.vercel.app/appliedJob?email=${user?.email}`;
  // console.log(myAppliedJobs);

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setMyAppliedJobs(res.data));
  }, [url]);

  // console.log(myAppliedJobs);

  const [displayJobs, setDisplayJobs] = useState([...myAppliedJobs]);

  // console.log(displayJobs);

  const handleSearch = (e) => {
    const searchedText = e.target.value;
    // console.log(searchedText);
    const searchedJob = myAppliedJobs.filter(
      (job) => job.job.jobCategory.toLowerCase() == searchedText.toLowerCase()
    );

    if (searchedText === "All Jobs") {
      setDisplayJobs(myAppliedJobs);
    } else {
      setDisplayJobs(searchedJob);
    }
  };
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-md font-bold">
            Pick the Job Category you want
          </span>
        </div>
        <select onChange={handleSearch} className="select select-bordered mb-2">
          <option selected>All Jobs</option>
          <option>On-site Job</option>
          <option>Remote Job</option>
          <option>Hybrid</option>
          <option>Part-Time</option>
        </select>
      </label>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className={`min-w-full ${
              theme === "dark"
                ? "bg-gray-800 text-left text-gray-100"
                : "text-gray-800 text-left bg-gray-100"
            }`}
          >
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
                Job Category
              </th>
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Salary Range
              </th>
              {/* ::Created Date */}
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Deadline
              </th>
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Applied On
              </th>
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                User Email
              </th>
            </tr>
          </thead>
          {displayJobs.length ? (
            <tbody>
              {displayJobs.map((application, idx) => (
                <TableRowAppliedJobs
                  key={application._idx}
                  application={application}
                  idx={idx}
                ></TableRowAppliedJobs>
              ))}
            </tbody>
          ) : (
            <tbody>
              {myAppliedJobs.map((application, idx) => (
                <TableRowAppliedJobs
                  key={application._idx}
                  application={application}
                  idx={idx}
                ></TableRowAppliedJobs>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
