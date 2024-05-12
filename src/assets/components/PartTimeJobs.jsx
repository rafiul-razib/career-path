import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const PartTimeJobs = () => {
  const jobs = useLoaderData();
  //   console.log(jobs);
  return (
    <div>
      <div className="max-w-6xl mx-auto my-6 grid grid-cols-3 gap-6">
        {jobs.map((item, idx) => (
          <JobCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PartTimeJobs;
