import img from "../../../public/bg.avif";

import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="hero-content text-white text-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-6xl font-extrabold drop-shadow-lg leading-tight">
              Welcome to Your Dream Store
            </h1>
            <p className="mb-8 text-lg font-light">
              Discover a world of gadgets and technology. Explore, shop, and
              enjoy amazing deals every day. Your satisfaction is our priority.
            </p>
            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-3 text-lg rounded-full shadow-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
