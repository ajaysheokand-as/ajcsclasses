"use client";

import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">AJCSClasses</h2>
          <p className="text-sm">
            AJCSClasses is a dedicated online learning platform that offers
            expert-led training in MERN Stack development, C, C++, HTML, CSS,
            and JavaScript. Designed for beginners to advanced learners, we
            focus on practical, real-world skills to help students become
            confident full-stack developers.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Hisar, Haryana</li>
            <li>📧 ajcsclasses@gmail.com</li>
            <li>📞 +91-9896996916</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} AJCSClasses. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
