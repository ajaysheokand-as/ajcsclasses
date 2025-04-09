"use client";
import AdmissionForm from "../AdmissionForm";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F7FA] overflow-hidden min-h-screen flex items-center py-8 md:py-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 min-h-full">
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
