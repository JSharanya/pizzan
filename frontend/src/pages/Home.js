import Navbar from "../component/Navbar";
import React, { useEffect, useRef, useState } from "react";
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

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu/all-menu");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

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
          {menu.map((menu) => (
            <SwiperSlide key={menu._id}>
              <div
                class="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
                style={{ backgroundColor: "#faf7f2" }}
              >
                <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                  <img
                    class="w-40 h-40 rounded-full object-cover"
                    src={menu.imageUrl}
                    alt={menu.name}
                  />
                </div>
                <div class="relative text-white px-6 pb-6 mt-6">
                  <span class="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                    {menu.name}
                  </span>

                  <span class="block text-sm text-center pt-3 text-black">
                    {menu.description}
                  </span>

                  <span class="block text-xs font-bold px-2 py-2  items-center text-red-900">
                    LKR {menu.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
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

      <section className="container  mx-auto p-10 flex flex-col md:flex-row items-center justify-between">
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
            <div className="p-4 shadow-lg rounded-lg border-2 border-red-600">
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

        <div className="flex justify-between items-center py-4 ">
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

        {/* Chef Card */}

        <div>
          <div class="p-1 flex flex-wrap items-center justify-center">
            <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                class=" object-cover w-52 h-80"
                src="https://www.josejeuland.com/wp-content/uploads/2022/04/onsiteheadshot.jpg"
                alt=""
              />
            </div>
            <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                class=" object-cover w-52 h-80"
                src="https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww="
                alt=""
              />
            </div>
            <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                class=" object-cover w-52 h-80 items-center"
                src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
                alt=""
              />
            </div>

            <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                class=" object-cover w-52 h-80"
                src="https://media.gettyimages.com/id/1341912094/photo/portrait-of-a-successful-chef-at-a-restaurant-and-smiling.jpg?s=612x612&w=gi&k=20&c=50dCFawK5sCSIHpMkswvxeVaLzOMvSwQkM3P3wwn91A="
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Brand Icon Section */}
        {/* <section class="bg-white h-screen w-full flex justify-center items-center dark:bg-gray-900 p-8">
            <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
              <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-9 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 125 35"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64.828 7.11521C64.828 8.52061 63.6775 9.65275 62.2492 9.65275C60.8209 9.65275 59.6704 8.52061 59.6704 7.11521C59.6704 5.70981 60.7813 4.57766 62.2492 4.57766C63.7171 4.6167 64.828 5.74883 64.828 7.11521ZM54.1953 12.2293C54.1953 12.4636 54.1953 12.854 54.1953 12.854C54.1953 12.854 52.9655 11.2923 50.3469 11.2923C46.0225 11.2923 42.6502 14.5327 42.6502 19.0221C42.6502 23.4726 45.9829 26.7518 50.3469 26.7518C53.0051 26.7518 54.1953 25.1513 54.1953 25.1513V25.815C54.1953 26.1272 54.4334 26.3615 54.7508 26.3615H57.9644V11.6828C57.9644 11.6828 55.0285 11.6828 54.7508 11.6828C54.4334 11.6828 54.1953 11.956 54.1953 12.2293ZM54.1953 21.6378C53.6002 22.4966 52.41 23.2383 50.9818 23.2383C48.4426 23.2383 46.4985 21.6768 46.4985 19.0221C46.4985 16.3675 48.4426 14.806 50.9818 14.806C52.3703 14.806 53.6399 15.5867 54.1953 16.4065V21.6378ZM60.3448 11.6828H64.1535V26.3615H60.3448V11.6828ZM117.237 11.2923C114.619 11.2923 113.389 12.854 113.389 12.854V4.6167H109.58V26.3615C109.58 26.3615 112.516 26.3615 112.794 26.3615C113.111 26.3615 113.349 26.0882 113.349 25.815V25.1513C113.349 25.1513 114.579 26.7518 117.198 26.7518C121.522 26.7518 124.895 23.4726 124.895 19.0221C124.895 14.5717 121.522 11.2923 117.237 11.2923ZM116.603 23.1993C115.135 23.1993 113.984 22.4575 113.389 21.5986V16.3675C113.984 15.5867 115.254 14.7668 116.603 14.7668C119.142 14.7668 121.086 16.3284 121.086 18.9831C121.086 21.6378 119.142 23.1993 116.603 23.1993ZM107.597 17.6557V26.4005H103.788V18.0852C103.788 15.6648 102.994 14.6888 100.852 14.6888C99.7015 14.6888 98.5113 15.2744 97.7574 16.1332V26.3615H93.9488V11.6828H96.964C97.2814 11.6828 97.5195 11.956 97.5195 12.2293V12.854C98.6302 11.7218 100.098 11.2923 101.566 11.2923C103.233 11.2923 104.621 11.7609 105.732 12.6977C107.081 13.7908 107.597 15.1962 107.597 17.6557ZM84.7048 11.2923C82.0862 11.2923 80.8564 12.854 80.8564 12.854V4.6167H77.0476V26.3615C77.0476 26.3615 79.9834 26.3615 80.2611 26.3615C80.5787 26.3615 80.8166 26.0882 80.8166 25.815V25.1513C80.8166 25.1513 82.0465 26.7518 84.665 26.7518C88.9895 26.7518 92.3617 23.4726 92.3617 19.0221C92.4015 14.5717 89.0292 11.2923 84.7048 11.2923ZM84.0699 23.1993C82.602 23.1993 81.4515 22.4575 80.8564 21.5986V16.3675C81.4515 15.5867 82.721 14.7668 84.0699 14.7668C86.6091 14.7668 88.5531 16.3284 88.5531 18.9831C88.5531 21.6378 86.6091 23.1993 84.0699 23.1993ZM73.7547 11.2923C74.9052 11.2923 75.5003 11.4876 75.5003 11.4876V14.9621C75.5003 14.9621 72.3264 13.908 70.3427 16.1332V26.4005H66.534V11.6828C66.534 11.6828 69.4699 11.6828 69.7476 11.6828C70.065 11.6828 70.3029 11.956 70.3029 12.2293V12.854C71.0171 12.0342 72.5644 11.2923 73.7547 11.2923ZM32.4423 24.4806C32.2699 24.0722 32.0976 23.6297 31.9252 23.2554C31.6493 22.6427 31.3736 22.0641 31.1322 21.5197L31.0978 21.4855C28.719 16.3804 26.1678 11.2073 23.4787 6.10219L23.3752 5.89799C23.0995 5.38748 22.8237 4.84294 22.5479 4.29839C22.2031 3.68577 21.8584 3.03913 21.3068 2.42652C20.2036 1.06516 18.6177 0.316406 16.9284 0.316406C15.2046 0.316406 13.6533 1.06516 12.5156 2.35845C11.9985 2.97107 11.6192 3.61771 11.2745 4.23032C10.9987 4.77486 10.7229 5.31941 10.4471 5.82992L10.3436 6.03413C7.68904 11.1392 5.10339 16.3124 2.7246 21.4175L2.69012 21.4855C2.44879 22.0301 2.17299 22.6087 1.89719 23.2214C1.72481 23.5957 1.55244 24.0041 1.38006 24.4466C0.93188 25.7058 0.793978 26.897 0.966355 28.1222C1.34558 30.6748 3.06935 32.8189 5.44815 33.7719C6.3445 34.1463 7.27534 34.3164 8.24065 34.3164C8.51645 34.3164 8.8612 34.2824 9.137 34.2483C10.2747 34.1122 11.4468 33.7378 12.5845 33.0912C13.9981 32.3083 15.3425 31.1852 16.8595 29.5517C18.3764 31.1852 19.7554 32.3083 21.1344 33.0912C22.2721 33.7378 23.4443 34.1122 24.5819 34.2483C24.8577 34.2824 25.2025 34.3164 25.4782 34.3164C26.4436 34.3164 27.4089 34.1463 28.2708 33.7719C30.6841 32.8189 32.3733 30.6408 32.7526 28.1222C33.0283 26.931 32.8904 25.7398 32.4423 24.4806ZM16.9259 25.893C15.1377 23.6468 13.9786 21.5327 13.5812 19.7488C13.4156 18.9891 13.3825 18.3284 13.4818 17.7338C13.5481 17.2053 13.7467 16.7429 14.0118 16.3465C14.6409 15.4546 15.7007 14.893 16.9259 14.893C18.1512 14.893 19.2441 15.4216 19.8402 16.3465C20.1051 16.7429 20.3037 17.2053 20.37 17.7338C20.4694 18.3284 20.4363 19.0221 20.2707 19.7488C19.8733 21.4995 18.7142 23.6136 16.9259 25.893ZM30.3665 27.6033C30.1305 29.3326 28.9509 30.8293 27.2993 31.4945C26.4903 31.8269 25.6139 31.9267 24.7376 31.8269C23.895 31.7273 23.0523 31.4611 22.176 30.9623C20.9624 30.2971 19.749 29.2662 18.3334 27.7363C20.558 25.0424 21.9062 22.5813 22.4118 20.3864C22.6477 19.3554 22.6815 18.4242 22.5804 17.5595C22.4456 16.7281 22.1422 15.9632 21.6703 15.298C20.6255 13.8014 18.8727 12.9367 16.9178 12.9367C14.9628 12.9367 13.21 13.8347 12.1652 15.298C11.6933 15.9632 11.39 16.7281 11.2551 17.5595C11.1203 18.4242 11.154 19.3887 11.4237 20.3864C11.9293 22.5813 13.3112 25.0757 15.5021 27.7695C14.1202 29.2994 12.873 30.3304 11.6596 30.9955C10.7832 31.4945 9.94059 31.7605 9.09795 31.8603C8.18787 31.9599 7.31152 31.8269 6.53628 31.5277C4.88468 30.8625 3.70497 29.366 3.46902 27.6365C3.36791 26.8051 3.43531 25.9737 3.77238 25.0424C3.8735 24.7098 4.04202 24.3774 4.21055 23.9782C4.4465 23.4461 4.71615 22.8807 4.9858 22.3153L5.0195 22.2489C7.34523 17.2935 9.83948 12.2383 12.4349 7.31623L12.536 7.11668C12.8056 6.61782 13.0753 6.0857 13.3449 5.58684C13.6146 5.05472 13.9179 4.55585 14.2886 4.12351C14.9965 3.32532 15.9403 2.89298 16.9852 2.89298C18.03 2.89298 18.9738 3.32532 19.6817 4.12351C20.0524 4.55585 20.3557 5.05472 20.6255 5.58684C20.8951 6.0857 21.1647 6.61782 21.4343 7.11668L21.5355 7.31623C24.0971 12.2716 26.5914 17.3267 28.9171 22.2821V22.3153C29.1867 22.8475 29.4227 23.4461 29.6924 23.9782C29.8609 24.3774 30.0294 24.7098 30.1305 25.0424C30.4003 25.9071 30.5013 26.7385 30.3665 27.6033Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-9 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 86 29"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-8 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 151 34"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3753_27919)">
                      <path
                        d="M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3753_27919">
                        <rect
                          width="150"
                          height="32.8125"
                          fill="white"
                          transform="translate(0.0820312 0.835449)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-9 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 124 38"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.8299 17.3952C54.7246 18.342 56.3124 19.8121 56.3124 22.4701C56.3124 25.615 53.9096 27.6473 50.1907 27.6473C47.5621 27.6473 45.1252 26.7135 43.1446 24.9452C43.104 24.9089 43.0791 24.8582 43.0754 24.8038C43.0716 24.7494 43.0893 24.6957 43.1246 24.6542L44.8747 22.5724C44.8926 22.5512 44.9145 22.5336 44.9392 22.5209C44.9639 22.5082 44.9909 22.5005 45.0185 22.4983C45.0462 22.4961 45.0741 22.4995 45.1005 22.5082C45.1269 22.5169 45.1513 22.5307 45.1723 22.5489C46.8747 24.0226 48.3966 24.6506 50.2619 24.6506C51.9419 24.6506 52.9857 23.9232 52.9857 22.7541C52.9857 21.6986 52.4694 21.1088 49.4104 20.4043C45.8174 19.5351 43.7374 18.4108 43.7374 15.2323C43.7374 12.2686 46.1484 10.1986 49.5991 10.1986C51.9455 10.1986 53.9548 10.8937 55.7384 12.3244C55.8243 12.3938 55.8419 12.5185 55.7778 12.609L54.2165 14.8084C54.2002 14.831 54.1796 14.8501 54.1558 14.8647C54.1321 14.8793 54.1057 14.8891 54.0781 14.8935C54.0506 14.8978 54.0224 14.8967 53.9953 14.8902C53.9682 14.8837 53.9427 14.8718 53.9202 14.8554C52.4218 13.7381 50.9928 13.1959 49.5509 13.1959C48.0643 13.1959 47.0646 13.9104 47.0646 14.9718C47.0646 16.095 47.635 16.6302 50.8305 17.3934L50.8299 17.3952ZM64.7256 14.2432C63.1144 14.2432 61.7924 14.8783 60.7016 16.1779V14.7137C60.7016 14.6582 60.6795 14.6049 60.6403 14.5657C60.601 14.5264 60.5478 14.5043 60.4922 14.5043H57.6308C57.5752 14.5043 57.522 14.5264 57.4827 14.5657C57.4435 14.6049 57.4214 14.6582 57.4214 14.7137V30.9851C57.4214 31.0998 57.5155 31.1939 57.6308 31.1939H60.4928C60.6087 31.1939 60.7028 31.0998 60.7028 30.9846V25.8479C61.793 27.0711 63.1156 27.6697 64.7274 27.6697C67.7235 27.6697 70.755 25.3645 70.755 20.9565C70.755 16.5484 67.7218 14.2432 64.7256 14.2432ZM67.4248 20.9571C67.4248 23.2011 66.0429 24.7676 64.0635 24.7676C62.1053 24.7676 60.6293 23.1299 60.6293 20.9571C60.6293 18.7842 62.1053 17.1465 64.0635 17.1465C66.0111 17.1465 67.4254 18.7489 67.4254 20.9571H67.4248ZM78.5255 14.2432C74.6679 14.2432 71.6465 17.2129 71.6465 21.0059C71.6465 24.7565 74.6467 27.695 78.4773 27.695C82.3485 27.695 85.3793 24.7347 85.3793 20.9571C85.3793 17.1923 82.3684 14.2427 78.5249 14.2427L78.5255 14.2432ZM78.5249 24.7906C76.4726 24.7906 74.926 23.1423 74.926 20.9565C74.926 18.7618 76.4197 17.1694 78.4779 17.1694C80.542 17.1694 82.1003 18.8177 82.1003 21.0047C82.1003 23.1981 80.5961 24.79 78.5249 24.79V24.7906ZM93.6168 14.5043C93.7326 14.5043 93.8261 14.5984 93.8261 14.7137V17.1735C93.8262 17.201 93.8208 17.2282 93.8104 17.2536C93.7999 17.279 93.7846 17.3021 93.7652 17.3215C93.7458 17.341 93.7227 17.3564 93.6974 17.3669C93.672 17.3774 93.6448 17.3829 93.6173 17.3829H90.4683V23.2993C90.4683 24.2343 90.8788 24.6506 91.7973 24.6506C92.3818 24.6538 92.9582 24.5145 93.4768 24.2449C93.5089 24.229 93.5444 24.2215 93.5802 24.2232C93.6159 24.2249 93.6507 24.2356 93.6811 24.2545C93.7115 24.2733 93.7366 24.2996 93.7541 24.3308C93.7715 24.3621 93.7807 24.3973 93.7808 24.433V26.7747C93.7808 26.8494 93.7397 26.9199 93.675 26.957C92.8723 27.4115 92.0208 27.6232 90.9934 27.6232C88.4689 27.6232 87.1887 26.3195 87.1887 23.7468V17.3834H85.8127C85.7853 17.3834 85.7581 17.3779 85.7328 17.3673C85.7075 17.3568 85.6846 17.3413 85.6652 17.3219C85.6459 17.3024 85.6306 17.2794 85.6202 17.254C85.6098 17.2287 85.6044 17.2015 85.6045 17.1741V14.7137C85.6045 14.5984 85.6974 14.5043 85.8127 14.5043H87.1887V11.2841C87.1887 11.1689 87.2828 11.0748 87.3993 11.0748H90.2607C90.3766 11.0748 90.4701 11.1689 90.4701 11.2841V14.5043H93.6191H93.6168ZM109.48 14.5167C109.566 14.5167 109.644 14.5696 109.675 14.6519L113.018 23.3751L116.07 14.6566C116.085 14.6155 116.112 14.5798 116.147 14.5545C116.183 14.5293 116.225 14.5156 116.269 14.5155H119.248C119.282 14.5155 119.316 14.5238 119.346 14.5398C119.376 14.5558 119.402 14.5789 119.421 14.6072C119.441 14.6354 119.452 14.668 119.456 14.7019C119.46 14.7359 119.455 14.7702 119.442 14.8019L114.477 27.6332C113.448 30.2812 112.279 31.2656 110.166 31.2656C109.036 31.2656 108.122 31.0316 107.108 30.4835C107.062 30.4584 107.027 30.4163 107.01 30.366C106.993 30.3157 106.997 30.261 107.019 30.213L107.989 28.0843C108.001 28.058 108.018 28.0345 108.04 28.0151C108.061 27.9957 108.086 27.9808 108.113 27.9714C108.14 27.9626 108.169 27.9595 108.198 27.9622C108.227 27.9649 108.255 27.9734 108.28 27.9872C108.823 28.2842 109.354 28.4342 109.859 28.4342C110.482 28.4342 110.939 28.2295 111.404 27.1981L107.311 17.3834H104.638V27.201C104.638 27.3169 104.544 27.4109 104.429 27.4109H101.567C101.539 27.4109 101.512 27.4055 101.486 27.395C101.461 27.3844 101.438 27.3689 101.418 27.3494C101.399 27.3299 101.384 27.3068 101.373 27.2813C101.363 27.2558 101.357 27.2286 101.357 27.201V17.3834H99.9824C99.9269 17.383 99.8738 17.3607 99.8345 17.3215C99.7952 17.2822 99.773 17.229 99.7725 17.1735V14.7019C99.7725 14.5861 99.8666 14.492 99.9818 14.492H101.357V13.8863C101.357 11.0719 102.754 9.58291 105.398 9.58291C106.484 9.58291 107.209 9.75638 107.777 9.92398C107.866 9.95162 107.925 10.0334 107.925 10.1251V12.5361C107.926 12.5695 107.918 12.6024 107.903 12.6322C107.888 12.662 107.866 12.6878 107.839 12.7074C107.813 12.727 107.781 12.7398 107.748 12.7448C107.715 12.7498 107.682 12.7468 107.65 12.7361C107.113 12.5573 106.634 12.4385 106.038 12.4385C105.038 12.4385 104.591 12.9578 104.591 14.1215V14.5167H109.479H109.48ZM98.2289 14.5043C98.3441 14.5043 98.4382 14.5984 98.4382 14.7137V27.2004C98.4382 27.3157 98.3441 27.4098 98.2283 27.4098H95.3662C95.3106 27.4098 95.2573 27.3877 95.218 27.3485C95.1786 27.3092 95.1564 27.256 95.1563 27.2004V14.7137C95.1563 14.5984 95.2504 14.5043 95.3656 14.5043H98.2277H98.2289ZM96.8122 8.81903C97.3565 8.81903 97.8786 9.03525 98.2634 9.42013C98.6483 9.80502 98.8645 10.327 98.8645 10.8713C98.8645 11.4156 98.6483 11.9377 98.2634 12.3225C97.8786 12.7074 97.3565 12.9236 96.8122 12.9236C96.2679 12.9236 95.7459 12.7074 95.361 12.3225C94.9762 11.9377 94.7599 11.4156 94.7599 10.8713C94.7599 10.327 94.9762 9.80502 95.361 9.42013C95.7459 9.03525 96.2679 8.81903 96.8122 8.81903ZM121.886 18.5184C121.621 18.5194 121.359 18.468 121.114 18.3671C120.869 18.2663 120.646 18.118 120.459 17.9307C120.272 17.7435 120.124 17.5211 120.023 17.2763C119.922 17.0314 119.871 16.7691 119.872 16.5043C119.872 16.2385 119.924 15.9752 120.026 15.7296C120.127 15.484 120.277 15.2608 120.465 15.0729C120.653 14.8849 120.876 14.7358 121.122 14.6341C121.367 14.5324 121.63 14.4801 121.896 14.4802C122.161 14.4791 122.423 14.5303 122.668 14.631C122.913 14.7318 123.135 14.88 123.323 15.0671C123.51 15.2543 123.658 15.4766 123.759 15.7214C123.86 15.9661 123.911 16.2284 123.91 16.4931C123.91 16.7591 123.858 17.0225 123.756 17.2682C123.655 17.514 123.506 17.7373 123.318 17.9254C123.13 18.1135 122.906 18.2627 122.661 18.3646C122.415 18.4664 122.152 18.5189 121.886 18.519V18.5184ZM121.896 14.6808C120.865 14.6808 120.084 15.5011 120.084 16.5049C120.084 17.5087 120.859 18.3179 121.886 18.3179C122.917 18.3179 123.699 17.4981 123.699 16.4937C123.699 15.4899 122.922 14.6808 121.896 14.6808ZM122.343 16.7007L122.912 17.4981H122.432L121.92 16.7666H121.479V17.4981H121.077V15.3841H122.02C122.51 15.3841 122.834 15.6358 122.834 16.0586C122.834 16.4055 122.634 16.6172 122.343 16.6995L122.343 16.7007ZM122.002 15.7469H121.478V16.4149H122.002C122.264 16.4149 122.419 16.2867 122.419 16.0797C122.419 15.8622 122.264 15.7463 122.002 15.7463V15.7469ZM18.9768 0.305176C8.75288 0.305176 0.464844 8.70847 0.464844 18.933C0.464256 28.54 7.78083 36.2953 17.1462 37.4714H20.8074C30.1728 36.2953 37.4893 28.54 37.4893 18.9324C37.4893 8.70847 29.2007 0.305176 18.9774 0.305176H18.9768ZM27.4665 27.0064C27.3877 27.1359 27.284 27.2486 27.1616 27.3379C27.0391 27.4273 26.9002 27.4917 26.7528 27.5273C26.6054 27.5629 26.4525 27.5691 26.3027 27.5455C26.1529 27.5219 26.0093 27.469 25.88 27.3898C21.5325 24.733 16.0612 24.1331 9.61732 25.605C9.46966 25.639 9.31676 25.6435 9.16736 25.6183C9.01796 25.5931 8.87499 25.5387 8.74664 25.4582C8.61829 25.3777 8.50707 25.2726 8.41934 25.1491C8.33162 25.0256 8.26911 24.886 8.23539 24.7382C8.20146 24.5905 8.19701 24.4375 8.22229 24.2881C8.24756 24.1386 8.30207 23.9956 8.3827 23.8672C8.46332 23.7389 8.56848 23.6277 8.69214 23.54C8.8158 23.4523 8.95554 23.3899 9.10336 23.3563C16.1553 21.745 22.204 22.439 27.0837 25.4204C27.3446 25.5803 27.5314 25.8371 27.603 26.1346C27.6747 26.4321 27.6254 26.7458 27.4659 27.007L27.4665 27.0064ZM29.7317 21.9656C29.5314 22.2916 29.2099 22.5248 28.8377 22.6139C28.4656 22.703 28.0733 22.6407 27.747 22.4407C22.7721 19.3828 15.1862 18.4966 9.29977 20.2837C8.93342 20.3943 8.53819 20.3552 8.2006 20.175C7.86301 19.9948 7.61058 19.6882 7.49856 19.3223C7.26922 18.5578 7.6985 17.7539 8.46121 17.5228C15.1856 15.4823 23.5436 16.4702 29.2577 19.9809C29.5837 20.1813 29.8168 20.5029 29.9058 20.875C29.9948 21.2472 29.9324 21.6394 29.7323 21.9656H29.7317ZM29.9269 16.7166C23.9594 13.173 14.1165 12.8472 8.42004 14.5761C7.98054 14.7093 7.50613 14.6624 7.10118 14.4458C6.69622 14.2292 6.3939 13.8606 6.26071 13.4211C6.12752 12.9816 6.17437 12.5072 6.39096 12.1023C6.60756 11.6973 6.97615 11.395 7.41565 11.2618C13.9548 9.27712 24.8256 9.66053 31.6952 13.7375C31.8908 13.8535 32.0617 14.0069 32.198 14.1889C32.3343 14.371 32.4334 14.5781 32.4897 14.7984C32.5459 15.0188 32.5582 15.248 32.5258 15.4731C32.4934 15.6982 32.417 15.9148 32.3009 16.1103C32.185 16.3061 32.0316 16.477 31.8495 16.6134C31.6674 16.7498 31.4603 16.849 31.2398 16.9053C31.0194 16.9615 30.79 16.9738 30.5648 16.9413C30.3397 16.9088 30.1231 16.8323 29.9275 16.716L29.9269 16.7166Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-9 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 137 37"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.3228 13.9636C51.5883 13.9636 50.7303 15.3285 50.3366 16.209C50.1166 16.7006 50.0551 17.0893 49.8767 17.0893C49.6253 17.0893 49.8054 16.7514 49.5997 16.0022C49.329 15.0165 48.5133 13.9636 46.78 13.9636C44.9577 13.9636 44.1775 15.5032 43.8075 16.3493C43.5545 16.9276 43.5542 17.0893 43.3597 17.0893C43.0778 17.0893 43.3113 16.6298 43.4381 16.0897C43.688 15.0263 43.498 14.2136 43.498 14.2136H40.6094V25.0758H44.5523C44.5523 25.0758 44.5523 20.5363 44.5523 19.6714C44.5523 18.6054 44.9982 17.2528 45.7625 17.2528C46.6456 17.2528 46.8224 17.931 46.8224 19.1869C46.8224 20.3255 46.8224 25.0781 46.8224 25.0781H50.7812C50.7812 25.0781 50.7812 20.511 50.7812 19.6714C50.7812 18.7226 51.1684 17.2528 51.9972 17.2528C52.8926 17.2528 53.0511 18.2056 53.0511 19.1869C53.0511 20.1682 53.0511 25.0758 53.0511 25.0758H56.9387C56.9387 25.0758 56.9387 20.7719 56.9387 18.6882C56.9387 15.8535 55.9395 13.9636 53.3228 13.9636Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M120.249 13.9636C118.514 13.9636 117.656 15.3285 117.262 16.209C117.042 16.7006 116.981 17.0893 116.802 17.0893C116.551 17.0893 116.719 16.6601 116.526 16.0022C116.237 15.0217 115.518 13.9636 113.706 13.9636C111.884 13.9636 111.103 15.5032 110.733 16.3493C110.48 16.9276 110.48 17.0893 110.286 17.0893C110.004 17.0893 110.237 16.6298 110.364 16.0897C110.614 15.0263 110.424 14.2136 110.424 14.2136H107.535V25.0758H111.478C111.478 25.0758 111.478 20.5363 111.478 19.6714C111.478 18.6054 111.924 17.2528 112.688 17.2528C113.571 17.2528 113.748 17.931 113.748 19.1869C113.748 20.3255 113.748 25.0781 113.748 25.0781H117.707C117.707 25.0781 117.707 20.511 117.707 19.6714C117.707 18.7226 118.094 17.2528 118.923 17.2528C119.819 17.2528 119.977 18.2056 119.977 19.1869C119.977 20.1682 119.977 25.0758 119.977 25.0758H123.865C123.865 25.0758 123.865 20.7719 123.865 18.6882C123.865 15.8535 122.865 13.9636 120.249 13.9636Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M62.7138 22.5371C61.7709 22.7549 61.2821 22.4645 61.2821 21.8395C61.2821 20.9834 62.1676 20.6406 63.4315 20.6406C63.9887 20.6406 64.5126 20.6888 64.5126 20.6888C64.5126 21.0552 63.7172 22.3056 62.7138 22.5371ZM63.6737 13.9661C60.6534 13.9661 58.4862 15.0765 58.4862 15.0765V18.3405C58.4862 18.3405 60.8795 16.9645 62.821 16.9645C64.3707 16.9645 64.5611 17.8003 64.4905 18.494C64.4905 18.494 64.0437 18.3757 62.6797 18.3757C59.4661 18.3757 57.8438 19.8362 57.8438 22.1782C57.8438 24.3997 59.667 25.3284 61.2031 25.3284C63.4446 25.3284 64.4299 23.8221 64.7327 23.1075C64.9428 22.6117 64.9811 22.2776 65.1699 22.2776C65.3849 22.2776 65.3125 22.5172 65.3021 23.0107C65.2839 23.8748 65.3246 24.528 65.4616 25.0782H68.4334V19.7326C68.4334 16.395 67.2525 13.9661 63.6737 13.9661Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M74.9258 25.0783H78.8688V10.9255H74.9258V25.0783Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M83.2111 19.6471C83.2111 18.6705 84.1184 17.7819 85.7842 17.7819C87.5992 17.7819 89.059 18.6558 89.3864 18.8542V15.0765C89.3864 15.0765 88.2331 13.9661 85.3984 13.9661C82.4103 13.9661 79.9219 15.7146 79.9219 19.4781C79.9219 23.2415 82.1801 25.3284 85.3904 25.3284C87.898 25.3284 89.3928 23.9506 89.3928 23.9506V20.3624C88.9199 20.6271 87.6021 21.5415 85.8023 21.5415C83.8964 21.5415 83.2111 20.6648 83.2111 19.6471Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M97.373 13.9662C95.0905 13.9662 94.2223 16.1293 94.047 16.5049C93.8716 16.8804 93.785 17.0964 93.6415 17.0918C93.3923 17.0837 93.566 16.6308 93.6631 16.3375C93.8467 15.7834 94.2357 14.3297 94.2357 12.543C94.2357 11.3311 94.0718 10.9255 94.0718 10.9255H90.668V25.0783H94.611C94.611 25.0783 94.611 20.5543 94.611 19.6741C94.611 18.7937 94.9623 17.2554 95.9556 17.2554C96.7784 17.2554 97.036 17.8651 97.036 19.0927C97.036 20.3201 97.036 25.0783 97.036 25.0783H100.979C100.979 25.0783 100.979 21.7679 100.979 19.3289C100.979 16.5406 100.517 13.9662 97.373 13.9662Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M102.258 14.2285V25.0782H106.201V14.2285C106.201 14.2285 105.538 14.6162 104.233 14.6162C102.929 14.6162 102.258 14.2285 102.258 14.2285Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M104.218 10.8157C102.885 10.8157 101.805 11.521 101.805 12.391C101.805 13.2609 102.885 13.9662 104.218 13.9662C105.551 13.9662 106.632 13.2609 106.632 12.391C106.632 11.521 105.551 10.8157 104.218 10.8157Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M69.707 14.2285V25.0782H73.6499V14.2285C73.6499 14.2285 72.9872 14.6162 71.6825 14.6162C70.3779 14.6162 69.707 14.2285 69.707 14.2285Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M71.6674 10.8157C70.3345 10.8157 69.2539 11.521 69.2539 12.391C69.2539 13.2609 70.3345 13.9662 71.6674 13.9662C73.0005 13.9662 74.0811 13.2609 74.0811 12.391C74.0811 11.521 73.0005 10.8157 71.6674 10.8157Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M130.616 22.744C129.712 22.744 129.047 21.5972 129.047 19.9993C129.047 18.4475 129.73 17.2552 130.585 17.2552C131.682 17.2552 132.15 18.2614 132.15 19.9993C132.15 21.8071 131.719 22.744 130.616 22.744ZM131.699 13.9636C129.672 13.9636 128.743 15.4835 128.339 16.3493C128.072 16.9214 128.086 17.0893 127.891 17.0893C127.609 17.0893 127.843 16.6298 127.97 16.0897C128.219 15.0263 128.029 14.2136 128.029 14.2136H125.141V28.0756H129.084C129.084 28.0756 129.084 25.8073 129.084 23.6807C129.55 24.4722 130.414 25.3179 131.747 25.3179C134.598 25.3179 136.033 22.9056 136.033 19.6462C136.033 15.952 134.315 13.9636 131.699 13.9636Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M26.682 17.2446C26.9471 17.213 27.2012 17.2115 27.4346 17.2446C27.5697 16.9348 27.593 16.4007 27.4714 15.819C27.2907 14.9545 27.0463 14.4313 26.5411 14.5127C26.036 14.5941 26.0173 15.2205 26.1979 16.0851C26.2995 16.5714 26.4804 16.987 26.682 17.2446Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M22.3442 17.9286C22.7056 18.0873 22.9278 18.1924 23.0147 18.1005C23.0706 18.0433 23.054 17.934 22.9677 17.7929C22.7893 17.5017 22.4222 17.2064 22.033 17.0405C21.2368 16.6978 20.2872 16.8118 19.5546 17.3381C19.3129 17.5153 19.0836 17.7608 19.1164 17.9098C19.1271 17.958 19.1633 17.9943 19.2481 18.0062C19.4476 18.029 20.1443 17.6767 20.9468 17.6276C21.5133 17.5929 21.9827 17.7701 22.3442 17.9286Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21.6149 18.3436C21.1441 18.4179 20.8844 18.5732 20.7177 18.7175C20.5755 18.8417 20.4875 18.9792 20.4883 19.0759C20.4886 19.1219 20.5086 19.1484 20.5243 19.1618C20.5458 19.1806 20.5712 19.1911 20.6017 19.1911C20.7081 19.1911 20.9462 19.0955 20.9462 19.0955C21.6014 18.861 22.0335 18.8895 22.4618 18.9383C22.6985 18.9648 22.8103 18.9795 22.8622 18.8984C22.8776 18.8751 22.8962 18.8247 22.8488 18.7479C22.7385 18.569 22.2632 18.2666 21.6149 18.3436"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.2163 19.8666C25.5358 20.0237 25.8877 19.962 26.0024 19.7289C26.1169 19.4959 25.9506 19.1796 25.6309 19.0224C25.3113 18.8655 24.9594 18.927 24.8448 19.1601C24.7303 19.3933 24.8965 19.7094 25.2163 19.8666Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M27.2703 18.0709C27.0106 18.0664 26.7953 18.3516 26.7892 18.7076C26.7831 19.0638 26.9888 19.356 27.2485 19.3604C27.5081 19.3649 27.7236 19.0797 27.7295 18.7237C27.7356 18.3674 27.5299 18.0752 27.2703 18.0709Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.83004 24.4919C9.76544 24.411 9.65932 24.4356 9.55655 24.4596C9.48477 24.4764 9.40345 24.4952 9.31429 24.4937C9.1233 24.4899 8.96157 24.4085 8.87074 24.2689C8.75244 24.0872 8.75928 23.8163 8.88991 23.5064C8.90748 23.4644 8.92824 23.418 8.95084 23.3674C9.15903 22.9001 9.50765 22.118 9.11629 21.3728C8.82172 20.812 8.34133 20.4626 7.76373 20.3893C7.20923 20.319 6.63835 20.5246 6.27421 20.9263C5.69973 21.5601 5.60995 22.4226 5.72105 22.7274C5.76179 22.8389 5.82544 22.8698 5.87174 22.8761C5.96945 22.8892 6.11398 22.8181 6.20453 22.5745C6.211 22.557 6.21962 22.5298 6.23042 22.4953C6.27082 22.3666 6.34593 22.1268 6.46897 21.9346C6.61733 21.7028 6.8484 21.5432 7.11962 21.4851C7.39594 21.4259 7.67834 21.4787 7.91474 21.6335C8.31723 21.8967 8.47219 22.3898 8.30037 22.8604C8.21157 23.1037 8.06727 23.569 8.09913 23.9514C8.16344 24.7251 8.63936 25.0359 9.06699 25.069C9.48275 25.0845 9.77331 24.8513 9.84682 24.6806C9.89021 24.5797 9.85359 24.5183 9.83005 24.4919"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.781 10.2801C15.137 8.71317 16.8063 7.35092 18.3016 6.58601C18.3533 6.55944 18.4082 6.61569 18.3802 6.66639C18.2614 6.88141 18.0329 7.34188 17.9604 7.69111C17.9491 7.74554 18.0083 7.78647 18.0542 7.75518C18.9845 7.12106 20.6029 6.44157 22.0223 6.35422C22.0833 6.35044 22.1128 6.42867 22.0643 6.46589C21.8484 6.63154 21.6123 6.86065 21.4398 7.09244C21.4104 7.13187 21.4381 7.18868 21.4873 7.18898C22.484 7.19608 23.8891 7.54489 24.805 8.05859C24.8669 8.09327 24.8227 8.21326 24.7535 8.19739C23.3678 7.87989 21.0996 7.63891 18.7435 8.21358C16.6401 8.72668 15.0346 9.51873 13.8634 10.3705C13.8042 10.4137 13.7331 10.3355 13.781 10.2801L13.781 10.2801ZM20.5345 25.4617C20.5346 25.462 20.5348 25.4626 20.5349 25.4626C20.5352 25.463 20.5353 25.4638 20.5357 25.4642C20.5353 25.4634 20.5349 25.4626 20.5345 25.4617ZM26.1264 26.1218C26.1666 26.1049 26.1944 26.0591 26.1896 26.0136C26.184 25.9575 26.134 25.9167 26.0779 25.9225C26.0779 25.9225 23.1841 26.3507 20.4504 25.3501C20.7482 24.3823 21.5399 24.7317 22.7367 24.8283C24.8938 24.9569 26.827 24.6418 28.2558 24.2316C29.494 23.8765 31.12 23.1759 32.3831 22.1789C32.8091 23.1148 32.9595 24.1446 32.9595 24.1446C32.9595 24.1446 33.2893 24.0857 33.5648 24.2552C33.8252 24.4155 34.0162 24.7486 33.8857 25.6099C33.6201 27.219 32.9362 28.525 31.7868 29.7265C31.087 30.4796 30.2375 31.1345 29.2656 31.6107C28.7494 31.8818 28.1998 32.1164 27.6192 32.3059C23.2857 33.7212 18.85 32.1653 17.4201 28.8239C17.3061 28.5727 17.2095 28.3098 17.1335 28.0347C16.5241 25.8328 17.0414 23.1911 18.6584 21.5282C18.6585 21.528 18.6582 21.5273 18.6584 21.5273C18.758 21.4215 18.8598 21.2967 18.8598 21.1398C18.8598 21.0086 18.7764 20.8701 18.7041 20.7719C18.1383 19.9514 16.1787 18.5531 16.572 15.8472C16.8545 13.9031 18.5546 12.5341 20.1397 12.6152C20.2736 12.6222 20.4078 12.6303 20.5415 12.6382C21.2284 12.679 21.8276 12.7671 22.3931 12.7906C23.3395 12.8316 24.1906 12.6939 25.1986 11.8541C25.5386 11.5707 25.8112 11.3252 26.2725 11.247C26.321 11.2387 26.4416 11.1954 26.6827 11.2068C26.9287 11.2199 27.163 11.2875 27.3735 11.4276C28.1817 11.9654 28.2962 13.2677 28.3381 14.2205C28.362 14.7643 28.4279 16.0801 28.4502 16.4579C28.5017 17.3215 28.7287 17.4433 29.188 17.5945C29.4463 17.6797 29.6861 17.743 30.0395 17.8422C31.1092 18.1425 31.7435 18.4472 32.1431 18.8386C32.3816 19.0831 32.4925 19.3431 32.5268 19.5909C32.6528 20.5111 31.8123 21.6478 29.5872 22.6807C27.1549 23.8095 24.2041 24.0954 22.1653 23.8684C22.009 23.851 21.4529 23.788 21.451 23.7877C19.8201 23.5681 18.8899 25.6757 19.8686 27.1196C20.4995 28.0501 22.2176 28.6558 23.9367 28.6561C27.8783 28.6565 30.9078 26.9734 32.0347 25.5198C32.0685 25.4763 32.0718 25.4716 32.1249 25.3912C32.1803 25.3077 32.1347 25.2616 32.0656 25.3089C31.1448 25.9389 27.0552 28.4401 22.6808 27.6876C22.6808 27.6876 22.1493 27.6002 21.6641 27.4115C21.2785 27.2615 20.4715 26.8902 20.3734 26.0623C23.9036 27.154 26.1264 26.1219 26.1264 26.1219V26.1218ZM6.73637 17.7322C5.50864 17.971 4.42653 18.6668 3.76488 19.6279C3.36935 19.2981 2.63255 18.6595 2.50245 18.4107C1.44601 16.4049 3.65533 12.5048 5.19871 10.3023C9.01295 4.85925 14.9868 0.739281 17.7523 1.48684C18.2019 1.61408 19.6908 3.3404 19.6908 3.3404C19.6908 3.3404 16.9266 4.87423 14.363 7.01221C10.9088 9.6719 8.2995 13.5375 6.73637 17.7322ZM8.79942 26.937C8.61359 26.9687 8.42406 26.9814 8.23288 26.9767C6.38562 26.9272 4.39022 25.2641 4.19193 23.2919C3.97278 21.1119 5.08663 19.4342 7.05879 19.0364C7.29457 18.9889 7.57951 18.9615 7.88676 18.9775C8.99175 19.038 10.6201 19.8864 10.9921 22.2937C11.3216 24.4256 10.7983 26.5961 8.79942 26.937V26.937ZM33.8233 23.0768C33.8075 23.0209 33.7044 22.6441 33.5628 22.1901C33.4211 21.7358 33.2745 21.4162 33.2745 21.4162C33.8426 20.5656 33.8527 19.805 33.7772 19.374C33.6965 18.84 33.4742 18.3849 33.0261 17.9145C32.5779 17.4441 31.6614 16.9623 30.3733 16.6006C30.2261 16.5592 29.7403 16.4259 29.6976 16.413C29.6942 16.3851 29.662 14.8197 29.6328 14.1478C29.6114 13.662 29.5697 12.9036 29.3344 12.1566C29.054 11.1455 28.5653 10.2608 27.9555 9.69474C29.6385 7.95018 30.6892 6.02826 30.6867 4.37951C30.6818 1.20879 26.7878 0.24946 21.9891 2.23648C21.9841 2.23854 20.9797 2.66446 20.9724 2.66802C20.9678 2.66372 19.1343 0.864594 19.1067 0.84057C13.6355 -3.9316 -3.4707 15.0823 1.99847 19.7003L3.19371 20.7129C2.88368 21.516 2.76185 22.4362 2.86137 23.4258C2.9891 24.6967 3.64467 25.915 4.70726 26.8562C5.71596 27.75 7.04217 28.3156 8.32916 28.3145C10.4574 33.2191 15.3203 36.2279 21.0221 36.3972C27.1383 36.5789 32.2724 33.709 34.4238 28.5537C34.5645 28.1919 35.1617 26.5617 35.1617 25.1226C35.1617 23.6763 34.344 23.0768 33.8233 23.0768Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a class="flex items-center lg:justify-center" target="_blank">
                  <svg
                    class="h-6 hover:text-gray-900 dark:hover:text-white"
                    viewBox="0 0 124 21"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.813 0.069519L12.5605 11.1781L8.28275 0.069519H0.96875V20.2025H6.23233V6.89245L11.4008 20.2025H13.7233L18.8634 6.89245V20.2025H24.127V0.069519H16.813Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.8015 16.461V15.1601C34.3138 14.4663 33.2105 14.1334 32.1756 14.1334C30.9504 14.1334 29.8174 14.679 29.8174 15.8245C29.8174 16.9699 30.9504 17.5155 32.1756 17.5155C33.2105 17.5155 34.3138 17.1533 34.8015 16.4595V16.461ZM34.8015 20.201V18.7519C33.8841 19.8358 32.1117 20.5633 30.213 20.5633C27.9484 20.5633 25.1367 19.0218 25.1367 15.7614C25.1367 12.2326 27.9469 11.0578 30.213 11.0578C32.1756 11.0578 33.9183 11.6885 34.8015 12.7767V11.3277C34.8015 10.0605 33.7042 9.18487 31.8039 9.18487C30.3349 9.18487 28.8658 9.75687 27.6748 10.7542L25.9322 7.52314C27.831 5.92447 30.3691 5.26007 32.6291 5.26007C36.1783 5.26007 39.5179 6.561 39.5179 11.0871V20.2025H34.8015V20.201Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M40.1562 18.3002L42.1145 14.9826C43.2178 15.9447 45.57 16.9421 47.3186 16.9421C48.7237 16.9421 49.3051 16.5461 49.3051 15.9154C49.3051 14.1055 40.7094 15.9741 40.7094 10.0605C40.7094 7.4938 42.9739 5.26007 47.0391 5.26007C49.5489 5.26007 51.6276 6.04474 53.22 7.1902L51.4194 10.4858C50.5303 9.6366 48.8471 8.88127 47.0747 8.88127C45.9715 8.88127 45.2384 9.30514 45.2384 9.8786C45.2384 11.4773 53.7999 9.81994 53.7999 15.7966C53.7999 18.5686 51.3257 20.5633 47.103 20.5633C44.4429 20.5633 41.7205 19.6862 40.1562 18.3002Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M64.7231 20.2025V11.7149C64.7231 9.94019 63.7759 9.36672 62.2712 9.36672C60.8958 9.36672 59.9784 10.1177 59.4313 10.7821V20.201H54.7148V0.069519H59.4313V7.40285C60.3145 6.37619 62.063 5.26152 64.5372 5.26152C67.9065 5.26152 69.4335 7.13299 69.4335 9.81992V20.2025H64.7231Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M80.0535 16.461V15.1601C79.5643 14.4663 78.4626 14.1334 77.4217 14.1334C76.1965 14.1334 75.0635 14.679 75.0635 15.8245C75.0635 16.9699 76.1965 17.5155 77.4217 17.5155C78.4626 17.5155 79.5643 17.1533 80.0535 16.4595V16.461ZM80.0535 20.201V18.7519C79.1346 19.8358 77.3578 20.5633 75.465 20.5633C73.199 20.5633 70.3828 19.0218 70.3828 15.7614C70.3828 12.2326 73.199 11.0578 75.465 11.0578C77.4217 11.0578 79.1644 11.6885 80.0535 12.7767V11.3277C80.0535 10.0605 78.9488 9.18487 77.056 9.18487C75.5869 9.18487 74.1164 9.75687 72.9209 10.7542L71.1783 7.52314C73.0771 5.92447 75.6152 5.26007 77.8812 5.26007C81.4289 5.26007 84.7625 6.561 84.7625 11.0871V20.2025H80.0535V20.201Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M93.8157 16.461C95.6802 16.461 97.0913 15.097 97.0913 12.897C97.0913 10.7263 95.6802 9.36232 93.8157 9.36232C92.8046 9.36232 91.5854 9.90645 90.9995 10.6911V15.1601C91.5854 15.9447 92.8061 16.461 93.8157 16.461ZM86.2891 20.201V0.069519H90.9995V7.34419C92.0485 6.01247 93.6688 5.2418 95.3784 5.26152C99.0778 5.26152 101.895 8.13032 101.895 12.897C101.895 17.847 99.0198 20.5633 95.3784 20.5633C93.7235 20.5633 92.2247 19.8989 90.9995 18.5114V20.2025H86.2891V20.201Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M102.844 0.069519H107.554V20.2025H102.844V0.069519Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M116.336 9.00154C114.284 9.00154 113.49 10.2101 113.303 11.2646H119.396C119.27 10.2379 118.508 9.00154 116.336 9.00154ZM108.5 12.897C108.5 8.67447 111.712 5.26007 116.336 5.26007C120.709 5.26007 123.892 8.42807 123.892 13.3781V14.4385H113.368C113.704 15.7335 114.929 16.8218 117.067 16.8218C118.108 16.8218 119.821 16.3686 120.681 15.5839L122.725 18.6317C121.26 19.9267 118.81 20.5633 116.55 20.5633C111.991 20.5633 108.5 17.6358 108.5 12.897Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </section> */}
        <div>
          <h3 class="flex items-center w-full">
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
            <span class="mx-3 text-lg font-medium">
              Global 5K+ Happy Sponsors With us
            </span>
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
          </h3>

          <div>
            <section class="py-base container mt-10 mb-28">
              <div class="grid gap-8 grid-cols-2 md:gap-y-16 md:grid-cols-6">
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Salesforce logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="99"
                      height="69"
                      fill="none"
                      viewBox="0 0 99 69"
                    >
                      <path
                        fill="#888"
                        fill-rule="evenodd"
                        d="M61.635 29.166c-.75 0-1.279.26-1.63.79-.35.536-.53 1.299-.53 2.274 0 .976.18 1.74.53 2.282.351.536.88.797 1.63.797.75 0 1.28-.26 1.637-.797.357-.543.536-1.313.536-2.282 0-.968-.179-1.738-.536-2.274-.358-.53-.887-.79-1.637-.79zM27.582 32.56s-.729-.124-1.547-.13c-1.162-.014-1.65.412-1.65.412-.344.24-.51.605-.51 1.1 0 .316.056.563.172.742.076.116.104.158.33.336 0 0 .51.399 1.672.33a11.175 11.175 0 001.533-.206V32.56zM38.757 29.13c-.75 0-1.28.296-1.63.826-.234.35-.378.797-.46 1.34h4.056c-.04-.523-.144-.99-.378-1.34-.358-.53-.846-.825-1.595-.825h.007zM84.321 29.13c-.75 0-1.279.296-1.63.826-.234.35-.378.797-.46 1.34h4.057c-.041-.523-.145-.99-.379-1.34-.357-.53-.845-.825-1.595-.825h.007z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#888"
                        fill-rule="evenodd"
                        d="M76.99 9.298c-3.046 0-5.94.653-8.56 1.821-3.013-5.36-8.665-8.968-15.143-8.968-4.876 0-9.283 2.048-12.447 5.34A19.022 19.022 0 0025.684 0C15.156 0 6.622 8.521 6.622 19.029c0 2.687.557 5.25 1.568 7.566A16.562 16.562 0 000 40.923c0 9.134 7.337 16.542 16.38 16.542 1.155 0 2.283-.124 3.37-.35 2.482 6.74 8.96 11.544 16.559 11.544 7.598 0 13.56-4.432 16.242-10.748 2.042.997 4.34 1.56 6.767 1.56 5.797 0 10.851-3.195 13.499-7.916 1.347.275 2.743.412 4.167.412 11.683 0 21.159-9.552 21.159-21.331S88.667 9.305 76.983 9.305l.008-.007zm-55.975 24.76c0 1.725-1.252 2.79-3.267 2.79-.99 0-1.932-.158-2.936-.687-.185-.11-.378-.206-.564-.337-.02-.027-.103-.061-.04-.22l.398-1.099c.062-.186.206-.124.261-.09.11.07.193.124.33.207a4.748 4.748 0 002.593.749c.873 0 1.416-.46 1.416-1.086v-.034c0-.68-.839-.935-1.801-1.237l-.213-.069c-1.328-.378-2.751-.928-2.751-2.605v-.034c0-1.594 1.286-2.707 3.129-2.707h.2c1.079 0 2.124.316 2.88.77.07.04.138.123.097.226-.035.096-.372.996-.413 1.1-.069.185-.268.061-.268.061-.66-.364-1.692-.652-2.558-.652-.777 0-1.286.412-1.286.975v.035c0 .66.86.934 1.857 1.257l.171.055c1.32.42 2.737.997 2.737 2.591v.034l.028.007zm8.245 2.24s-.206.056-.399.104c-.192.04-.873.185-1.43.275-.564.096-1.142.144-1.726.144-.55 0-1.06-.055-1.506-.151-.454-.103-.846-.268-1.162-.502a2.379 2.379 0 01-.743-.886c-.172-.358-.261-.798-.261-1.3 0-.501.103-.934.302-1.312.2-.371.482-.687.825-.935a3.57 3.57 0 011.19-.55c.44-.116.915-.178 1.403-.178.357 0 .66.007.887.027 0 0 .447.042.935.11v-.24c0-.756-.158-1.113-.467-1.354-.317-.24-.791-.364-1.403-.364 0 0-1.382-.02-2.476.577-.048.028-.096.048-.096.048s-.138.048-.186-.089l-.405-1.079c-.062-.158.048-.227.048-.227.509-.398 1.753-.639 1.753-.639a9.417 9.417 0 011.527-.137c1.134 0 2.015.26 2.613.783.598.522.9 1.368.9 2.509v5.202s.015.15-.123.185v-.02zm3.817.166c0 .096-.07.171-.166.171h-1.506c-.096 0-.165-.075-.165-.171V24.327c0-.096.07-.172.166-.172h1.505c.097 0 .166.076.166.172v12.137zm9.42-3.904c-.013.145-.165.151-.165.151h-5.687c.035.86.241 1.471.66 1.89.413.406 1.066.667 1.947.667 1.347 0 1.925-.268 2.338-.42 0 0 .158-.054.213.097l.371 1.038c.076.178.014.233-.048.274-.357.2-1.224.564-2.867.57-.798 0-1.493-.11-2.063-.336a3.702 3.702 0 01-1.43-.948 3.808 3.808 0 01-.826-1.444 6.088 6.088 0 01-.261-1.814c0-.653.082-1.257.247-1.814a4.15 4.15 0 01.77-1.477c.344-.42.784-.756 1.307-.997.523-.247 1.17-.364 1.877-.364.612 0 1.162.13 1.63.33.358.15.715.426 1.08.824.234.248.584.79.729 1.334.364 1.278.178 2.384.172 2.446l.007-.007zm1.795 3.608c-.185-.11-.378-.206-.564-.337-.02-.027-.103-.062-.04-.22l.398-1.1c.055-.178.227-.116.261-.089.11.07.193.124.33.207a4.748 4.748 0 002.593.749c.873 0 1.416-.46 1.416-1.086v-.034c0-.68-.839-.935-1.801-1.237l-.213-.07c-1.328-.377-2.751-.927-2.751-2.604v-.034c0-1.594 1.286-2.708 3.129-2.708h.2c1.079 0 2.124.317 2.88.77.07.041.138.124.097.227-.035.096-.371.996-.413 1.1-.069.185-.268.061-.268.061-.66-.364-1.692-.653-2.558-.653-.777 0-1.286.413-1.286.976v.035c0 .66.86.934 1.857 1.257l.172.055c1.32.42 2.736.997 2.736 2.59v.035c0 1.725-1.251 2.79-3.266 2.79-.99 0-1.932-.158-2.936-.687l.027.007zm12.873-7.003c-.034.172-.192.165-.192.165h-1.878l-1.279 7.25c-.137.75-.302 1.395-.502 1.91-.199.523-.405.908-.742 1.272-.31.337-.654.591-1.052.736-.392.144-.874.213-1.396.213-.248 0-.516 0-.832-.076a4.486 4.486 0 01-.523-.151.173.173 0 01-.09-.227c.042-.117.379-1.038.42-1.155.055-.144.206-.089.206-.089.103.041.172.076.31.103.137.028.316.048.454.048.247 0 .474-.027.667-.096.24-.082.378-.213.522-.398.152-.193.275-.454.4-.811.123-.358.24-.832.343-1.402l1.279-7.113h-1.258c-.152 0-.2-.069-.186-.186l.213-1.182c.035-.171.193-.165.193-.165h1.292l.07-.384c.192-1.141.577-2.007 1.14-2.577.572-.57 1.383-.866 2.407-.866.296 0 .557.02.77.062.214.04.379.075.565.13.04.014.15.069.103.2l-.433 1.195c-.035.09-.062.144-.248.09-.048-.014-.117-.035-.289-.07a2.33 2.33 0 00-.468-.047c-.226 0-.433.027-.612.089a1.153 1.153 0 00-.474.296c-.144.144-.31.35-.399.604-.206.605-.289 1.244-.302 1.285h1.815c.151 0 .2.07.186.186l-.214 1.182.014-.02zm8.328 4.873a3.987 3.987 0 01-.763 1.457 3.599 3.599 0 01-1.293.975c-.516.234-1.121.35-1.802.35-.68 0-1.286-.116-1.802-.35a3.598 3.598 0 01-1.292-.975 4.042 4.042 0 01-.764-1.457 6.346 6.346 0 01-.247-1.808c0-.646.082-1.25.247-1.807.165-.557.42-1.045.764-1.457a3.695 3.695 0 011.292-.983c.516-.24 1.121-.364 1.802-.364.68 0 1.286.124 1.802.364s.949.57 1.293.983c.343.412.598.9.763 1.457.165.557.247 1.161.247 1.807 0 .646-.082 1.251-.247 1.808zM72.52 28.1c-.055.151-.33.935-.427 1.196-.034.096-.096.165-.206.151 0 0-.33-.075-.626-.075-.206 0-.502.027-.763.11-.261.082-.495.22-.701.419-.207.199-.379.48-.502.838-.124.357-.186.92-.186 1.491v4.24a.17.17 0 01-.172.172h-1.492a.17.17 0 01-.172-.172v-8.48c0-.096.069-.172.165-.172h1.458c.096 0 .165.076.165.172v.694c.22-.295.612-.55.963-.708.357-.158.75-.281 1.464-.233.372.02.86.123.956.165.035.014.13.075.083.206l-.007-.014zm7.117 8.295c-.633.247-1.52.426-2.38.426-1.457 0-2.571-.42-3.32-1.25-.743-.825-1.121-1.953-1.121-3.34 0-.647.089-1.251.275-1.808a4.046 4.046 0 01.818-1.457 3.87 3.87 0 011.355-.983c.536-.24 1.169-.357 1.87-.357.474 0 .9.027 1.258.082.385.062.901.2 1.121.282.041.014.152.069.103.2-.158.446-.268.742-.412 1.147-.062.172-.193.117-.193.117a5.702 5.702 0 00-1.774-.254c-.832 0-1.458.275-1.863.817-.413.543-.64 1.265-.647 2.213 0 1.045.262 1.821.722 2.296.46.474 1.107.721 1.919.721.33 0 .64-.02.921-.069.275-.04.537-.13.784-.22 0 0 .158-.061.213.104l.413 1.14c.055.145-.069.2-.069.2l.007-.007zm8.424-3.835c-.014.145-.165.151-.165.151H82.21c.034.86.24 1.471.66 1.89.413.406 1.066.667 1.946.667 1.348 0 1.926-.268 2.338-.42 0 0 .158-.054.213.097l.372 1.038c.075.178.013.233-.048.274-.358.2-1.225.564-2.868.57-.798 0-1.492-.11-2.063-.336a3.702 3.702 0 01-1.43-.948 3.81 3.81 0 01-.826-1.444 6.088 6.088 0 01-.26-1.814c0-.653.082-1.257.247-1.814a4.149 4.149 0 01.77-1.477 3.64 3.64 0 011.306-.997c.523-.247 1.17-.364 1.878-.364.612 0 1.162.13 1.63.33.357.15.715.426 1.08.824.233.248.584.79.728 1.334.365 1.278.179 2.384.172 2.446l.007-.007z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Cummins logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="76"
                      height="69"
                      fill="none"
                      viewBox="0 0 76 69"
                    >
                      <path
                        fill="#888"
                        fill-rule="evenodd"
                        d="M48.17 5.965l-2.525 1.753a20.5 20.5 0 011.252 1.628l3.383 4.88 2.483-1.725-2.613-3.766c-.055-.076-1.142-1.313.082-2.172.77-.536 1.41.048 1.877.674l2.682 3.855 2.483-1.725-3.047-4.391c-1.01-1.45-2.688-1.643-4.098-.66-.839.577-1.306 1.299-1.417 2.343l-.536-.694h-.007zm-4.168 1.23l-1.217-1.752-2.51 1.739 1.217 1.752 2.51-1.739zm5.322 7.69l-4.552-6.563-2.482 1.725 4.552 6.563 2.483-1.725zM32.34 16.94l-2.462 1.704c.557.66.84 1.045 1.252 1.629l3.383 4.88 2.483-1.726-2.613-3.766c-.055-.082-1.149-1.312.082-2.164.77-.536 1.41.048 1.884.673l2.675 3.855 2.49-1.724-2.613-3.766c-.049-.076-1.142-1.32.082-2.165.77-.536 1.41.048 1.884.673l2.675 3.856 2.49-1.725-3.047-4.392c-1.01-1.45-2.689-1.642-4.105-.66-.963.709-1.554 1.774-1.458 2.866-.832-.604-2.022-.398-2.82.152-.983.68-1.608 1.621-1.444 2.838l-.027.02-.79-1.065v.007zM19.92 25.55l-2.462 1.705c.557.66.84 1.045 1.252 1.629l3.383 4.879 2.483-1.725-2.614-3.766c-.055-.075-1.141-1.312.083-2.165.77-.536 1.41.049 1.884.674l2.675 3.855 2.49-1.725-2.62-3.766c-.049-.082-1.142-1.312.089-2.171.77-.53 1.41.048 1.877.673l2.682 3.862 2.483-1.725-3.047-4.39c-1.004-1.45-2.689-1.643-4.098-.66-.963.707-1.561 1.78-1.458 2.872-.825-.605-2.022-.405-2.82.151-.983.68-1.609 1.622-1.437 2.838l-.027.021-.791-1.058-.007-.007zm-.956 10.385l2.53-1.753a20.502 20.502 0 01-1.25-1.629l-3.384-4.872-2.49 1.725 2.614 3.766c.055.076 1.141 1.32-.09 2.172-.77.536-1.41-.049-1.877-.674l-2.675-3.855L9.86 32.54l3.046 4.391c1.004 1.45 2.689 1.643 4.098.66.84-.584 1.307-1.3 1.417-2.337l.536.694.007-.013zM56.373.145c-.234.027-.468.13-.584.213-1.314.893-2.242 2.26-1.121 3.89 1.65 2.377 5.054-1.011 5.865.15.29.42.062.846-.42 1.182-.233.165-.535.18-.797.11a.863.863 0 01-.578-.474l-2.351 1.636c1.375 2.006 3.17 1.25 4.779.13 1.506-1.044 2.833-2.625 1.623-4.364-.743-1.072-1.616-1.182-2.572-.886-1.891.598-2.881 1.32-3.218.838-.262-.378-.186-.742.185-.996.337-.234.612-.289.84-.234.212.048.302.117.453.344L60.94.15h8.486v25.015h-29.59c-4.147 0-10.267 1.89-10.267 9.12 0 7.229 6.23 8.782 10.267 8.782h29.59v25.351H36.85C18.937 68.42.906 56.414.906 34.28.906 12.142 19.604.144 36.85.144h19.53-.007zM7.494 30.14l-3.253 2.254c-2.345 1.63-3.5 4.825-1.402 7.848 2.09 3.003 5.411 3.12 7.839 1.43l3.252-2.254-1.842-2.653-3.074 2.13c-1.176.818-2.579.385-3.301-.652-.729-1.052-.646-2.516.53-3.333l3.073-2.13-1.829-2.64h.007zm65.163 36.313v-.777h.509c.268 0 .536.069.536.392 0 .378-.337.385-.674.385h-.371zm0 .24h.467l.633.997h.323l-.667-.997c.303-.055.564-.233.564-.625s-.227-.632-.736-.632h-.866v2.254h.275v-.997h.007zm.426-1.8c.95 0 1.644.735 1.644 1.67 0 .934-.702 1.67-1.644 1.67s-1.643-.736-1.643-1.67c0-.935.701-1.67 1.643-1.67zm0-.275c-1.1 0-1.953.859-1.953 1.951 0 1.093.846 1.952 1.953 1.952a1.925 1.925 0 001.953-1.952 1.93 1.93 0 00-1.953-1.951z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Twitter logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="86"
                      height="70"
                      fill="none"
                      viewBox="0 0 86 70"
                    >
                      <path
                        fill="#888"
                        d="M76.49 18.091c.049.742.049 1.491.049 2.24 0 22.905-17.446 49.322-49.354 49.322v-.014A49.151 49.151 0 01.593 61.867a34.886 34.886 0 0025.67-7.188 17.367 17.367 0 01-16.207-12.04c2.599.501 5.28.398 7.832-.296A17.339 17.339 0 013.977 25.348v-.22A17.278 17.278 0 0011.85 27.3C4.231 22.207 1.88 12.078 6.48 4.154A49.23 49.23 0 0042.23 22.262a17.334 17.334 0 015.02-16.561c6.987-6.563 17.976-6.226 24.543.749A34.899 34.899 0 0082.81 2.244a17.37 17.37 0 01-7.626 9.587 34.61 34.61 0 009.964-2.729 35.262 35.262 0 01-8.657 8.982v.007z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Pacers logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="69"
                      fill="none"
                      viewBox="0 0 75 69"
                    >
                      <path
                        fill="#888"
                        d="M68.928 9.353C63.998 3.402 57.004.096 48.842.083L16.075.062 13.07 13.717l23.476.014c4.82.007 10.432 1.422 14.256 3.89 3.823 2.466 5.315 4.088 8.96 4.095.523 0 .633.11.729.756.11.68.13 1.65.13 1.91 0 .262-.288.42-.839.42l-29.273-.02c-.709 0-1.933-.695-1.809-1.801.165-1.41.53-2.914.997-4.206.764-2.096-.997-3.484-2.647-3.484H12.712l-2.4 10.885 49.904.035c.495 0 .392.206.364.762-.027.55-.158 1.574-.234 2.179-.082.598-.577.453-1.052.467-1.127.02-3.211.289-4.428 1.203-2.07 1.553-6.478 4.281-8.96 5.078-2.648.839-12.544 3.87-15.487-1.67l-.027-.048s.02.028.027.048a19.115 19.115 0 01-1.258-3.553c-.364-1.518-1.65-2.755-3.851-2.755l-15.376-.014L7.5 38.958l28.544.02c5.866.008 12.055-1.82 15.101-3.758 3.04-1.931 5.35-3.924 7.55-4.082.73-.048 1.28-.124.991.818-1.1 3.607-4.456 9.222-9.682 12.17-2.09 1.182-4.429 1.69-5.79 1.299-3.033-.873-5.887-2.192-8.094-4.006-.77-.64-1.76-.914-2.909-.914l-26.048-.021-6.19 28.114h25.424l4.201-17.51h15.775c8.665.061 16.483-2.68 21.82-8.934 8.692-9.47 7.983-24.032.715-32.8h.02zm-1.698 7.505c1.348 2.157 1.774 4.824 1.932 7.497.014.213-.206.447-.474.447h-5.715c-.729 0-.75-.344-.77-.763-.027-.42-.144-1.258-.172-1.753-.027-.48-.2-1.037.447-1.305 1.589-.667 3.095-2.227 3.775-3.56.234-.447.578-1.196.97-.557l.007-.006zm-7.812 3.223c-2.27.247-3.328-.866-5.996-2.674-2.668-1.807-5.137-3.044-8.514-4.116-3.335-1.065-9.407-1.21-10.19-1.237-.785-.02-.689-.357-.345-.694 2.91-2.9 6.822-5.01 11.03-5.78.372-.068 1.685-.144 2.421.145 4.951 1.944 9.641 7.105 11.6 12.582.38 1.052.468 1.725 0 1.78l-.006-.006zm-7.88-14.212c-.434-.275-.324-.454 0-.412 5.425.721 10.734 3.676 13.409 7.724 1.526 2.323-1.334 5.388-2.304 5.91-1.004.536-1.203.44-1.416-.316-1.878-6.59-7.42-11.463-9.69-12.906zM65.07 37.886c-3.109 4.172-8.046 7.1-13.43 7.89-.42.061-1.334-.083.11-.922 4.325-2.508 8.176-8.404 9.207-11.792.392-1.292.434-1.36.929-1.216.66.185 1.698 1.085 2.503 2.185.797 1.1 1.141 3.237.68 3.855zm2.049-3.278c-.097.193-.468.337-.585.02-.832-2.226-2.812-3.758-4.174-4.521-.412-.234-.447-.502-.399-.9.055-.406.227-1.705.255-2.254.02-.433.192-.75.522-.75h5.949c.213 0 .474.193.474.351 0 2.838-.86 5.635-2.049 8.054h.007z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Roche logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="103"
                      height="54"
                      fill="none"
                      viewBox="0 0 103 54"
                    >
                      <path
                        fill="#888"
                        d="M84.148 24.144c-.46-.948-1.114-1.663-1.946-2.171-.832-.509-1.794-.77-2.867-.77s-2.036.254-2.868.77c-.832.515-1.485 1.244-1.946 2.171-.46.949-.695 2.048-.695 3.299v2.824c0 1.251.234 2.358.695 3.3.46.947 1.114 1.662 1.946 2.17.832.51 1.795.757 2.868.757s2.035-.255 2.867-.756c.832-.509 1.341-1.086 1.802-2.035.22-.446.412-1.01.509-1.587l-2.64-.598c-.118.564-.31 1.1-.6 1.47-.474.612-1.161.88-1.945.88s-1.472-.281-1.946-.88c-.475-.61-.702-1.484-.702-2.556v-1.065h8.17v-1.945c-.014-1.25-.24-2.343-.702-3.285v.007zm-4.813-.323c.784 0 1.471.268 1.946.873.42.536.653 1.354.701 2.289H76.68c.042-.935.268-1.753.702-2.289.46-.598 1.155-.873 1.946-.873h.007zM63.807 36.17v-9.648c0-.804.234-1.457.681-1.931.46-.474 1.025-.715 1.726-.715.701 0 1.265.24 1.726.715.46.474.68 1.113.68 1.931v9.648h2.855V25.924c0-1.484-.385-2.639-1.155-3.47-.77-.832-1.816-1.244-3.15-1.244-.729 0-1.382.137-1.994.433-.599.295-1.087.68-1.355 1.086v-7.333h-2.854v20.768h2.84v.006zM50.749 30.412c0 1.072.24 1.945.715 2.543.488.597 1.176.872 1.96.872 1.41 0 2.29-.907 2.627-2.714l2.647.611c-.22 1.512-.77 2.687-1.65 3.519-.88.831-2.084 1.25-3.624 1.25-1.664 0-3.005-.563-4.023-1.69-1.011-1.127-1.527-2.66-1.527-4.577v-2.762c0-1.918.502-3.457 1.527-4.577 1.01-1.127 2.358-1.69 4.023-1.69 1.533 0 2.736.419 3.624 1.25.887.832 1.437 2.007 1.65 3.518l-2.648.612c-.33-1.8-1.203-2.714-2.626-2.714-.784 0-1.486.268-1.96.872-.489.598-.715 1.457-.715 2.543v3.134zM40.186 33.827c-.784 0-1.471-.282-1.946-.88-.474-.611-.701-1.484-.701-2.556v-3.1c0-1.071.233-1.944.701-2.542.468-.598 1.162-.873 1.946-.873s1.472.268 1.946.873c.475.605.702 1.457.702 2.543v3.1c0 1.071-.234 1.944-.702 2.555-.474.612-1.162.88-1.946.88zm0 2.687c1.073 0 2.036-.254 2.868-.756.832-.508 1.485-1.244 1.946-2.171.46-.949.694-2.048.694-3.299v-2.825c0-1.25-.233-2.357-.694-3.298-.461-.948-1.114-1.663-1.946-2.172-.832-.508-1.795-.77-2.868-.77s-2.035.255-2.867.77c-.833.516-1.486 1.244-1.947 2.172-.46.948-.694 2.048-.694 3.299v2.824c0 1.25.234 2.357.695 3.299.46.941 1.114 1.663 1.946 2.171.832.502 1.794.756 2.867.756M24.9 24.172v-6.055h2.88c.77 0 1.37.241 1.796.743.419.501.639 1.25.639 2.288 0 1.038-.22 1.794-.64 2.288-.419.495-1.024.743-1.794.743l-2.882-.014v.007zm0 11.998v-9.263h2.448c.7 0 1.162.165 1.471.488.31.323.475.831.564 1.56l.805 7.215h2.867l-.86-7.483c-.103-.894-.22-1.485-.577-2.007-.33-.474-.805-.873-1.355-1.051.874-.413 1.561-.997 2.063-1.739.502-.742.757-1.766.757-3.072 0-1.677-.475-3.003-1.41-3.979-.95-.969-2.242-1.457-3.878-1.457h-5.736V36.17h2.84z"
                      ></path>
                      <path
                        fill="#888"
                        d="M102.88 27.326L79.747 53.921H23.6L.467 27.326 23.6.731h56.14l23.147 26.595h-.007zM78.503 51.227l20.788-23.9L78.503 3.424h-53.68L4.044 27.326l20.78 23.901h53.68z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <span class="w-full flex items-center justify-center">
                  <span class="sr-only">Slack logo.</span>
                  <div aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="103"
                      height="27"
                      fill="none"
                      viewBox="0 0 103 27"
                    >
                      <path
                        fill="#888"
                        d="M33.044 20.803l1.286-2.983c1.39 1.038 3.232 1.574 5.054 1.574 1.348 0 2.194-.515 2.194-1.306-.02-2.192-8.06-.474-8.121-5.985-.02-2.797 2.468-4.948 5.99-4.948 2.09 0 4.187.515 5.68 1.697l-1.204 3.045c-1.369-.873-3.067-1.492-4.683-1.492-1.1 0-1.822.516-1.822 1.182.02 2.151 8.12.976 8.203 6.233 0 2.86-2.427 4.866-5.907 4.866-2.55 0-4.889-.598-6.67-1.883M82.336 16.749a3.718 3.718 0 01-3.232 1.883 3.703 3.703 0 01-3.707-3.704 3.703 3.703 0 013.707-3.705c1.389 0 2.592.763 3.232 1.883l3.541-1.965c-1.327-2.364-3.871-3.979-6.773-3.979a7.769 7.769 0 00-7.77 7.766 7.769 7.769 0 007.77 7.765 7.71 7.71 0 006.773-3.979l-3.541-1.965zM51.838.716h-4.435v21.681h4.435V.716zM87.624.716v21.681h4.435v-6.5l5.26 6.5H103l-6.698-7.724 6.196-7.202h-5.426L92.06 13.45V.716h-4.435zM65.013 16.79c-.639 1.058-1.966 1.842-3.458 1.842a3.702 3.702 0 01-3.707-3.704 3.702 3.702 0 013.707-3.705c1.492 0 2.819.832 3.458 1.904v3.663zm0-9.319v1.76c-.722-1.224-2.53-2.069-4.414-2.069-3.9 0-6.96 3.436-6.96 7.745s3.068 7.786 6.96 7.786c1.884 0 3.686-.852 4.414-2.068v1.759h4.436V7.47h-4.436zM5.627 16.77a2.734 2.734 0 01-2.737 2.734 2.734 2.734 0 110-5.47h2.737v2.735zM6.996 16.77a2.734 2.734 0 012.736-2.736 2.734 2.734 0 012.737 2.735V23.6a2.734 2.734 0 01-2.737 2.735A2.734 2.734 0 016.996 23.6v-6.83zM9.732 5.788a2.734 2.734 0 110-5.47 2.734 2.734 0 012.737 2.734v2.736H9.732zM9.733 7.176a2.734 2.734 0 110 5.47H2.877a2.734 2.734 0 110-5.47h6.856zM20.694 9.91a2.734 2.734 0 012.737-2.734 2.734 2.734 0 110 5.47h-2.737V9.911zM19.325 9.91a2.734 2.734 0 01-2.737 2.736 2.734 2.734 0 01-2.736-2.735V3.059A2.734 2.734 0 0116.588.324a2.734 2.734 0 012.737 2.735v6.852zM16.588 20.865a2.734 2.734 0 110 5.47 2.734 2.734 0 01-2.736-2.735v-2.735h2.736zM16.588 19.498a2.734 2.734 0 110-5.47h6.856a2.734 2.734 0 110 5.47h-6.856z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </div>
            </section>
          </div>
        </div>

        <Reservation />

        <div>
          <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <div class="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div class="relative">
                  <a href="#">
                    <img
                      class="w-full"
                      src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                      alt="Sunset in the mountains"
                    />
                    <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>

                <div class="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    class=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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

                    <span class="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span class="ml-1">2 Comments</span>
                  </span>
                </div>
                <div class="px-6 pb-4 mb-auto">
                  <a
                    href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Simplest Salad Recipe ever
                  </a>
                  <p class="text-gray-500 text-sm border-t-black">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <hr class="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div class="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span class="ml-1 font-semibold">READ MORE </span>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                  </span>
                  <hr class="border-t-1  border-black" />
                </div>
              </div>

              <div class="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div class="relative">
                  <a href="#">
                    <img
                      class="w-full"
                      src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                      alt="Sunset in the mountains"
                    />
                    <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>
                <div class="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    class=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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

                    <span class="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span class="ml-1">2 Comments</span>
                  </span>
                </div>
                <div class="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Best FastFood Ideas (Yummy)
                  </a>
                  <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <hr class="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div class="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span class="ml-1 font-semibold">READ MORE </span>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                  </span>
                  <hr class="border-t-1  border-black" />
                </div>
              </div>

              <div class="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div class="relative">
                  <a href="#">
                    <img
                      class="w-full"
                      src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                      alt="Sunset in the mountains"
                    />
                    <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>
                <div class="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    class=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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

                    <span class="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span class="ml-1">2 Comments</span>
                  </span>
                </div>
                <div class="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Why to eat salad?
                  </a>
                  <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <hr class="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div class="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span class="ml-1 font-semibold">READ MORE </span>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                  </span>
                  <hr class="border-t-1  border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="container mx-auto px-2 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Food Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        <div className="w-full h-48 overflow-hidden  shadow-lg">
          <img
            src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-1"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full h-48 overflow-hidden  shadow-lg">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-2"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/1639457/pexels-photo-1639457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-3"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-4"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-5"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/411000/pexels-photo-411000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="food-6"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
