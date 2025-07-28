// B:\mytestProjects\PatriciaConstructions\v1\src\Pages\Support.js
import React from "react";
import FAQ from "../../components/FAQs"; // Assuming you have the FAQ component created

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <p className="text-gray-600 mb-4">
        At Panfram Ltd, we are here to help you. If you have any questions or
        need assistance, please refer to our Help Center or FAQs below.
      </p>

      <h2 className="text-2xl font-bold mt-6">Help Center</h2>
      <p className="text-gray-600 mb-4">
        For any inquiries or support requests, please contact us at
        info@zealfab.com or call us at +254 790 587 967/+254 748 041 852 .
      </p>

      <h2 className="text-2xl font-bold mt-6">Frequently Asked Questions</h2>
      <FAQ />
    </div>
  );
};

export default Support;
