import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "../components/HomeHero";
import ClientsCarousel from "../components/ClientsCarousel";
import ServicesCards from "../components/ServicesCards";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Software Development & DevOps Solutions</title>
        <meta
          name="description"
          content="GSM DevOps provides innovative software development, DevOps, cloud, hosting, and digital solutions to help businesses grow."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/"
        />
      </Helmet>

      <HomeHero />
      <ServicesCards />
      <ClientsCarousel />
    </>
  );
};

export default Home;