/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card } from "@/components/ui/card";
import { GithubIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { Input } from "@/components/ui/input";
import { TwitterIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer>
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
                    <Card className="card bg-primary text-primary-content p-10  shadow-2xl bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] flex justify-center items-center">
                        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                            <h2 className="card-title text-4xl lg:text-5xl text-center lg:text-left mb-6 lg:mb-0 text-white">
                                Subscribe To Our Newsletter
                                <br />
                                For Latest Update
                            </h2>
                            <div className="w-full lg:w-2/5 flex justify-center items-center rounded-3xl ">
                                <Input
                                    type="email"
                                    name="search"
                                    id="search"
                                    placeholder="Your Email Address"
                                    className="w-full border-none bg-transparent px-4 py-2 outline-none focus:outline-none rounded-3xl bg-white shadow-2xl h-[52px] text-black
                                    "
                                />
                                <Button className="relative mr-2 rounded-full px-2 py-2 text-white hover:text-secondary dark:hover:text-tertiary right-12 bg-secondary dark:bg-tertiary border-secondary dark:border-tertiary">
                                    <SearchIcon />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="relative bg-blueGray-200 pt-8 pb-6 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-blueGray-700">
                                    Let's keep in touch!
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <Button
                                        size="icon"
                                        className="bg-white dark:bg-white border-none text-sky-500 dark:text-sky-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    >
                                        <TwitterIcon />
                                    </Button>
                                    <Button
                                        size="icon"
                                        className="bg-white dark:bg-white border-none text-blue-600 dark:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    >
                                        <FacebookIcon />
                                    </Button>
                                    <Button
                                        size="icon"
                                        className="bg-white dark:bg-white border-none text-pink-400 dark:text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    >
                                        <InstagramIcon />
                                    </Button>
                                    <Button
                                        size="icon"
                                        className="bg-white dark:bg-white border-none text-black dark:text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    >
                                        <GithubIcon />
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                            Useful Links
                                        </span>
                                        <div className=" grid grid-col-1 lg:grid-cols-2 gap-x-5 mt-10">
                                            {routes.map((route) => {
                                                return (
                                                    <h6 key={route.name}>
                                                        <Link
                                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm "
                                                            href={route.route}
                                                        >
                                                            {route.name}
                                                        </Link>
                                                    </h6>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                            Other Resources
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                                >
                                                    MIT License
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/terms?ref=njs-profile"
                                                >
                                                    Terms &amp; Conditions
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/privacy?ref=njs-profile"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    ©2024
                                    <a
                                        href="https://innovarel.vercel.app/"
                                        className="text-tertiary "
                                        target="_blank"
                                    >
                                        {" "}
                                        Innovarel
                                    </a>{" "}
                                    Developed by{" "}
                                    <a
                                        href="https://lantabur-softech.com"
                                        className="text-[#00c0ff] "
                                    >
                                        Lantabur Softech
                                    </a>
                                    .
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
