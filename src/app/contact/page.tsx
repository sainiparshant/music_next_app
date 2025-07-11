"use client";
import React from "react";

function ContactPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-16 px-4 mt-20 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">Contact Us</h1>
        <p className="text-sm text-gray-400 mb-10 ">
          Have a question or need help? Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-6 rounded w-fit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
