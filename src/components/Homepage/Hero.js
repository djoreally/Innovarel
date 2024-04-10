import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section className="w-11/12 lg:w-8/12 mx-auto mt-14 flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-10">
            <div className="text-white text-justify w-full lg:w-1/2">
                <p className=" text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto lg:mx-0">
                    <span className="pl-5 pb-4">WE ARE THE BEST</span>
                </p>
                <h3 className="text-3xl text-center lg:text-left mt-5 mb-4">We Provide Website</h3>
                <h3 className="text-3xl text-center lg:text-left mb-5">Solution For You</h3>
                <p className="text-base text-center lg:text-left">
                    Mauris in enim sollicitudin quam sollicitudin fermentum ut vitae massa.Donec
                    venenatis accumsan nisi, sit amet maximus velit euismod sit amet. Vivamus et sem
                    sed ipsum pretium lobortis non vitae sem.
                </p>
                {/* <button className="text-base sm:text-lg rounded-3xl shadow-lg bg-white text-red-400 h-12 pr-6 pl-6">
                    Learn More
                </button> */}
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={heroImage} alt="hero-image" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
