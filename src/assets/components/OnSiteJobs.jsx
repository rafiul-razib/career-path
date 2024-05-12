import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";

const OnSiteJobs = () => {
  const onSiteJobs = useLoaderData();
  console.log(onSiteJobs);
  return (
    <div>
      <div className="max-w-6xl mx-auto my-6 grid grid-cols-3 gap-6">
        {onSiteJobs.map((item, idx) => (
          <JobCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OnSiteJobs;
