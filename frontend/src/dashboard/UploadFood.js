import React, { useState } from "react";

const UploadFood = () => {
    const [isAddFormVisible, setIsAddFormVisible] = useState(false)
    const [isEditFormVisible, setIsEditFormVisible] = useState(false)

    const handleAddClick = () => {
        setIsAddFormVisible(true);
        setIsEditFormVisible(false);
      };
    
      const handleEditClick = () => {
        setIsEditFormVisible(true);
        setIsAddFormVisible(false);
      };
    
      const handleCancelClick = () => {
        setIsAddFormVisible(false);
        setIsEditFormVisible(false);
      };
    
      const handleSaveClick = () => {
        // Perform save action
        setIsAddFormVisible(false);
        setIsEditFormVisible(false);
      };



  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 mt-28">
        <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div class="flex items-center flex-1 space-x-4"></div>
              <div class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                ></button>
                <button
                  type="button"
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                ></button>
                <button
                  type="button"
                  class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  onClick={handleAddClick}
                >
                  <svg
                    class="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add new product
                </button>
              </div>
            </div>

            {isAddFormVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                  <h3 className="mb-4 text-lg font-semibold">Add New Product</h3>
                  <form>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Food Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Price</label>
                      <input
                        type="number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md"
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <table class="min-w-full divide-y divide-gray-200 mt-12">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Food Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Food Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>

                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <th
                    scope="row"
                    class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      class="w-14 h-14 mr-3"
                    />
                    
                  </th>
                  <td class=" py-4 whitespace-nowrap">Jane Doe</td>
                  <td class="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                  <td class="px-6 py-4 whitespace-nowrap">Admin</td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                    onClick={handleEditClick}>
                      Edit
                    </button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>


            {isEditFormVisible && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                <h3 className="mb-4 text-lg font-semibold">Edit Product</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Food Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Sample Food"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Sample Description"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="number"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="12.99"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
            

          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadFood;
