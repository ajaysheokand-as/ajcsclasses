import Image from "next/image";

const MeetTrainer = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Trainer Image */}
        <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/AjAySHEOKAND.jpg" // Replace with your actual image
            alt="Trainer Ajay Sheokand"
            fill
            className="object-cover"
          />
        </div>

        {/* Trainer Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-4">
            Meet Your Trainer
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {`Hi, I'm`}
            <span className="font-semibold text-[#1D3E50]">Ajay Sheokand</span>,
            a passionate{" "}
            <span className="font-semibold">MERN Stack Trainer</span> with over{" "}
            <span className="font-semibold">4 years of experience</span> helping
            students master Full Stack Web Development.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            My goal is to empower you with real-world skills, industry-ready
            projects, and the confidence to crack job interviews. Let’s build
            your dev career together!
          </p>

          <button className="bg-[#1D3E50] text-white px-6 py-2 text-sm rounded-xl hover:bg-[#163144] transition">
            Follow on LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetTrainer;
