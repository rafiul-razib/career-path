import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ job, idx }) => {
  const { _id, jobTitle, salaryRange, jobPosting, deadline } = job;

  const handleViewDetails = () => {
    Swal.fire({
      title: "Alert!!",
      text: "You need to login to view details!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed to Login!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/job/${_id}`);
      }
    });
  };

  // console.log(idx);
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
        <Link to={`/job/${_id}`}>
          <button
            type="button"
            className="text-sm text-indigo-400 font-semibold hover:underline hover:text-indigo-500"
          >
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
