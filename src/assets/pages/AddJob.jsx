import { useState } from "react";
import DateSelector from "../components/DateSelector";

const AddJob = () => {
  const [focused, setFocused] = useState(false);

  const [applicationDeadline, setApplicationDeadline] = useState(null);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const jobTitle = form.jobTitle.value;
    const user = form.user.value;
    const jobCategory = form.jobCategory.value;
    const salaryRange = form.salaryRange.value;
    const jobDescription = form.jobDescription.value;
    const jobPosting = form.jobPostingDate.value;
    const deadline = applicationDeadline;
    const totalApplicants = form.totalApplicants.value;

    console.log({
      photoUrl,
      jobTitle,
      user,
      jobCategory,
      salaryRange,
      jobDescription,
      jobPosting,
      deadline,
      totalApplicants,
    });
  };
  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-gray-800">
      <form onSubmit={handleAddJob}>
        <div className="my-5 relative overflow-hidden">
          {/* Label */}
          <label
            htmlFor="search"
            className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
              focused === 1
                ? "from-green-400 to-blue-400"
                : "from-gray-500 to-gray-500"
            }`}
          >
            Photo URL
          </label>
          {/* Icon */}
          <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
            {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
          </span>
          {/* Input */}
          <input
            required
            type="text"
            name="photoUrl"
            id="photoUrl"
            placeholder="Photo URL"
            className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
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
        <div className="grid grid-cols-2 gap-4">
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="photoUrl"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 2
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Job Title
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            <input
              required
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(2)}
              onBlur={() => setFocused(null)}
            />
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 2 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="user"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 3
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              User Name
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            <input
              type="user"
              name="user"
              id="user"
              placeholder="User"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(3)}
              onBlur={() => setFocused(null)}
            />
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 3 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="jobCategory"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 4
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Job Category
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            {/* <input
              type="text"
              name="jobCategory"
              id="jobCategory"
              placeholder="Job Category"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(4)}
              onBlur={() => setFocused(null)}
            /> */}
            <select
              name="jobCategory"
              id="jobCategory"
              placeholder="Job Category"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-gray-700  text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(4)}
              onBlur={() => setFocused(null)}
            >
              <option value="On-site Job">On-site Job</option>
              <option value="Remote Job">Remote Job</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part-Time">Part-Time</option>
            </select>
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 4 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="salaryRange"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 5
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Salary Range
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            <input
              type="text"
              name="salaryRange"
              id="salaryRange"
              placeholder="Salary Range"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(5)}
              onBlur={() => setFocused(null)}
            />

            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 5 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="jobDescription"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 6
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Job Description
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            <textarea
              type="text"
              name="jobDescription"
              id="jobDescription"
              placeholder="Job Description"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(6)}
              onBlur={() => setFocused(null)}
            />
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 6 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="jobPostingDate"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 7
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Job Posting Date
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}

            <input
              type="date"
              name="jobPostingDate"
              id="jobPostingDate"
              placeholder="Job Posting Date"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(7)}
              onBlur={() => setFocused(null)}
            />
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 7 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="applicationDeadline"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 8
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Application Deadline
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            <DateSelector setApplicationDeadline={setApplicationDeadline} />
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 8 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
          <div className="my-5 relative overflow-hidden">
            {/* Label */}
            <label
              htmlFor="applicantsNumber"
              className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                focused === 9
                  ? "from-green-400 to-blue-400"
                  : "from-gray-500 to-gray-500"
              }`}
            >
              Total Applicants
            </label>
            {/* Icon */}
            <span className="absolute bottom-2 left-0 pl-3 inline-flex items-center pointer-events-none">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
            </span>
            {/* Input */}
            <input
              type="number"
              defaultValue={0}
              name="totalApplicants"
              id="totalApplicants"
              placeholder="Total Applicants"
              className="form-input pl-11 w-full border-0 border-b-2 border-gray-500 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0"
              onFocus={() => setFocused(9)}
              onBlur={() => setFocused(null)}
            />
            {/* Border bottom effect */}
            <span
              className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-in transform ${
                focused === 9 ? "w-full" : "w-0"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <button
            className="btn bg-green-600 opacity-65 w-full py-2 rounded-lg text-white font-bold"
            type="submit"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
