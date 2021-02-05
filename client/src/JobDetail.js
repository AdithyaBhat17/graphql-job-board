import React from "react";
import { Link } from "react-router-dom";
import { loadJob } from "./requests";

export function JobDetail({ match }) {
  const [job, setJob] = React.useState(undefined);

  const { jobId } = match.params;

  React.useEffect(() => {
    loadJob(jobId).then((job) => setJob(job));
  }, [jobId]);

  if (!job) return null;

  return (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  );
}
