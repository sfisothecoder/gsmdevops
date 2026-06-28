import React from "react";
import { Helmet } from "react-helmet-async";
import ClientsPagination from "../components/ClientsPagination";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Our Clients</title>
        <meta
          name="description"
          content="See how GSM DevOps partners with businesses across industries to deliver software development, DevOps, cloud, and digital transformation solutions."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/clients"
        />
      </Helmet>

      <ClientsPagination />
    </>
  );
};

export default Clients;