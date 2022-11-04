import React from "react";
import bucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-full lg:h-[60vh] bg-accent mt-16 relative z-10">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
              class="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
              class="py-6 max-w-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              class="btn btn-primary"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0 ">
            <img src={bucketGirl} className="h-full " alt="hero-image" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl shadow-lg mx-auto  relative mt-[-50px] bg-base-200 z-50 p-10 w-5/6">
        <h1 className="text-primary text-2xl mb-5">Get Free Estimate</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
