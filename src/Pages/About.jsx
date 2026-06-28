import React from "react";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | About Us</title>
        <meta
          name="description"
          content="Discover GSM DevOps's mission and vision. Learn how our innovative digital solutions can help your business thrive."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/about"
        />
      </Helmet>

      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <Vision />
      <Mission />
    </>
  );
};

export default About;