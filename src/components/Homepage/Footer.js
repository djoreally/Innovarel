import React from "react";
import { Card } from "@/components/ui/card";

const Footer = () => {
    return (
        <div>
            <div className=" top-0 left-0 w-full h-[100px] lg:h-[350px] overflow-hidden mt-10 z-10">
                <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="5%" stopColor="#010280" />
                            <stop offset="95%" stopColor="#1973d1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 0,300 L 0,112 C 151.46428571428572,64.82142857142856 302.92857142857144,17.64285714285714 406,23 C 509.07142857142856,28.357142857142857 563.75,86.25 682,141 C 800.25,195.75 982.0714285714284,247.35714285714283 1119,242 C 1255.9285714285716,236.64285714285717 1347.9642857142858,174.32142857142856 1440,112 L 1440,300 L 0,300 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#000"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0 z-10"
                    ></path>
                </svg>
            </div>
            <section className="bg-black">
                <div className="max-w-6xl mx-auto bg-pattern bg-cover bg-center z-50">
                    <Card className="card bg-primary text-primary-content p-10  shadow-2xl bg-gradient-to-r from-[#F56787] to-[#F79C63] flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-between items-center ">
                            <h2 className="card-title text-4xl lg:text-5xl text-center lg:text-left mb-6 lg:mb-0">
                                Subscribe To Our Newsletter
                                <br />
                                For Latest Update
                            </h2>
                            <div className="flex rounded-3xl bg-white shadow-2xl h-12">
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Your Email Address"
                                    className="w-full border-none bg-transparent px-4 py-1 outline-none focus:outline-none"
                                />
                                <button className="m-2 rounded px-4 py-2 text-white">
                                    <img
                                        className="h-11 w-12 ml-5 rounded-full mt-[-14px] bg-[#F56787]"
                                        src="./communication.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between mt-10">
                        <div className="mb-16 lg:mb-0">
                            <img
                                src="./logo-2.png"
                                alt=""
                                className="mx-auto lg:mx-0 mb-4 lg:mb-0  ml-4"
                            />
                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <div className="flex mb-4 lg:mb-0">
                                    <img
                                        className="h-8 bg-[#F56787] rounded-full ml-6 md:mt-4 md:ml-[8px]"
                                        src="./telephone.png"
                                        alt=""
                                    />
                                    <p className="mt-[-12px] ml-3 md:mt-1">+91 123-456-7890</p>
                                </div>
                                <div className="ml-[68px] mt-[-30px] lg:ml-9 md:mt-12">
                                    <p className="md:ml-[-167px]">+91 123-456-7890</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                                <div className="flex mb-4 lg:mb-0">
                                    <img
                                        className="h-8 bg-[#F56787] rounded-full ml-6 md:ml-[8px]"
                                        src="./email1.png"
                                        alt=""
                                    />
                                    <p className="mt-[-12px] ml-3">info@example.com</p>
                                </div>
                                <div className="ml-[67px] mt-[-28px] lg:ml-9 md:mt-8">
                                    <p className="md:ml-[-172px]">info@example.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-8">
                                <div className="flex mb-4 lg:mb-0">
                                    <img
                                        className="h-8 bg-[#F56787] rounded-full ml-6 md:ml-2"
                                        src="./location.png"
                                        alt=""
                                    />
                                    <p className="mt-[-12px] ml-3">Marmora Road Chi Minh City,</p>
                                </div>
                                <div className="ml-[68px] lg:ml-9 mt-[-28px] md:mt-6 ">
                                    <p className="md:ml-[-242px]">Vietnam</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 md:ml-[-100px] lg:mt-0">
                            <p className="text-4xl text-black font-bold ml-[-195px] mt-[-90px] text-center lg:text-left md:mt-2 md:ml-1">
                                Our links
                            </p>
                            <ul className="text-base text-black mt-8 ml-5">
                                <li className="mb-4 hover:ml-5">Home</li>
                                <li className="mb-4 hover:ml-5">About Us</li>
                                <li className="mb-4 hover:ml-5">Services</li>
                                <li className="mb-4 hover:ml-5">Team</li>
                                <li className="mb-4 hover:ml-5">Blog</li>
                            </ul>
                        </div>
                        <div className="mt-16 lg:mt-0">
                            <p className="text-4xl text-black font-bold ml-[-130px] mt-[-10px] text-center md:mt-3 lg:text-left">
                                Our Services
                            </p>
                            <ul className="text-base text-black mt-8 ml-5 md:ml-[-100px]">
                                <li className="mb-4 hover:ml-5">Home</li>
                                <li className="mb-4 hover:ml-5">About Us</li>
                                <li className="mb-4 hover:ml-5">Services</li>
                                <li className="mb-4 hover:ml-5">Team</li>
                                <li className="mb-4 hover:ml-5">Blog</li>
                            </ul>
                        </div>
                        <div className="mt-16 lg:mt-0">
                            <p className="text-4xl text-black font-bold ml-[-155px] text-center md:mt-4  lg:text-left">
                                Other links
                            </p>
                            <ul className="text-base text-black mt-8 ml-5 md:ml-[-120px]">
                                <li className="mb-4 hover:ml-5">Home</li>
                                <li className="mb-4 hover:ml-5">About Us</li>
                                <li className="mb-4 hover:ml-5">Services</li>
                                <li className="mb-4 hover:ml-5">Team</li>
                                <li className="mb-4 hover:ml-5">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center p-1">
                    <div className="mb-4 lg:mb-0">
                        <p className="text-base text-white">
                            Copyright © 2021 DexignZone. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center">
                        <img className="h-8 w-auto lg:h-8 lg:p-1" src="./facebook.png" alt="" />
                        <img className="h-7 w-auto lg:h-7 lg:p-1" src="./social.png" alt="" />
                        <img className="h-8 w-auto lg:h-8 lg:p-1" src="./twitter.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
