"use client";
import React from "react";
import Image from "next/image";
import CTABanner from "../components/Home/CTABanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="text-center py-12 bg-[#1D3E50] text-white">
        <h1 className="text-4xl font-bold">About AJCSClasses</h1>
        <p className="mt-2 text-lg">
          Empowering aspiring developers with modern tech education
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Our Mission
          </h2>
          <p>
            At AJCSClasses, our mission is to make high-quality tech education
            accessible and practical. We believe in learning by doing and
            provide real-world projects to help students build confidence.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Our Vision
          </h2>
          <p>
            We envision a future where anyone, regardless of background, can
            master full-stack development and land their dream job in tech
            through our personalized mentorship and industry-relevant training.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Industry-level Curriculum</li>
            <li>1-on-1 Mentorship</li>
            <li>Real-World Projects</li>
            <li>Affordable Fee Structure</li>
            <li>Lifetime Access to Resources</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Trainer Experience
          </h2>
          <p>
            With over 4 years of experience teaching the MERN Stack, our lead
            trainer brings hands-on expertise, passion for coding, and a track
            record of helping students achieve their career goals.
          </p>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
