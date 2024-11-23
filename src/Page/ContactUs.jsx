import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      {/* Header */}
      <h1
        className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 md:my-12"
        data-aos="fade-up"
      >
        Get in Touch with Us
      </h1>
      <p
        className="text-center text-gray-600 text-lg md:text-xl mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Have questions or need assistance? We'd love to hear from you!
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div
          className="flex flex-col gap-6 items-start justify-center p-6 rounded-lg shadow-md bg-white"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-gray-600">
            Reach out to us through any of the methods below.
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-gray-800">
              <strong>Email:</strong> support@emart.com
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> +880 1234 567 898
            </p>
            <p className="text-gray-800">
              <strong>Address:</strong> 123 E-Mart St., Dhaka City, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="p-6 rounded-lg shadow-md bg-white"
          data-aos="fade-left"
        >
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-emerald-400"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-emerald-500 text-white rounded-md font-medium hover:bg-emerald-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Animation Section */}
      <div
        className="flex flex-col items-center justify-center py-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            <p className=""><CiFacebook/></p>
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            <i className="fab fa-twitter"><CiTwitter/></i>
          </a>
          <a
            href="#"
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            <i className="fab fa-instagram"><FaInstagram/></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
