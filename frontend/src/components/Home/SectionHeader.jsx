import React from "react";

const SectionHeader = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-24 px-8 text-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Change Through <br /> Connected Giving
        </h1>
        <p className="mt-4 text-lg">
          Join a community of changemakers who are transforming lives through strategic and impactful philanthropy.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Start Your Journey
          </button>
          <button className="border-2 border-white px-6 py-3 font-semibold rounded-lg hover:bg-white hover:text-indigo-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
