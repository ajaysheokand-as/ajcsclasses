"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed w-full z-50 ${
        scrolled ? "bg-[#1D3E50] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl text-[#4A91A4] font-extrabold tracking-wider">
            AJCS<span className="text-white">Classes</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className={`${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1D3E50] text-center py-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
