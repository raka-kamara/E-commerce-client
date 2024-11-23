import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../Components/Home/Banner";
import FeaturedProduct from "../Components/Home/FeaturedProduct";
import Accordion from "../Components/Home/Accordion";
import UserReview from "../Components/Home/UserReview";
import ContactUs from "./ContactUs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom duration
  }, []);

  return (
    <div>
      {/* Banner */}
      <Banner />

      <div className="container mx-auto">
        {/* Featured Product Section */}
        <div className="my-24" data-aos="fade-up">
          <h1 className="my-16 text-2xl font-semibold text-center">
            Featured Product
          </h1>
          <div data-aos="fade-up" data-aos-delay="200">
            <FeaturedProduct />
          </div>
        </div>

        {/* User Review Section */}
        <div className="my-24" data-aos="fade-right">
          <h1 className="my-16 text-2xl font-semibold text-center">
            User Review
          </h1>
          <div data-aos="fade-right" data-aos-delay="300">
            <UserReview />
          </div>
        </div>

        {/* Accordion Section */}
        <div className="my-24" data-aos="zoom-in">
          <h1 className="my-16 text-2xl font-semibold text-center">
            Frequently Asked Question
          </h1>
          <div data-aos="zoom-in" data-aos-delay="400">
            <Accordion />
          </div>
        </div>
        <div>
        <h1 className="my-16 text-2xl font-semibold text-center">
            Contact Us
          </h1>
        </div>
        <ContactUs/>
      </div>
    </div>
  );
};

export default Home;
