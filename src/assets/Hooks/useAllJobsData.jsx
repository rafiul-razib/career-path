import axios from "axios";
import { useEffect, useState } from "react";

const useAllJobsData = () => {
  const [allJobs, setAllJobs] = useState();
  useEffect(() => {
    axios
      .get("https://career-path-server.vercel.app/allJobs")
      .then((res) => setAllJobs(res.data));
  }, []);
  return allJobs;
};

export default useAllJobsData;
