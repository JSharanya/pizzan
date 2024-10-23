import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div class="flex font-sans bg-customDarkBlue text-white">
        <div class="flex-none w-64 relative">
          <img
            src="/logo.png"
            alt=""
            class="absolute items-center object-cover"
            loading="lazy"
          />
        </div>
        <div class="flex-auto">
          <div className="bg-red-600 text-sm py-1 flex justify-between items-center px-8 py-1">
            <span>Free Delivery on all orders over $50</span>
            <div className="flex space-x-4 items-center">
              {/* Location Icon and Address */}
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt />
                <p className="text-sm">Rd. Allentown, New Mexico 31134</p>
              </div>
              {/* Social Media Icons */}
              <span>|</span>
              <a href="#" className="text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <div>
              {/* <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div> */}
              {/* <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> */}

              <nav className="flex justify-between items-center py-3 px-8">
                {/* Left: Logo */}

                {/* Center: Navigation links */}
                <ul className="flex space-x-8 text-sm uppercase">
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Home +
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Menu +
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Shop +
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Pages +
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Blog +
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-red-500">
                      Contact Us
                    </a>
                  </li>
                </ul>

                {/* Right: Contact and Call to Action */}
                <div className="flex items-center space-x-6">
                  <div className="bg-[#010F1C] text-white  px-2 flex justify-between items-center">
                    {/* Call Section */}
                    <div className="flex items-center space-x-2 mr-5">
                      <FaPhone size={24} className="text-red-600" />
                      <div>
                        <p className="text-sm text-gray-400">Call Anytime</p>
                        <p className="text-sm font-bold">+123 (302) 555-0107</p>
                      </div>
                    </div>

                    {/* Search, Cart, and Book Button */}
                    <div className="flex items-center space-x-6">
                      {/* Search Icon */}
                      <FaSearch className="text-white cursor-pointer" />

                      {/* Cart Icon with Badge */}
                      <div className="relative cursor-pointer p-2">
                        <FaShoppingCart size={24} className="text-white" />
                        <span className="absolute top-0 right-0 bg-red-600 rounded-full px-2 text-xs">
                          0
                        </span>
                      </div>

                      {/* Book a Table Button */}
                      <button className="bg-red-600 text-white font-bold py-2 px-6 rounded flex items-center">
                        BOOK A TABLE <span className="ml-2">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
