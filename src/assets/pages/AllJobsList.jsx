import { useLoaderData } from "react-router-dom";
import TableRow from "../components/TableRow";
import { useContext, useState } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const AllJobsList = () => {
  const data = useLoaderData();
  const [focused, setFocused] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [displayJobs, setDisplayJobs] = useState([...data]);

  const handleSearch = (e) => {
    const searchedText = e.target.value;
    const searchedJob = data.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchedText.toLowerCase())
    );

    setDisplayJobs(searchedJob);
  };

  return (
    <div className="bg-gray-800 overflow-x-auto">
      <div className={`relative  max-w-4xl mx-auto  bg-gray-800`}>
        {/* Label */}
        <label
          htmlFor="photoUrl"
          className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
            focused === 1
              ? "from-green-400 to-blue-400"
              : "from-gray-500 to-gray-500"
          }`}
        >
          Search Job
        </label>
        {/* Icon */}
        <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
          {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
        </span>
        {/* Input */}
        <input
          onChange={handleSearch}
          type="text"
          name="search"
          id="search"
          placeholder="Enter Job name here"
          className="mb-5 form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
          onFocus={() => setFocused(1)}
          onBlur={() => setFocused(null)}
        />
        {/* Border bottom effect */}
        <span
          className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
            focused === 1 ? "w-full" : "w-0"
          }`}
          aria-hidden="true"
        />
      </div>
      <table className="w-full">
        <thead
          className={`min-w-full bg-gray-800 text-left ${
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
          {displayJobs.map((job, idx) => (
            <TableRow key={idx} job={job} idx={idx}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobsList;
