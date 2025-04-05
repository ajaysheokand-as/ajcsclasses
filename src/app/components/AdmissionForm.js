"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx2QtMYI7Fn9KE6Jv_i_8yOoypkV1srPFx7Pxc4xtSQIkRULxoOOMhMvI6ngXCYhYWJ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Thanks for applying! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", course: "", city: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-[#1D3E50] mb-4">
        Apply for Free Counseling
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select a Course</option>
          <option value="mern">MERN Stack Development</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
        </select>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1D3E50] text-white py-2 rounded-md hover:bg-[#4A91A4] cursor-pointer transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
