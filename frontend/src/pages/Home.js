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
import Footer from "../component/Footer";

const Home = () => {
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

      <div className="container mx-auto mt-24 text-center justify-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <span className=" text-red-700 font-bold text-xl">
                Best Food menu
              </span>
              <h2 className="text-3xl font-bold mt-3">Our Popular Food Items</h2>
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
        <div className="p-1 flex flex-wrap items-center justify-center">
          {menu.map((menu) => (
            <SwiperSlide key={menu._id}>
              <div
                className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg group"
                style={{ backgroundColor: "#faf7f2" }}
              >

                
                <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                  <img
                    className="w-40 h-40 rounded-full object-cover"
                    src={menu.imageUrl}
                    alt={menu.name}
                  />
                   <span className="absolute top-12 left-8 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full">
          24% <br />OFF
        </span>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1 text-center text-black font-extrabold ">
                    {menu.name}
                  </span>

                  <span className="block text-sm text-center pt-3 text-black">
                    {menu.description}
                  </span>

                  <span className="block text-xs font-bold px-2 py-2  items-center text-red-900">
                    LKR {menu.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

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

      <div>
        <img src="/hero_1.png" alt="CEO" className="" />
      </div>

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

      <div>
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-2 gap-2 ">
            {/* Box 1 */}
            <div className="border-2 border-dotted border-gray-300 p-4 rounded-lg">
              {/* Item 1 */}
              <div className=" rounded-lg p-2  flex items-center mb-4">
                <img
                  src="https://img.freepik.com/premium-photo/vegetarian-burger-with-variety-fresh-vegetables-tender-lettuce-leaves_124507-67662.jpg"
                  alt="Vegetables Burger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Vegetables Burger</h3>
                    <span className="text-gray-600">
                      ------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    American-inspired sushi roll
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 2 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill"
                  alt="Hamburger Burger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Hamburger Burger</h3>
                    <span className="text-gray-600">
                      --------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Chow mien Fried noodles
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 3 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"
                  alt="Delicious Cheeseburger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">
                      Delicious Cheeseburger
                    </h3>
                    <span className="text-gray-600">-------------------</span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Barbecue Italian cuisine
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 4 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://production-assets.gousto.co.uk/build/7050f50349ae31dd7a7486c55024fe35e0de1bf2/856bca25c1c2cbaf608d598f844c1a05.jpg"
                  alt="Brief Barger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Brief Barger</h3>
                    <span className="text-gray-600">
                      ----------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Japanese Cuisine Chicken
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="border-2 border-dotted border-gray-300 p-4 rounded-lg">
              {/* Item 5 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB_97VXNUYlph5k7DJPSFgI8Rq3o_fwLwKXQCLs367r-XY3ijtJRnOWZwysTX2qrgDOw&usqp=CAU"
                  alt="Spacial Barger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Spacial Barger</h3>
                    <span className="text-gray-600">
                      -------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Barbecue Italian cuisine pizza
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 6 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"
                  alt="Hamburger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Hamburger</h3>
                    <span className="text-gray-600">
                      ----------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Barbecue Italian cuisine pizza
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 7 */}
              <div className="rounded-lg p-4  flex items-center mb-4">
                <img
                  src="https://www.foodrepublic.com/img/gallery/100-italian-fooddrink-words-and-phrases/l-intro-1684783348.jpg"
                  alt="Chicken Barger"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Chicken Barger</h3>
                    <span className="text-gray-600">
                      -------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    American-inspired sushi roll
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>

              <hr className="border border-dotted w-11/12 mx-auto border-gray-300" />

              {/* Item 8 */}
              <div className="rounded-lg p-4 flex items-center mb-4">
                <img
                  src="https://thumbs.dreamstime.com/b/vibrant-traditional-indian-dish-samosas-decorative-plate-placed-colorful-tablecloth-festive-independence-day-321774548.jpg"
                  alt="Brief Pizza"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">Brief Pizza</h3>
                    <span className="text-gray-600">
                      ----------------------------------
                    </span>
                    <span className="text-lg text-red-500 font-semibold bg-red-200 p-1 rounded-lg">
                      $27.00
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Barbecue Italian cuisine pizza
                  </p>
                  <div className="flex mt-2">
                    <span className="text-red-500">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-14">
          <img src="/hero_2.png" alt="CEO" className="rounded-lg " />
        </div>

        {/* Chef Card */}

        <div className="text-center mt-10 ">
          <h2 className="text-red-500 font-bold text-lg">Expert Chefs</h2>
          <h1 className="text-3xl font-bold my-4">Meet our expert chefs</h1>
        </div>

        <div>
          <div className="p-1 flex flex-wrap items-center justify-center ">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                className=" object-cover w-64 h-80"
                src="https://www.josejeuland.com/wp-content/uploads/2022/04/onsiteheadshot.jpg"
                alt=""
              />
            </div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                className=" object-cover w-64 h-80"
                src="https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww="
                alt=""
              />
            </div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                className=" object-cover w-64 h-80 items-center"
                src="https://i.pinimg.com/originals/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.png"
                alt=""
              />
            </div>

            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <img
                className=" object-cover w-64 h-80"
                src="https://i.pinimg.com/736x/5f/9c/91/5f9c91fc2df3edb394de5aa2dd51e408.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="flex items-center w-full px-32  mt-10">
            <span className="flex-grow bg-gray-200 rounded h-0.5"></span>
            <span className="mx-5 text-lg font-medium">
              Global 5K+ Happy Sponsors With us
            </span>
            <span className="flex-grow bg-gray-200 rounded h-0.5"></span>
          </h3>

          <div>
            <section className="py-base container mt-10 mb-28 px-24">
              <div className="grid gap-8 grid-cols-2 md:gap-y-16 md:grid-cols-6">
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_2-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_3-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_4-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_5-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_6-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
                <span className="w-full flex items-center justify-center">
                  <div aria-hidden="true">
                    <img
                      src=" https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/brand_2_7-1.svg"
                      alt="Spacial Barger"
                      className="w-20 h-20 object-cover"
                      style={{ filter: "invert(100%) brightness(0)" }}
                    />
                  </div>
                </span>
              </div>
            </section>
          </div>
        </div>

        <Reservation />

        <div className="text-center mt-10 ">
          <h2 className="text-red-500 font-bold text-lg">Blog & News</h2>
          <h1 className="text-3xl font-bold my-4">Get Update Our Foods</h1>
        </div>

        <div>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>
                <div className="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    className=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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

                    <span className="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span className="ml-1">2 Comments</span>
                  </span>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Easiest ever seafood rice
                  </a>
                  <p className="text-gray-500 text-sm">
                  Using pre-prepared mixed seafood makes this healthy rice dish very easy to put together. Plus, using one-pot means you save on washing up.
                  </p>
                </div>
                <hr className="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div className="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1 font-semibold">READ MORE </span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <hr className="border-t-1  border-black" />
                </div>
              </div>

              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://img.freepik.com/premium-photo/culinary-creations-culinary-mastery-gastronomic-art-delicious-visuals-tasty-delights-food-aesth_497046-451.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>
                <div className="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    className=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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

                    <span className="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span className="ml-1">2 Comments</span>
                  </span>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Best FastFood Ideas (Yummy)
                  </a>
                  <p className="text-gray-500 text-sm">
                  Using pre-prepared  FastFood Ideas makes this healthy  dish very easy to put together. Plus, using one-pot means you save on washing up.
                  </p>
                </div>
                <hr className="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div className="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1 font-semibold">READ MORE </span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <hr className="border-t-1  border-black" />
                </div>
              </div>

              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6M-aj_twcaDdQ6bVg2c52cL2kp6MNlRtlw&s"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!"></a>
                </div>
                <div className="flex flex-1 gap-2 px-6 pt-4 ">
                  <span
                    href="#"
                    className=" text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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

                    <span className="ml-1">16 Nov, 2022</span>
                  </span>
                  <div> | </div>
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
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
                        d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                      />
                    </svg>

                    <span className="ml-1">2 Comments</span>
                  </span>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    Why to eat salad?
                  </a>
                  <p className="text-gray-500 text-sm">
                  Using pre-prepared  Salad Ideas makes this healthy Salad very easy to put together. Plus, using one-pot means you save on washing up
                  </p>
                </div>
                <hr className="border-t-1 w-11/12 mx-auto border-gray-300" />
                <div className="px-6 py-3 flex flex-row items-center justify-between  ">
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1 font-semibold">READ MORE </span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <hr className="border-t-1  border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container mx-auto px-2 py-8">
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpePVeK-fPu_ghtzI_NsOLVduNZqoTgibunw&s"
                  alt="food-3"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzHsOTQr4kizMfd6D4Q3iUpl7acuTdL0wqQ&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPVJ6DuDvbzyZDkeoL-xZvONJTLDzOzs5CA&s"
                  alt="food-6"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
