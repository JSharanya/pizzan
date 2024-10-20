import React from 'react'

import { Table } from "flowbite-react";

const ReservationManag = () => {
  return (
    <div className="overflow-x-auto mt-24 items-center justify-center">
   <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">Customer's name</th>
                <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">Contact information</th>
                <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">date</th>
                <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">time</th>
                <th class="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">No of People</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr>
                <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td class="py-4 px-6 border-b border-gray-200">
                    
                </td>
                <td class="py-4 px-6 border-b border-gray-200">
                    
                    </td>
            </tr>
         
       
          
        </tbody>
    </table>
</div>
    </div>
  )
}

export default ReservationManag