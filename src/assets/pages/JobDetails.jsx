import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    photoUrl,
    jobTitle,
    user,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPosting,
    deadline,
    totalApplicants,
  } = job;
  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-5">
        {/* :PRODUCT PICTURE */}
        <div className="order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm border-2 border-gray-200">
          <img
            src={job.photoUrl}
            alt={job.jobTitle}
            className="object-contain w-full h-80 lg:h-full"
          />
        </div>

        {/* :PRODUCT DETAILS */}
        <div className="order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
          {/* ::Name */}
          <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">
            {job.jobTitle}
          </h1>
          {/* ::Price & Rating */}
          <div className="mt-5 flex items-center">
            {/* :::Price */}
            <p className="text-md text-gray-700 font-normal">
              {job.jobDescription}
            </p>
          </div>

          {/* ::Availability */}
          <div className="w-full flex justify-center">
            <div className="mt-12">
              <p className="space-x-1 text-2xl text-gray-700 font-bold">
                Salary Range : {job.salaryRange}
              </p>
            </div>
          </div>

          {/* ::Add to Cart Button */}
          <button className="mt-10 py-2 w-full inline-block rounded-md bg-red-500 text-base text-white font-semibold tracking-wide hover:bg-red-600">
            Apply
          </button>
          {/* ::Lifetime Guarantee */}
          <p className="mt-3 w-full inline-flex justify-center items-center text-sm text-gray-500 font font-semibold">
            Total Applicants : {job.totalApplicants}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
