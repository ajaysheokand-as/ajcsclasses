import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-12 bg-[#1D3E50] text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">
          We’d love to hear from you! Please reach out with any questions or
          feedback.{" "}
        </p>
      </header>

      <main className="max-w-6xl mx-auto bg-white p-8 my-8 rounded-lg shadow-md flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact Details */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#1D3E50] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We’re here to answer your questions and help you get started.
          </p>
          <ul className="text-gray-700 space-y-3">
            <li>
              <strong>Address:</strong> 123 AJCS Lane, Learning City, India
            </li>
            <li>
              <strong>Email:</strong> contact@ajcsclasses.com
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Office Hours:</strong> Mon - Sat, 9am - 6pm
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D3E50] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#4A91A4] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <section className="max-w-6xl mx-auto my-12 ">
        <h2 className="text-2xl font-semibold text-[#1D3E50] mb-4">
          Find Us on the Map
        </h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863862144573!2d-122.42134248468342!3d37.77851987975805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ef11b5ab9%3A0xcdd9f81460f822ee!2sLearning%20Center!5e0!3m2!1sen!2sin!4v1647776527890!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
