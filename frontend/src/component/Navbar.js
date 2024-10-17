import React from 'react'

const Navbar = () => {
  return (
    <div>
          <header className="bg-black text-white">
    {/* Top Row with Logo and Free Delivery Banner */}
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4">
      {/* Logo and Free Delivery */}
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <div className="text-red-600 font-bold text-xl">
          <span className="flex items-center">
            <span className="text-3xl">🍴</span>
            <span className="ml-2">PIZZAN</span>
          </span>
        </div>
        <div className="hidden sm:block bg-red-600 text-white py-1 px-3 rounded-full text-xs lg:text-sm">
          Free Delivery on all orders Over $50
        </div>
      </div>

      {/* Contact and Search Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-red-600">📞</span>
          <div className="text-xs lg:text-sm">
            <span>Call Anytime</span>
            <br />
            <span className="font-bold">+123 (302) 555-0107</span>
          </div>
        </div>
        <div className="relative">
          <input
            className="border border-white bg-black p-2 rounded-full text-white text-xs lg:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="relative cursor-pointer">
          <span>🛒</span>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2">0</span>
        </div>
        <button className="hidden sm:block bg-red-600 text-white py-2 px-3 rounded-full text-xs lg:text-sm">
          BOOK A TABLE
        </button>
      </div>
    </div>

    {/* Navigation Menu */}
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 py-3 border-t border-gray-700">
      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 text-xs sm:text-sm lg:text-base">
        <span className="cursor-pointer">HOME +</span>
        <span className="cursor-pointer">MENU +</span>
        <span className="cursor-pointer">SHOP +</span>
        <span className="cursor-pointer">PAGES +</span>
        <span className="cursor-pointer">BLOG +</span>
        <span className="cursor-pointer">CONTACT US</span>
      </div>
      <button className="sm:hidden bg-red-600 text-white py-2 px-3 rounded-full text-xs lg:text-sm">
        BOOK A TABLE
      </button>
    </div>

    {/* Bottom Row with Location and Social Icons */}
    <div className="bg-gray-900 py-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs lg:text-sm">
        <div className="flex justify-center sm:justify-start">📍 Rd. Allentown, New Mexico 31134</div>
        <div className="flex space-x-3 mt-2 sm:mt-0">
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">🔗</span>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar