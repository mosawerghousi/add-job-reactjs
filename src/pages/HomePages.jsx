import React from "react";
import Hero from "../components/Hero";

import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

import ViewAllJobs from "../components/ViewAllJobs";

const HomePages = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePages;
