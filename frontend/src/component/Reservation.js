import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Reservation = () => {
  // Initial form state
  const initialFormData = {
    customerName: '',
    contactInfo: '',
    reservationDate: '',
    reservationTime: '',
    numberOfPeople: '',
  };

  // State to manage form inputs
  const [formData, setFormData] = useState(initialFormData);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Show success toast
        toast.success('Reservation made successfully!', {
          position: "top-right",
          autoClose: 3000,
        });

        // Reset form fields to initial empty state after successful submission
        setFormData(initialFormData);
        
      } else {
        toast.error('Failed to make reservation', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error('Error making reservation', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (

    <div >
       <section className="relative ">
        <ToastContainer />
        <img
          src="/image_6.png"
          alt="Restaurant Background"
          className="absolute inset-0 w-full h-full object-cover z-0 "

        />
        <div className=" px-5 py-14  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="relative flex justify-center items-center">
            <div className="relative z-20 p-10 rounded-lg w-full max-w sm:max-w">
              <h3 className="text-red-500 text-lg font-semibold">
                Booking Table
              </h3>
              <h2 className="text-4xl font-bold text-white mb-6">
                Make a Reservation
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Date and Time Input Fields */}
                <div className="flex space-x-4">
                  <div className="relative w-1/2">
                    <input
                      type="text"
                      name="customerName"
                      placeholder="Name"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="relative w-1/2">
                    <input
                      type="text"
                      name="contactInfo"
                      placeholder="Phone Number"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="relative w-1/2">
                    <input
                      type="date"
                      name="reservationDate"
                      placeholder="Select Date"
                      value={formData.reservationDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                    />
                    <span className="absolute right-3 top-4 text-gray-500">📅</span>
                  </div>
                  <div className="relative w-1/2">
                    <input
                      type="time"
                      name="reservationTime"
                      placeholder="Select Time"
                      value={formData.reservationTime}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                    />
                    <span className="absolute right-3 top-4 text-gray-500">⏰</span>
                  </div>
                </div>

                {/* Guests Input Field */}
                <div className="relative">
                  <input
                    type="number"
                    name="numberOfPeople"
                    placeholder="Total Guests"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
                  />
                  <span className="absolute right-3 top-4 text-gray-500">👤</span>
                </div>

                {/* Submit Button */}
                <button 
                 type="submit" 
                className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition" >
                  MAKE A RESERVATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

  
    </div>
    
     
    
  );
};

export default Reservation;



{/* <section class="relative">
<ToastContainer />
 <img
 src="/image_6.png"
 alt="Restaurant Background"
 className="absolute inset-0 w-full h-full object-cover z-0 "

/>
<div class="container mx-auto  px-5 py-24 md:flex-row flex-col items-center grid grid-cols-1 lg:grid-cols-2 ">
<div className="relative flex justify-center items-center">
   <div className="relative  p-10 rounded-lg w-full max-w sm:max-w">
     <h3 className="text-red-500 text-lg font-semibold">
       Booking Table
     </h3>
     <h2 className="text-4xl font-bold text-white mb-6">
       Make a Reservation
     </h2>

     <form className="space-y-4" onSubmit={handleSubmit}>
     
       <div className="flex space-x-4">
         <div className="relative w-1/2">
           <input
             type="text"
             name="customerName"
             placeholder="Name"
             value={formData.customerName}
             onChange={handleChange}
             required
             className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
           />
         </div>
         <div className="relative w-1/2">
           <input
             type="text"
             name="contactInfo"
             placeholder="Phone Number"
             value={formData.contactInfo}
             onChange={handleChange}
             required
             className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
           />
         </div>
       </div>
       <div className="flex space-x-4">
         <div className="relative w-1/2">
           <input
             type="date"
             name="reservationDate"
             placeholder="Select Date"
             value={formData.reservationDate}
             onChange={handleChange}
             required
             className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
           />
           <span className="absolute right-3 top-4 text-gray-500">📅</span>
         </div>
         <div className="relative w-1/2">
           <input
             type="time"
             name="reservationTime"
             placeholder="Select Time"
             value={formData.reservationTime}
             onChange={handleChange}
             required
             className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
           />
           <span className="absolute right-3 top-4 text-gray-500">⏰</span>
         </div>
       </div>

       
       <div className="relative">
         <input
           type="number"
           name="numberOfPeople"
           placeholder="Total Guests"
           value={formData.numberOfPeople}
           onChange={handleChange}
           required
           className="w-full bg-white text-gray-700 p-4 rounded-lg focus:outline-none"
         />
         <span className="absolute right-3 top-4 text-gray-500">👤</span>
       </div>

       <button 
        type="submit" 
       className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition" >
         MAKE A RESERVATION
       </button>
     </form>
   </div>
 </div>

</div>
</section> */}