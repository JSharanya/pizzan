import Navbar from "../component/Navbar";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../../src/index.css";

// import required modules
import { Pagination } from "swiper/modules";
import Reservation from "../component/Reservation";

const Home = () => {
  const menuItems = [
    {
      name: "Vegetables Burger",
      price: "$27.00",
      description: "American-inspired sushi roll",
      image: "path/to/image", // Replace with actual image paths or URLs
      rating: 5,
    },
    {
      name: "Hamburger Burger",
      price: "$27.00",
      description: "Chow mien Fried noodles",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Delicious Cheeseburger",
      price: "$27.00",
      description: "Barbecue Italian cuisine",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Brief Barger",
      price: "$27.00",
      description: "Japanese Cuisine Chicken",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Spacial Barger",
      price: "$27.00",
      description: "Barbecue Italian cuisine pizza",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Hamburger",
      price: "$39.00",
      description: "Barbecue Italian cuisine pizza",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Chicken Barger",
      price: "$25.00",
      description: "American-inspired sushi roll",
      image: "path/to/image",
      rating: 5,
    },
    {
      name: "Brief Pizza",
      price: "$25.00",
      description: "Barbecue Italian cuisine pizza",
      image: "path/to/image",
      rating: 5,
    },
  ];

  return (
    <div>
      <Navbar />

      {/* <img src={image_1} alt="Logo" />; */}
      <img src="/image_1.png" alt="Description of image" />

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
          <section class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
            <SwiperSlide>
              <section class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                <img
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />

                <h1 class="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <h2 class="font-semibold mb-5">$29.99</h2>
                <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                  Add To Cart
                </button>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                <img
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />

                <h1 class="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <h2 class="font-semibold mb-5">$29.99</h2>
                <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                  Add To Cart
                </button>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section class="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                <img
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />

                <h1 class="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <h2 class="font-semibold mb-5">$29.99</h2>
                <button class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                  Add To Cart
                </button>
              </section>
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </section>
        </section>
      </Swiper> */}

      <div class="container mx-auto mt-24 text-center justify-center">
        <div class="w-full">
          <div class="flex flex-col items-center">
            <div class="mb-8">
              <span class=" text-red-700 font-bold text-xl">
                Best Food menu
              </span>
              <h2 class="text-3xl font-bold mt-3">Our Popular Food Items</h2>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div class="p-1 flex flex-wrap items-center justify-center">
          <SwiperSlide>
            <div
              class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
              style={{ backgroundColor: "#faf7f2" }}
            >
              <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  class="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                  Indoor
                </span>

                <span class="block font-semibold text-xl text-center  text-black">
                  Peace Lily
                </span>

                <span class="block text-xs font-bold px-2 py-2  items-center text-red-900">
                  $36.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
              style={{ backgroundColor: "#faf7f2" }}
            >
              <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  class="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                  Indoor
                </span>

                <span class="block font-semibold text-xl text-center  text-black">
                  Peace Lily
                </span>

                <span class="block text-xs font-bold px-2 py-2  items-center text-red-900">
                  $36.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
              style={{ backgroundColor: "#faf7f2" }}
            >
              <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  class="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                  Indoor
                </span>

                <span class="block font-semibold text-xl text-center  text-black">
                  Peace Lily
                </span>

                <span class="block text-xs font-bold px-2 py-2  items-center text-red-900">
                  $36.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
              style={{ backgroundColor: "#faf7f2" }}
            >
              <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  class="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                  Indoor
                </span>

                <span class="block font-semibold text-xl text-center  text-black">
                  Peace Lily
                </span>

                <span class="block  text-xs font-bold px-2 py-2  items-center text-red-900">
                  $36.00
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
              style={{ backgroundColor: "#faf7f2" }}
            >
              <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  class="relative w-40"
                  src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  alt=""
                />
              </div>
              <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                  Indoor
                </span>

                <span class="block font-semibold text-xl text-center  text-black">
                  Peace Lily
                </span>

                <span class="block  text-xs font-bold px-2 py-2  items-center text-red-900">
                  $36.00
                </span>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      {/* 
      <div>
        <section class="overflow-hidden bg-white py-8 sm:py-16">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y- sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
             <div>
             <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product screenshot"
                class="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="2000"
              />
             </div>
             
              <div class="lg:pr-6 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base font-semibold leading-7 text-indigo-600">
                    Produce faster
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    An Enterprise API
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-600">
                    We've built an API that allows you to scale your podcast
                    production workflow.
                  </p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                          <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                          <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                        </svg>
                        Template driven
                      </dt>
                      <dd class="inline">
                        Inspired by Sendgrid, Mailchimp, and Postmark, we allow
                        you to create and apply templated content to your media.
                      </dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Simple, REST
                      </dt>
                      <dd class="inline">
                        A simple REST API that allows you to create, generate,
                        and manage your content.
                      </dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                            clip-rule="evenodd"
                          ></path>
                          <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                        </svg>
                        Developer friendly{" "}
                      </dt>
                      <dd class="inline">
                        Documented and easy to use, we make it easy to integrate
                        with your existing workflow.
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start for free
                  </a>
                  <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-700"
                  >
                    Schedule a demo
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div> */}

      <section className="container mx-auto p-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/image_2.png"
            alt="Popular Food"
            className=" w-full md:w-4/5 lg:w-full object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h3 className="text-red-500 text-lg font-semibold">About Company</h3>
          <h2 className="text-4xl font-bold mt-2">
            Where Quality Food Meet Excellent Service.
          </h2>
          <p className="text-gray-600 mt-4">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-4 shadow-lg rounded-lg border">
              <img
                src="/image_3.png"
                alt="Fast Foods"
                className="w-12 h-12 mx-auto"
              />
              <h4 className="text-xl font-semibold mt-4">Fast Foods</h4>
              <p className="text-gray-500 mt-2">
                Health foods are nutrient-dense foods.
              </p>
            </div>
            <div className="p-4 shadow-lg rounded-lg border border-red-500">
              <img
                src="/image_4.png"
                alt="Fast Foods"
                className="w-12 h-12 mx-auto"
              />
              <h4 className="text-xl font-semibold mt-4">Fast Foods</h4>
              <p className="text-gray-500 mt-2">
                Health foods are nutrient-dense foods.
              </p>
            </div>
          </div>

          {/* Button and CEO Info */}
          <div className="flex items-center mt-8 space-x-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
              About More
            </button>
            <div className="flex items-center">
              <img
                src="/image_5.png"
                alt="CEO"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">Ronald Richards</p>
                <p className="text-sm text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-red-500 font-bold text-lg">Best Food Menu</h2>
          <h1 className="text-3xl font-bold my-4">Our Best Foods Menus</h1>
        </div>

        <div className="flex justify-center space-x-12 mt-8">
          <div className="text-center">
            <div className="text-4xl">🍔</div>
            <p className="font-bold text-red-500 mt-2">Beef Burger</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🍕</div>
            <p className="font-bold mt-2">Chicken Pizza</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🍝</div>
            <p className="font-bold mt-2">Fresh Pasta</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🍣</div>
            <p className="font-bold mt-2">Hot Sushi</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🍹</div>
            <p className="font-bold mt-2">Drink & Juice</p>
          </div>
        </div>
      </div>

      <div class="p-1 flex flex-wrap items-center justify-center">
        <div class="flex space-x-4">
          <div class="bg-white overflow-hidden shadow rounded-lg border mx-4 box">
            <div class="px-4 py-5 sm:px-6">
              <div class="flex justify-between items-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Contact Details
                </h3>
                <button class="text-sm font-medium text-gray-500">
                  Update
                </button>
              </div>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                The contact information is provided below.
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    John Doe
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    johndoe@example.com
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Contact Type
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Employee
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Company</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    BoxPower
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Job Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Project Engineer
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Department</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Civil & Electrical
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg border box">
            <div class="px-4 py-5 sm:px-6">
              <div class="flex justify-between items-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Assigned Project Sites
                </h3>
                <button class="text-sm font-medium text-gray-500 mx-4">
                  Add
                </button>
              </div>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                You can find the project sites assigned to this contact below.
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="flex justify-center items-center py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <div className="flex items-center">
                      <img
                        src="path/to/image"
                        alt="Vegetables Burger"
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-500"
                      />
                      <div>
                        <h2 className="text-lg font-semibold flex items-center">
                          Vegetables Burger
                        </h2>
                        <p className="text-sm text-gray-500">
                          American-inspired sushi roll
                        </p>
                        <div className="text-red-500 flex">★★★★★</div>
                      </div>
                    </div>
                  </dd>
                  <span className="text-pink-500 text-xl font-bold">
                      $27.00
                    </span>
                  <div class="text-sm font-medium text-gray-500">
                    <span className="text-pink-500 text-xl font-bold">
                      $27.00
                    </span>
                  </div>
                </div>

                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RG 301 <br />
                    Lagrand Valley
                  </dd>
                  <button class="text-sm font-medium text-gray-500">
                    Remove
                  </button>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RG 301 <br />
                    Wahl Ranch
                  </dd>
                  <button class="text-sm font-medium text-gray-500">
                    Remove
                  </button>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RG 301 <br />
                    Lagrand Valley
                  </dd>
                  <button class="text-sm font-medium text-gray-500">
                    Remove
                  </button>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    RG 301 <br />
                    Wahl Ranch
                  </dd>
                  <button class="text-sm font-medium text-gray-500">
                    Remove
                  </button>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="max-w-3xl w-full p-6 bg-white rounded-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 rounded-lg flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="text-yellow-500 flex">
                        {Array(item.rating)
                          .fill()
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-red-500 font-semibold">{item.price}</div>
                  <div className="text-red-500 font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-4 border-b">
          <div className="flex items-center">
            <img
              src="path/to/image"
              alt="Vegetables Burger"
              className="w-16 h-16 rounded-full mr-4 border-2 border-red-500"
            />
            <div>
              <h2 className="text-lg font-semibold flex items-center">
                Vegetables Burger
                <span className="flex-grow border-dotted border-t border-gray-300 mx-2"></span>
                <span className="text-pink-500 text-xl font-bold">$27.00</span>
              </h2>
              <p className="text-sm text-gray-500">
                American-inspired sushi roll
              </p>
              <div className="text-red-500 flex">★★★★★</div>
            </div>
          </div>
        </div>

<Reservation/>

      </div>
    </div>
  );
};

export default Home;
