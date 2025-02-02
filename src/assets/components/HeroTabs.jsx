import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Provider/ThemeProvider";

const HeroTabs = () => {
  const { theme } = useContext(ThemeContext);

  const tabs = [
    { name: "All Jobs", jobCategory: "All jobs", link: "" },
    { name: "On-site Jobs", jobCategory: "On-site Job", link: "onSiteJobs" },
    { name: "Remote Jobs", jobCategory: "Remote Job", link: "remoteJobs" },
    { name: "Hybrid Jobs", jobCategory: "Hybrid", link: "hybridJobs" },
    { name: "Part-Time Jobs", jobCategory: "Part-Time", link: "partTimeJobs" },
  ];

  const [jobs, setJobs] = useState([]);
  // const [selectedJobs, setSelectedJobs] = useState(jobs);

  useEffect(() => {
    fetch("https://career-path-server.vercel.app/allJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [currentTab, setCurrentTab] = useState("All Jobs");
  console.log(currentTab);

  return (
    <div
      className={`mt-4 ${theme === "dark" ? "text-white" : "text-gray-700"}`}
    >
      <div className="text-center my-12">
        <h1 className="font-bold text-4xl mb-5">Our Jobs Categories</h1>
        <p className="font-semibold text-md max-w-5xl mx-auto">
          We cater to diverse career aspirations with a comprehensive array of
          job categories. From technology to healthcare, finance to creative
          arts, explore opportunities tailored to your expertise and interests.
        </p>
      </div>
      <div className="mx-auto w-full max-w-5xl rounded-lg sm:border border-gray-200 bg-white overflow-hidden">
        {/* :SMALL DEVICES */}
        {/* <div className="mx-auto w-full max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>

          <select
            name="current-tab"
            id="current-tab"
            value={currentTab}
            onChange={(event) => setCurrentTab(event.target.value)}
            defaultValue={tabs.find((tab) => tab.name === currentTab).name}
            className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
          >
            {tabs.map((tab) => (
              <option
                key={tab.name}
                value={tab.name}
                onClick={() => setCurrentTab(tab.name)}
              >
                <Link to={tab.link}>
                  <span>{tab.name}</span>
                </Link>
              </option>
            ))}
          </select>
        </div> */}

        {/* :LARGE DEVICES */}
        <div className=" sm:block overflow-hidden">
          {/* ::Navigation Tabs */}
          <nav aria-label="Tabs">
            <ul className="grid grid-flow-col auto-cols-fr">
              {tabs.map((tab, index) => (
                <li
                  key={tab.name}
                  className={`text-base ${
                    tab.name === currentTab
                      ? "bg-purple-500 text-white"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-500"
                  } ${index !== 0 && "border-l border-gray-200"}`}
                >
                  <Link to={tab.link}>
                    <button
                      type="button"
                      className="p-3 w-full inline-flex justify-center items-center text-center text-xs lg:text-base font-semibold"
                      onClick={() => setCurrentTab(tab.name)}
                    >
                      {tab.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      {/* <div className="max-w-6xl mx-auto my-6 grid grid-cols-3 gap-6">
        {jobs.map((item, idx) => (
          <JobCard key={idx} item={item} />
        ))}
      </div> */}
    </div>
  );
};

export default HeroTabs;
