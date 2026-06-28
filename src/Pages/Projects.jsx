import React from "react";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Projects</title>
        <meta
          name="description"
          content="Explore the software development, DevOps, cloud, and digital transformation projects delivered by GSM DevOps."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/projects"
        />
      </Helmet>

      <div className="container bg-white min-h-[355px] flex mt-10 sm:mt-0">
        Projects
      </div>
    </>
  );
};

export default Projects;