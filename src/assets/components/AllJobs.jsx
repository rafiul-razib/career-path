import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";
import useAllJobsData from "../Hooks/useAllJobsData";

const AllJobs = () => {
  const jobs = useLoaderData();
  // const allJobs = useAllJobsData();
  // console.log(allJobs);
  console.log(jobs);

  return (
    <div>
      <div className="max-w-6xl mx-auto my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((item, idx) => (
          <JobCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
