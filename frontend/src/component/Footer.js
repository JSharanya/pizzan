import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pl-10 pr-10 ">
          {/* About Restaurant */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Restaurant</h3>
            <div className="h-0.5 bg-red-600 w-16  group-hover:w-full transition-all duration-500"></div>
            <div className="border-red-50"></div>
            <p className="text-gray-400 mb-4 mt-2">
              Quickly supply alternative strategic theme areas vis-a-vis B2C
              mindshare. Objectively repurpose stand-alone synergy via
              user-centric architectures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Menu</h3>
            <div className="h-0.5 bg-red-600 w-16  group-hover:w-full transition-all duration-500"></div>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li className="flex gap-2">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Chicken Barger
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Brief Pizza
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Fresh Vegetable
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Sea Foods
              </li>
              <li className="flex gap-2">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Indian Kabab
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
            <div className="h-0.5 bg-red-600 w-16  group-hover:w-full transition-all duration-500"></div>
            <ul className="space-y-4 mt-2">
              <li className="flex items-center">
                <img
                  src="https://pinchofyum.com/wp-content/uploads/Avocado-Caesar-Green-Beans-finished-800x800.jpg"
                  alt="post"
                  className="w-12 h-12 rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-white">
                    10 Reasons To Do A Digital Detox Challenge
                  </h4>
                  <div className="flex gap-2">
                    <svg
                      className="w-6 h-6 text-red-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm">21 June, 2023</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="post"
                  className="w-12 h-12 rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-white">
                    New Restaurant Town Our Pie Award Contract
                  </h4>
                  <div className="flex gap-2">
                    <svg
                      className="w-6 h-6 text-red-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                    <span className="text-gray-400 text-sm">21 June, 2023</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Now</h3>
            <div className="h-0.5 bg-red-600 w-16  group-hover:w-full transition-all duration-500"></div>
            <ul className="text-gray-400 space-y-2 mt-2">
              <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center bg-red-600 rounded-full p-1 w-5 h-5">
      <FaMapMarkerAlt className="text-white text-xl" />
    </div>
                
                <div>
                  <p>
                    1403 Washington Ave, New Orleans, LA 70130, United States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center bg-red-600 rounded-full p-1 w-5 h-5">
                <FaPhoneAlt className="text-white text-xl" /></div>
                <div>
                  <p>+(1) 123 456 7890</p>
                  <p>+(1) 098 765 4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center bg-red-600 rounded-full p-1 w-5 h-5">
                <FaEnvelope className="text-white text-xl" /></div>
                <div>
                  <p>info@pizzan.com</p>
                  <p>info.example@pizzan.com</p>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 flex items-center justify-between bg-gray-800 py-4 px-8 mx-6">
          <h4 className="text-lg font-semibold">Subscribe Our Newsletter</h4>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              className="py-2 px-4 rounded-md focus:outline-none"
              placeholder="Email Address"
            />
            <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" text-gray-400 mt-6 mx-7 flex flex-col-reverse justify-between pt-5 pb-10  lg:flex-row">
          <p>Copyright © 2023 Themeholy. All Rights Reserved. </p>
          <p className="gap-1 col-start-1 col-end-3">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
