import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import services from "../data/services";

const ServicesCards = () => {
  return (
    <div className="bg-gray-200">
      <section className="container mx-auto py-10 relative mt-1">
        <div>
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl font-semibold text-center mb-6 text-secondary"
          >
            Explore Our Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              key={service.id}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-[0_4px_8px_0_rgba(251,138,2,0.7)] hover:-translate-y-1 cursor-pointer ${
                service.comingSoon ? "opacity-50" : ""
              }`}
            >
              <div className="flex justify-center mb-5">
                <img
                  src={service.icon}
                  alt={`${service.name} icon`}
                  className="w-24 h-24 rounded-full"
                  width={96}
                  height={96}
                />
              </div>

              <h2 className="text-center text-xl font-semibold mb-2">
                {service.name}
              </h2>

              <p className="text-center text-gray-600 mb-4">
                {service.description}
              </p>

              {!service.comingSoon && (
                <div data-aos="zoom-in" className="flex justify-end mt-5">
                  <Link
                    href="/services"
                    className="btn-primary flex items-center"
                  >
                    <FaArrowRight className="hover:translate-x-2 duration-300" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesCards;