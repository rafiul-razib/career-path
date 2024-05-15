import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRowAppliedJobs = ({ application, idx }) => {
  const { appliedOn, job, email } = application;

  const appliedDate = moment(new Date(appliedOn)).format("MMMM D, YYYY");

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
        {job.jobTitle}
      </td>
      {/* ::User Name */}
      <td className="py-3 px-4 text-base text-gray-200 font-semibold">
        {job.jobCategory}
      </td>
      {/* ::User Job Title */}
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {job.salaryRange}
      </td>
      {/* ::User Email */}
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {job.deadline}
      </td>
      <td className="py-3 px-4 text-base text-gray-400 font-medium">
        {appliedDate}
      </td>
      <td className="py-3 px-4 text-base text-gray-400 font-medium">{email}</td>
    </tr>
  );
};

export default TableRowAppliedJobs;
