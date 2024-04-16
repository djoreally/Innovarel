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
            <div className="w-11/12 lg:w-8/12 mx-auto relative">
                <div className="flex flex-col md:flex-row ">
                    <div className="md:w-1/2 ">
                        <Image
                            className="w-full lg:w-1/2 lg:absolute left-0"
                            src={aboutImg}
                            alt=""
                        />
                    </div>
                    <div className="md:w-1/2 md:ml-24 mt-4 md:mt-0">
                        <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto lg:mx-0 my-10">
                            <h1 className="text-white">About Us</h1>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-tertiary">
                            We Have Creative Team To <br />
                            Build Your Website Better
                        </h2>
                        <p className="mb-7">
                            Proin laoreet leo vel enim gravida, at porttitor metus ultricies. Cras
                            eu velit <br />
                            enim. Vivamus blandit, dolor ut aliquet rutrum, ex elit mattis sapien,
                            non <br />
                            molestie felis neque et nulla. Sed euismod turpis id nibh suscipit
                            semper. <br />
                            Pellentesque dapibus risus arcu.
                        </p>
                        <div className="flex mb-2">
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
                        </div>
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
