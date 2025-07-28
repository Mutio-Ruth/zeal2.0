"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  const whyChooseUs = [
    "Certified welders & fabricators",
    "Custom solutions with precision",
    "On-time project delivery",
    "Trusted by top contractors",
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-16 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">About Zeal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building stronger futures through expert metal fabrication and welding solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-red-600 text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg mt-2 max-w-4xl mx-auto">
            At Zeal, we bring over a decade of expertise in precision metalwork. From concept to completion, our team delivers custom fabrication and welding services that meet the highest standards in durability, safety, and design. Whether it's industrial, commercial, or construction-based, we ensure every project is built to last.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">🚀 Our Mission</h3>
              <p className="text-gray-600">
                To empower industries with high-quality fabrication and welding solutions that reflect integrity, innovation, and a deep respect for safety and timelines.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">🌟 Why Choose Us</h3>
              <ul className="space-y-2">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <CheckCircle className="text-green-500 h-5 w-5 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
