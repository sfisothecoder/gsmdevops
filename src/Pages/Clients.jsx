import React from "react";
import { Helmet } from "react-helmet-async";
import ClientsPagination from "../components/ClientsPagination";

const Clients = () => {
  const currentUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Our Clients</title>
        <meta
          name="description"
          content="See how GSM DevOps partners with diverse clients to drive innovation and success across industries."
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <ClientsPagination />
    </>
  );
};

export default Clients;
