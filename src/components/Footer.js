"use client";
import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Zeal Fabrication And Welding
            </h3>
            <p className="text-gray-300">
              Specialists in custom metal fabrication and industrial welding. Trusted by contractors, builders, and manufacturers across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-orange-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-orange-400">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-orange-400">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-gray-300 hover:text-orange-400">Help Center</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-orange-400">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-400 mr-2 mt-1" />
                Location: Syokimau, Katani Road, Machakos, Kenya
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-2" />
                Telephone: +254 748 041 852 / 0790 587 967
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-2" />
                Email: info@zealfab.com
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
                WhatsApp: Chat with us
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zeal Fabrication And Welding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
