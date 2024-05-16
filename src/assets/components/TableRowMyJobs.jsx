import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRowMyJobs = ({ job, idx, postedJobs, setPostedJobs }) => {
  const { _id, jobTitle, salaryRange, jobPosting, deadline } = job;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure??",
      text: "Operation cannot be reverted!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://career-path-server.vercel.app/myJobs/${id}`)
          .then((res) => {
            console.log(res.data);
            const remainingJobs = postedJobs.filter((job) => job._id !== id);
            setPostedJobs(remainingJobs);
            Swal.fire({
              title: "Success!",
              text: "Deleted Job successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          });
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
        <Link to={`/updateJob/${_id}`}>
          <button
            type="button"
            className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-blue-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none"
          >
            {/* span::before */}
            <span
              className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
              aria-hidden="true"
            />
            Update{/* span::after */}
            <span
              className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
              aria-hidden="true"
            />
            <span
              className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-red-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none"
        >
          {/* span::before */}
          <span
            className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full"
            aria-hidden="true"
          />
          <span
            className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
            aria-hidden="true"
          />
          Delete{/* span::after */}
          <span
            className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
            aria-hidden="true"
          />
          <span
            className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full"
            aria-hidden="true"
          />
        </button>
      </td>
    </tr>
  );
};

export default TableRowMyJobs;
