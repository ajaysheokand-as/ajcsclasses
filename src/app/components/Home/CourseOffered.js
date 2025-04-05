// src/app/components/CoursesOffered.js
const courses = [
  {
    title: "MERN Stack Development",
    desc: "Master MongoDB, Express.js, React, and Node.js from scratch.",
    icon: "🚀",
  },
  {
    title: "Frontend Development",
    desc: "Learn HTML, CSS, JavaScript, and modern frameworks like React.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    desc: "Build robust backend systems using Node.js, Express, and Databases.",
    icon: "🛠️",
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Sharpen your problem-solving skills for interviews & coding rounds.",
    icon: "📘",
  },
  {
    title: "C & C++ Programming",
    desc: "Beginner to advanced programming in C and C++ with logic building.",
    icon: "💡",
  },
  {
    title: "Placement Preparation",
    desc: "Crack tech interviews with aptitude, DSA, HR questions & mock tests.",
    icon: "🎯",
  },
];

const CoursesOffered = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-10">
          Courses We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-[#1D3E50] mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
