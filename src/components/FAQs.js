// src/components/FAQs.js
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onToggle}>
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#f5831e]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#f5831e]" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 animate-fadeIn">{answer}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Zeal Fabrication offer?",
      answer:
        "We specialize in custom metal fabrication, welding, structural steel work, and industrial metal solutions for both commercial and residential clients.",
    },
    {
      question: "How can I contact Zeal Fabrication?",
      answer:
        "You can reach us via the contact page or email us directly at info@zealfab.com.",
    },
    {
      question: "Do you handle custom fabrication projects?",
      answer:
        "Absolutely. We provide tailored fabrication solutions to match your unique design, specification, and budget.",
    },
    {
      question: "Where are you located?",
      answer:
        "We are based in Syokimau, Machakos county, Kenya. You can find our exact location and directions on the contact page.",
    },
    {
      question: "What materials do you work with?",
      answer:
        "We work with steel, stainless steel, aluminum, brass, and other metals depending on your project needs.",
    },
    {
      question: "How do I request a quote?",
      answer:
        "Visit our website and use the quote request form, or get in touch with us directly via phone or email.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#f5831e]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Answers to common questions about Zeal Fabrication and our services
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
