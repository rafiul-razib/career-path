import React from "react";

const TableRow = ({ job, idx }) => {
  const { jobTitle, salaryRange, jobPosting, deadline } = job;

  console.log(idx);
  return (
    <tr
      className={`${
        idx % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
      } whitespace-nowrap`}
    >
      <td className="py-3 px-4 text-base text-gray-200 font-semibold">
        {idx + 1}
      </td>
      {/* ::User Name */}
      <td className="py-3 px-4 text-base text-gray-200 font-semibold">
        {jobTitle}
      </td>
      {/* ::User Job Title */}
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {jobPosting}
      </td>
      {/* ::User Email */}
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {deadline}
      </td>
      {/* ::User Created Date */}
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {salaryRange}
      </td>
      {/* ::Action Buttons */}
      <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
        {/* :::edit button */}
        <button
          type="button"
          className="text-sm text-indigo-400 font-semibold hover:underline hover:text-indigo-500"
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
