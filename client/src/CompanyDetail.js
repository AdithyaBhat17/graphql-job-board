import React from "react";
import { JobList } from "./JobList";
import { loadCompany } from "./requests";

export function CompanyDetail({ match }) {
  const [company, setCompany] = React.useState();

  const { companyId } = match.params;

  React.useEffect(() => {
    loadCompany(companyId).then((company) => setCompany(company));
  }, [companyId]);

  if (!company) return null;

  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h5>Jobs at {company.name}</h5>
      <JobList jobs={company.jobs} />
    </div>
  );
}
