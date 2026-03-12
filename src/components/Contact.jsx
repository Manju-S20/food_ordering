import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

import footer from "../assets/footer.png";
import bgLogo from "../assets/food.jpeg";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen relative">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat opacity-10 pointer-events-none -z-10"
        style={{
          backgroundImage: `url(${bgLogo})`,
          backgroundSize: "700px",
          backgroundPosition: "left -250px center",
        }}
      ></div>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center flex-grow">
        <div className="p-10 border rounded-lg shadow-lg text-center bg-white/80 backdrop-blur-sm">
          
          <h1 className="text-3xl font-bold">Contact Us</h1>

          <p className="mt-4">Email: yummytummy@gmail.com</p>
          <p>Phone: +91 9876543210</p>

          <form className="flex flex-col w-[300px] mt-6 gap-3">
            
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
            />

            <textarea
              placeholder="Your Message"
              className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative">
        <img
          src={footer}
          alt="footer background"
          className="w-full h-60 object-cover"
        />

        <div className="absolute bottom-8 w-full flex flex-col items-center gap-2">

          <div className="flex gap-4 text-2xl text-black">
            <FaInstagram />
            <FaXTwitter />
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

export default Contact;