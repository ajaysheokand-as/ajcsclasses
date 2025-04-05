"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is the duration of each course?",
    answer:
      "Each course lasts 8–12 weeks depending on the module and pace. We also offer lifetime access to materials.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes, upon successful completion of the course and project submission, you'll receive an industry-recognized certificate.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Absolutely! Our courses are designed for both beginners and intermediate developers looking to upskill.",
  },
  {
    question: "Are the sessions live or recorded?",
    answer:
      "We offer both live interactive sessions and recorded content so you can learn at your own pace.",
  },
  {
    question: "Do you offer job placement support?",
    answer:
      "Yes, we provide resume reviews, mock interviews, LinkedIn optimization, and real job referrals.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3E50] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <button
                className="w-full text-left px-6 py-4 font-medium text-[#1D3E50] flex justify-between items-center hover:text-blue-600 cursor-pointer"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
