import React from "react";
import { JobList } from "./JobList";
import { loadJobs } from "./requests";

export function JobBoard() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    loadJobs().then((jobs) => setJobs(jobs));
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
