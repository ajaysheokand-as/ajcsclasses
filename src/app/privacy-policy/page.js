import React from "react";
import Header from "../components/common/Header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header title="Privacy Policy" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              At AJCSClasses, your privacy is important to us. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and course preferences through our forms
              and interactions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used to contact you, provide course details,
              process enrollments, and improve our offerings. We do not sell
              your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal data from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, feel free to
              reach out at{" "}
              <a
                href="mailto:ajcsclasses@gmail.com"
                className="text-blue-600 underline"
              >
                ajcsclasses@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
