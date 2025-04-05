import React from "react";
import Header from "../components/common/Header";

const TermsConditionsPage = () => {
  return (
    <>
      <Header title="Terms and Conditions" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-base leading-relaxed">
              By accessing and using AJCSClasses, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              2. Intellectual Property
            </h2>
            <p className="text-base leading-relaxed">
              The content, layout, design, data, graphics and other materials on
              this site are protected by intellectual property laws and are
              owned by AJCSClasses.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-base leading-relaxed">
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              AJCSClasses will not be liable for any damages or losses resulting
              from your use of the site or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className="text-base leading-relaxed">
              We reserve the right to update these terms at any time. Continued
              use of the site constitutes your acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;
