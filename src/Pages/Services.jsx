import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesPage from "../components/ServicesPage";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Our Services</title>
        <meta
          name="description"
          content="Explore our range of digital solutions, including web hosting, development, and marketing strategies. Discover how GSM DevOps can help grow your business."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/Services"
        />
      </Helmet>

      <ServicesPage />
    </>
  );
};

export default Services;