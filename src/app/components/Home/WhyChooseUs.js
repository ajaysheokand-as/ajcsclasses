// src/app/components/WhyChooseUs.js
const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry-Level Curriculum",
      desc: "Courses designed with real-world job requirements in mind.",
      icon: "🎓",
    },
    {
      title: "Personalized Mentorship",
      desc: "Live doubt sessions and career guidance from experienced mentors.",
      icon: "👨‍🏫",
    },
    {
      title: "Hands-On Projects",
      desc: "Build real-world apps and strengthen your portfolio.",
      icon: "💻",
    },
    {
      title: "Affordable Pricing",
      desc: "Top-quality training without burning a hole in your pocket.",
      icon: "💰",
    },
    {
      title: "Lifetime Access",
      desc: "Access to all videos and materials anytime, forever.",
      icon: "📚",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-10">
          Why Choose <span className="text-[#4A91A4]">AJCSClasses?</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA] shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1D3E50] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
