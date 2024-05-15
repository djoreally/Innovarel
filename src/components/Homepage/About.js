/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import aboutImg from "../../assets/images/about.png";
import checkImg from "../../assets/images/check.png";

const About = () => {
    return (
        <section
            className="bg-no-repeat bg-cover my-20 "
            style={{ backgroundImage: "url(../../images/check.png)" }}
        >
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8">
                    <div className="md:w-1/2 ">
                        <Image className="w-full" src={aboutImg} alt="" />
                    </div>
                    <div className="md:w-1/2  mt-4 md:mt-0">
                        <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-secondary dark:bg-tertiary w-48 mx-auto lg:mx-0 my-10">
                            <h1 className="text-white">About Us</h1>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-secondary dark:text-tertiary">
                            We are a Creative Team To <br />
                            Build Your Software Better
                        </h2>
                        <p className="mb-7">
                            At Innovarel, we offer a range of cutting-edge solutions designed to
                            elevate your digital footprint and drive tangible results. From web
                            development to custom software solutions, we have the expertise and
                            experience to bring your vision to life. Discover how our digital
                            services can empower your business to thrive in the digital age
                        </p>
                        <p>
                            At our core, we're committed to delivering excellence in everything we
                            do. Whether it's building a website that captures your brand essence or
                            developing software that revolutionizes your industry, you can trust us
                            to deliver high-quality solutions that exceed your expectations.
                        </p>
                        {/* <div className="flex mb-2">
                            <Image className="h-5 w-5" src={checkImg} alt="" />
                            <p className="ml-2 text-base mt-[-3px]">
                                Suspendisse ullamcorper mollis orci in facilisis.
                            </p>
                        </div>
                        <div className="flex mb-2">
                            <Image className="h-5 w-5" src={checkImg} alt="" />
                            <p className="ml-2 text-base mt-[-3px]">
                                Etiam orci magna, accumsan varius enim volutpat.
                            </p>
                        </div>
                        <div className="flex mb-2">
                            <Image className="h-5 w-5" src={checkImg} alt="" />
                            <p className="ml-2 text-base mt-[-3px]">
                                Donec fringilla velit risus, in imperdiet turpis euismod quis.
                            </p>
                        </div>
                        <div className="flex mb-4">
                            <Image className="h-5 w-5" src={checkImg} alt="" />
                            <p className="ml-2 text-base mt-[-3px]">
                                Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.
                            </p>
                        </div> */}
                        {/* <button className="shadow-xl rounded-2xl bg-gradient-to-r from-[#F56787] to-[#F89F61] text-white px-5 py-2 md:w-32 lg:mt-4">
                            Learn More
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
