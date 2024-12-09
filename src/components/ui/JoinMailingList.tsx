import React from "react";

const JoinMailingList: React.FC = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          JOIN OUR MAILING LIST <br />
          AND NEVER MISS AN UPDATE
        </h2>

        {/* Form */}
        <form className="flex flex-col items-center space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-3/4 max-w-md bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
            required
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition shadow-md w-3/4 max-w-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinMailingList;
