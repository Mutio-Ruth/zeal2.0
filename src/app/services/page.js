"use client"; // This tells NextJs that this is a client component.
import React from "react";
import {
  Cog, // Equivalent to bi-gear-wide-connected for Custom Fabrication
  Zap, // Equivalent to bi-lightning-charge for Industrial Welding
  Building, // Equivalent to bi-building for Steel Structures
} from "lucide-react";

const Services = () => {
  // Updated services data to match Zeal Fabrication's Blazor version
  const services = [
    {
      icon: <Cog className="h-12 w-12" />, // lucide-react icon for Custom Fabrication
      title: "Custom Fabrication",
      description:
        "We design and fabricate custom metal components using modern tools and precision techniques.",
    },
    {
      icon: <Zap className="h-12 w-12" />, // lucide-react icon for Industrial Welding
      title: "Industrial Welding",
      description:
        "MIG, TIG, and arc welding services for structural integrity and long-lasting durability.",
    },
    {
      icon: <Building className="h-12 w-12" />, // lucide-react icon for Steel Structures
      title: "Steel Structures",
      description:
        "Fabrication and erection of steel beams, columns, trusses, and industrial framing systems.",
    },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section - Mimics Blazor's orangered background with gradient */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-16 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive fabrication and welding solutions for every project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Services Section */}
        <h1 className="text-4xl font-bold text-center mb-12 text-red-600">Our Services</h1> {/* Mimics Blazor's h1.section-title color */}

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center"> {/* Changed to 3 columns as per Blazor */}
          {services.map((service, index) => (
            <div
              key={index}
              // Mimics Blazor's .service-box styling
              className="p-6 bg-neutral-50 rounded-xl transition duration-300 hover:translate-y-[-5px] hover:shadow-xl"
            >
              {/* Mimics Blazor's icon styling and hover effect */}
              <div className="text-orange-500 mb-4 inline-block transition duration-300 hover:scale-125">
                {service.icon}
              </div>
              {/* Mimics Blazor's h5 and p styling */}
              <h3 className="text-2xl font-bold mt-2 text-black">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* The "Process Section" and "Quality Commitment" sections are removed to match the Blazor reference. */}
      </div>
    </div>
  );
};

export default Services;
