import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobCard = ({ item }) => {
  const {
    _id,
    photoUrl,
    jobTitle,
    user,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPosting,
    deadline,
    totalApplicants,
  } = item;

  const navigate = useNavigate();

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

  return (
    <div className="col-span-1 group relative p-2 pb-5 flex flex-col items-center border-2 border-transparent rounded-xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm hover:shadow-xl hover:border-gray-500">
      <div className="relative max-h-52 rounded-2xl overflow-hidden">
        <img
          src={photoUrl}
          alt=""
          className="object-cover transition duration-200 ease-in transform group-hover:scale-105"
        />

        <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-gray-800 bg-opacity-30 text-xs text-white font-bold backdrop-filter backdrop-blur-sm">
          {jobCategory}
        </span>
      </div>
      {/* ::Details */}
      <div className="mt-2 px-2 w-full flex flex-col space-y-1">
        {/* :::name */}
        <h1 className="text-xl text-gray-800 font-bold">{jobTitle}</h1>
        <p className="text-sm text-gray-700 text-opacity-80 font-semibold tracking-wide group-hover:text-opacity-100">
          Posted on : {jobPosting}
        </p>
        {/* :::author */}
        <p className="flex items-center">
          <span className="text-xs text-gray-700 text-opacity-40 font-bold tracking-wide">
            Posted by : {user}{" "}
          </span>
        </p>

        <div>
          <p className="flex items-center">
            <span className="text-xs text-gray-700 text-opacity-40 font-bold tracking-wide">
              Application Deadline : {deadline}
            </span>
          </p>
          <p className="flex items-center">
            <span className="text-xs text-gray-700 text-opacity-40 font-bold tracking-wide">
              Salary Range : {salaryRange}
            </span>
          </p>
          <p className="flex items-center">
            <span className="text-xs text-gray-700 text-opacity-40 font-bold tracking-wide">
              Total Applicants : {totalApplicants}
            </span>
          </p>
        </div>
        {/* :::bid infos */}
        <span className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleViewDetails}
            className="mt-4 relative inline-flex items-center px-2.5 py-1.5 rounded-full bg-gradient-to-t from-gray-600 to-gray-200 text-xs text-white font-bold tracking-wide hover:to-gray-600"
          >
            View Details
          </button>
        </span>
      </div>
    </div>
  );
};

export default JobCard;
