import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section className="bg-primary">
            <div className="w-11/12 lg:w-8/12 mx-auto pt-14 flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-10">
                <div className="text-white text-justify w-full lg:w-1/2">
                    <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-secondary dark:bg-tertiary w-48 mx-auto lg:mx-0">
                        <p className="">WE ARE THE BEST</p>
                    </div>
                    <h3 className="text-3xl text-center lg:text-left mt-5 mb-4">
                        We Provide Website
                    </h3>
                    <h3 className="text-3xl text-center lg:text-left mb-5">Solution For You</h3>
                    <p className="text-base text-left">
                        Mauris in enim sollicitudin quam sollicitudin fermentum ut vitae massa.Donec
                        venenatis accumsan nisi, sit amet maximus velit euismod sit amet. Vivamus et
                        sem sed ipsum pretium lobortis non vitae sem.
                    </p>
                    {/* <button className="text-base sm:text-lg rounded-3xl shadow-lg bg-white text-red-400 h-12 pr-6 pl-6">
                    Learn More
                </button> */}
                </div>
                <div className="w-full lg:w-1/2">
                    <Image src={heroImage} alt="hero-image" className="hero-image" />
                </div>
            </div>
            <div className=" bottom-0 left-0 w-full h-[100px] lg:h-[350px] overflow-hidden mt-10">
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
                        fill="#fff"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
