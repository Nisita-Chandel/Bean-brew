import React from "react";

const Page4 = () => {
  return (
    <footer className="bg-[#371821] text-white font-serif mt-10">
      
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Products */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Products</h1>
          <p className="text-sm text-gray-300 leading-6">
            Discover premium coffee drinks made with fresh ingredients and
            crafted with love for every coffee lover.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Categories</h1>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Cold Coffee</li>
            <li>Milkshakes</li>
            <li>Espresso</li>
            <li>Latte</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Company Info</h1>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Follow Us</h1>

          <div className="flex gap-4 text-2xl">
            <i className="ri-instagram-line cursor-pointer hover:text-gray-300"></i>
            <i className="ri-facebook-circle-fill cursor-pointer hover:text-gray-300"></i>
            <i className="ri-youtube-line cursor-pointer hover:text-gray-300"></i>
            <i className="ri-twitter-x-line cursor-pointer hover:text-gray-300"></i>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 text-center py-4 text-sm text-gray-300">
        © 2026 Coffee House | All Rights Reserved
      </div>
    </footer>
  );
};

export default Page4;