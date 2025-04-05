"use client";
import { useState } from "react";
import AdmissionForm from "../AdmissionForm";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Form Submitted! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", course: "" });
      } else {
        alert("Something went wrong. Please try again.");
        console.error(result);
      }
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    }
  };

  return (
    <section className="bg-[#F5F7FA] py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Side - Highlights */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D3E50]">
            Master MERN Stack with AJCSClasses
          </h1>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            Learn Web Development from{" "}
            <span className="text-[#1D3E50] font-bold">Industry Experts</span>{" "}
            and become a
            <span className="text-[#1D3E50] font-bold">
              {" "}
              Full-Stack Developer
            </span>{" "}
            with
            <span className="text-[#1D3E50] font-bold"> Real Projects</span> &
            <span className="text-[#1D3E50] font-bold"> Hands-on Learning</span>
            .
          </p>
          <ul className="list-disc text-gray-700 space-y-2 ml-6">
            <li>Live Online Classes & Recorded Sessions</li>
            <li>100% Placement Assistance</li>
            <li>Certification After Completion</li>
          </ul>
        </div>

        {/* Right Side - Admission Form */}
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
