import React, { useState } from 'react';

const Reservation = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };




    

    
  return (
    <>
 

 


<section className="relative container mx-auto p-5">
      {/* Main container for the section */}<img
            src="/image_6.png"
            alt="Restaurant Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section - Form */}
        <div className="relative flex justify-center items-center">
          {/* Background image */}
          
          {/* Overlay to darken background */}
         

          <div className="relative z-20 p-10 rounded-lg w-full max-w sm:max-w">
            <h3 className="text-red-500 text-lg font-semibold">Booking Table</h3>
            <h2 className="text-4xl font-bold text-white mb-6">Make a Reservation</h2>

            <form className="space-y-4">
              {/* Date and Time Input Fields */}
              <div className="flex space-x-4">
                <div className="relative w-1/2">
                  <input
                    type="date"
                    placeholder="Select Date"
                    className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                  />
                  <span className="absolute right-3 top-4 text-gray-500">
                    📅
                  </span>
                </div>
                <div className="relative w-1/2">
                  <input
                    type="time"
                    placeholder="Select Time"
                    className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                  />
                  <span className="absolute right-3 top-4 text-gray-500">
                    ⏰
                  </span>
                </div>
              </div>

              {/* Guests Input Field */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Total Guests"
                  className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                />
                <span className="absolute right-3 top-4 text-gray-500">
                  👤
                </span>
              </div>

              {/* Message Input Field */}
              <div className="relative">
                <textarea
                  placeholder="Write Message"
                  className="w-full bg-white text-gray-700 p-4 rounded-lg h-28 focus:outline-none"
                ></textarea>
                <span className="absolute right-3 top-4 text-gray-500">
                  💬
                </span>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition">
                MAKE A RESERVATION
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Image */}
      
      </div>
    </section>
         
        
   </>
  )
}

export default Reservation