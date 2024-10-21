import React, { useEffect } from "react";
import { useState } from "react";

const ReservationManag = () => {

    const [allReservation, setAllReservation]= useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/reservations").then(
          res => res.json()
        ).then(data => setAllReservation(data))
      }, [])

  return (
    <div className="overflow-x-auto mt-24 items-center justify-center">
      <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table class="w-full table-fixed">
          <thead>
            <tr class="bg-gray-100">
              <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Customer's name
              </th>
              <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Contact information
              </th>
              <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                date
              </th>
              <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                time
              </th>
              <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                No of People
              </th>
            </tr>
          </thead>

        {allReservation.map((reservation, index)=>
         <tbody class="bg-white" key={reservation._id}>
         <tr>
           <td class="py-4 px-6 border-b border-gray-200">{reservation.customerName}</td>
           <td class="py-4 px-6 border-b border-gray-200 truncate">
           {reservation.contactInfo}
           </td>
           <td class="py-4 px-6 border-b border-gray-200"> {new Date(reservation.reservationDate).toISOString().split('T')[0]}</td>
           <td class="py-4 px-6 border-b border-gray-200">{reservation.reservationTime}</td>
           <td class="py-4 px-6 border-b border-gray-200">{reservation. numberOfPeople}</td>
         </tr>
       </tbody>
        )}

         
        </table>
      </div>
    </div>
  );
};

export default ReservationManag;
