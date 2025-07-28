"use client"; // This tells NextJs that this is a client component.
import React, { useRef, useState } from "react";
import { Phone, Mail, Clock, Send, CheckCircle, XCircle, MessageSquare } from "lucide-react"; // Added MessageSquare for WhatsApp icon

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // 'success' or 'error'

  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to display the custom toast
  const displayToast = (msg, type) => {
    setToastMessage(msg);
    setToastType(type);
    setShowToast(true);
    // Hide toast after 5 seconds, similar to Blazor
    setTimeout(() => {
      setShowToast(false);
      setToastMessage("");
      setToastType("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation (mimicking Blazor's [Required])
    if (!name.trim() || !email.trim() || !message.trim()) {
      displayToast("Please fill in all required fields (Name, Email, Message).", "error");
      return;
    }

    // Basic email format validation (still good to have for user data)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayToast("Please enter a valid email address.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Encode the message for URL safety, including all form fields
      const encodedMessage = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Message: ${message}`
      );

      // The WhatsApp phone number for Zeal Fabrication (from Blazor reference)
      const phoneNumber = "254790587967"; // Zeal Fabrication's WhatsApp number

      // Construct the full WhatsApp API link
      const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open the WhatsApp link in a new blank tab
      window.open(waLink, "_blank");

      console.log("WhatsApp link opened successfully");
      displayToast("WhatsApp opened successfully! Please send the pre-filled message.", "success");
      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Failed to open WhatsApp link:", error);
      displayToast("Failed to open WhatsApp. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-grow">
      {/* Hero Section - Mimics Blazor's orangered background with gradient */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-16 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Let's discuss your next fabrication or welding project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                {/* Mimics Blazor's phone icon styling */}
                <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +254 748 041 852 / 0790 587 967
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                {/* Mimics Blazor's email icon styling */}
                <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@zealfab.com</p>
                </div>
              </div>
              <div className="flex items-start">
                {/* Mimics Blazor's clock icon styling */}
                <Clock className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message </h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* Send Message Button - Mimics Blazor's rounded button and loading state */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed w-full"
              >
                {isSubmitting ? (
                  <>
                    Preparing WhatsApp...
                    <svg
                      className="ml-2 h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <MessageSquare className="ml-2 h-4 w-4" /> {/* WhatsApp icon */}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Toast Notification - Mimics Blazor's toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[1100]">
          <div
            className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-md ${
              toastType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            <span className="flex items-center">
              {toastType === "success" ? (
                <CheckCircle className="h-5 w-5 mr-2" />
              ) : (
                <XCircle className="h-5 w-5 mr-2" />
              )}
              {toastMessage}
            </span>
            <button
              type="button"
              className="ml-4 text-white opacity-80 hover:opacity-100"
              onClick={() => setShowToast(false)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
