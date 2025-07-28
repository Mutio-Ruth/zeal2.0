// B:\mytestProjects\PatriciaConstructions\v1\src\Pages\HelpCenter.js
import React from "react";
import FAQ from "../../components/FAQs";

const HelpCenter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Help Center</h1>
      <p className="text-gray-600 mb-4">
        Welcome to the Zeal Fabrication Help Center! Here you can find answers to
        common questions and get assistance with our services.
      </p>
      <h2 className="text-2xl font-bold mt-6">Contact Support</h2>
      <p className="text-gray-600 mb-4">
        If you need immediate assistance, please reach out to our support team:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Email:{" "}
          <a href="mailto:info@zealfab.com" className="text-[#f5831e]">
            info@zealfab.co.ke
          </a>
        </li>
        <li>
          Phone:{" "}
          <a href="tel:+254721922909" className="text-[#f5831e]">
            +254 748 041 852 / 0790 587 967
          </a>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-6">Resources</h2>
      <p className="text-gray-600 mb-4">
        Explore our resources for more information on our services:
      </p>
      <ul className="list-disc list-inside mb-4">
        {/* <li>
          <a href="/terms" className="text-[#f5831e]">
            Terms of Service
          </a>
        </li> */}
        <li>
          <a href="/privacy" className="text-[#f5831e]">
            Privacy Policy
          </a>
        </li>
        {/* <li>
          <a href="/faqs" className="text-[#f5831e]">
            Frequently Asked Questions
          </a>
        </li> */}
      </ul>

      <h2 className="text-2xl font-bold mt-6">Feedback</h2>
      <p className="text-gray-600 mb-4">
        We value your feedback! Please let us know how we can improve our
        services.
      </p>
      {/* <h2 className="text-2xl font-bold mt-6">Frequently Asked Questions</h2> */}
      <FAQ />
      <p className="text-gray-600 mb-4">Thank you for choosing Zeal Fabrication Ltd!</p>
    </div>
  );
};

export default HelpCenter;
