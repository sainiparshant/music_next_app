"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Column 1 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Music School</h3>
          <p className="text-sm">
            Empowering students to unlock their musical potential through quality education and performance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/signup" className="hover:text-white">Sign Up</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/donate" className="hover:text-white">Support Us</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">123 Rhythm Lane<br />Music City, NY 10001</p>
          <p className="text-sm mt-2">Email: info@musicschool.com</p>
          <p className="text-sm">Phone: +1 555-123-4567</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs mt-12 text-gray-500">
        &copy; {new Date().getFullYear()} Music School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
