import {
  Briefcase,
  FileText,
  GraduationCap,
  Users,
  Linkedin,
} from "lucide-react";

const placements = [
  {
    icon: <Briefcase size={32} className="text-[#1D3E50]" />,
    title: "100% Placement Support",
    desc: "We guide you from skill-building to job interviews with full dedication.",
  },
  {
    icon: <Linkedin size={32} className="text-[#1D3E50]" />,
    title: "LinkedIn Profile Boost",
    desc: "Build an impressive online presence with resume, GitHub, and LinkedIn optimization.",
  },
  {
    icon: <FileText size={32} className="text-[#1D3E50]" />,
    title: "Resume Building",
    desc: "Get a job-ready resume tailored to the tech industry by experts.",
  },
  {
    icon: <Users size={32} className="text-[#1D3E50]" />,
    title: "Mock Interviews",
    desc: "Practice with real interview questions, build confidence, and get feedback.",
  },
  {
    icon: <GraduationCap size={32} className="text-[#1D3E50]" />,
    title: "Career Mentorship",
    desc: "We offer 1-on-1 sessions to help you set and achieve your career goals.",
  },
];

const PlacementSupport = () => {
  return (
    <section className="py-20 px-4 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-6">
          Placement & Career Assistance
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From building a strong portfolio to cracking your dream job interview,
          we’re with you at every step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-[#1D3E50] text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;
