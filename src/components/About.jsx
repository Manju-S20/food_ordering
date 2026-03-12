import footer from "../assets/footer.png";
import bgLogo from "../assets/food.jpeg";
import foodr from "../assets/foodr.jpeg";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiTwitter, CiFacebook } from "react-icons/ci";

import { FaUtensils, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaClipboardList, FaCheckSquare, FaMobileAlt } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ABOUT SECTION */}
      <div className="relative flex items-center justify-between flex-grow px-20 py-16">

        {/* Background Logo */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${bgLogo})`,
            backgroundSize: "700px",
            backgroundPosition: "left -250px center",
          }}
        ></div>

        {/* LEFT CONTENT */}
        <div className="relative max-w-xl">

          <h1 className="text-4xl font-bold mb-4">About Us</h1>

          <p className="text-gray-700 leading-relaxed">
            Welcome to Yummy Tummy, a food ordering application that makes
            discovering and ordering meals simple and convenient. Users can
            browse restaurants, search for their favorite food items, add
            them to the cart, and place orders easily. The app is designed
            with a user-friendly interface to provide a fast and smooth
            food ordering experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-3 gap-4">

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center  hover:scale-105 transition duration-300">
              <FaUtensils className="text-2xl mb-2" />
              <p>Explore Menus</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center  hover:scale-105 transition duration-300">
              <FaSearch className="text-2xl mb-2" />
              <p>Fast Search</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center  hover:scale-105 transition duration-300">
              <FaShoppingCart className="text-2xl mb-2" />
              <p>Manage Cart</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center  hover:scale-105 transition duration-300">
              <FaClipboardList className="text-2xl mb-2" />
              <p>Order Review</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center  hover:scale-105 transition duration-300">
              <FaCheckSquare className="text-2xl mb-2" />
              <p>Simple Process</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center hover:scale-105 transition duration-300">
              <FaMobileAlt className="text-2xl mb-2" />
              <p>Clean Interface</p>
            </div>

          </div>

          <a href="/"><button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition">
            Browse & Order Now
          </button></a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src={foodr}
            className="w-[420px] rounded-xl shadow-lg hover:scale-105 transition duration-300"
            alt="food"
          />
        </div>

      </div>

      {/* FOOTER */}
      <footer className="relative w-full">

        <img src={footer} className="w-full h-60 object-cover" />

        <div className="absolute bottom-8 w-full flex flex-col items-center gap-2">

          <div className="flex gap-4 text-2xl text-black">
            <FaInstagram />
            <FaXTwitter />
            <CiTwitter />
            <CiFacebook />
          </div>

          <a
            className="text-black hover:text-blue-600 text-sm"
            href="mailto:yummytummy@gmail.com"
          >
            yummytummy@gmail.com
          </a>

          <div className="text-center border-t border-white/30 py-3 text-sm">
            ©️ 2026 Yummy Tummy | All Rights Reserved
          </div>

        </div>

      </footer>

    </div>
  );
}

export default About;