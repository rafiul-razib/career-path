import axios from "axios";
import { useEffect, useState } from "react";

const useAllJobsData = () => {
  const [allJobs, setAllJobs] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/allJobs")
      .then((res) => setAllJobs(res.data));
  }, []);
  return allJobs;
};

export default useAllJobsData;
