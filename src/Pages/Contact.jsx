import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUsCard from "../components/ContactUsCard";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>GSM DevOps | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with GSM DevOps for software development, DevOps, cloud, and digital solutions. Contact us today for inquiries, consultations, and support."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/contact"
        />
      </Helmet>

      <ContactUsCard />
    </>
  );
};

export default Contact;