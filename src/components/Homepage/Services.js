/* eslint-disable react/no-unescaped-entities */
import React from "react";
import next from "../../assets/images/next.png";
import wordpress from "../../assets/images/wordpress.png";
import database from "../../assets/images/database.png";
import store from "../../assets/images/store.png";
import fullstack from "../../assets/images/fullstack.png";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
    return (
        <section className="mt-12" style={{ backgroundImage: "url()" }}>
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div
                    className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-secondary dark:bg-tertiary w-48 mx-auto
                "
                >
                    <h1 className="text-white mx-auto">Our Digital Services</h1>
                </div>
                <h3 className="font-bold mt-8 text-center  text-4xl text-secondary dark:text-tertiary mb-20">
                    Unlock the full potential of your online presence with our comprehensive digital
                    services.
                </h3>

                <div className="flex flex-wrap justify-center gap-5 ">
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] dark:bg-white  shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image className=" h-12 w-12" src={next} alt="research image" />
                            </div>

                            <CardTitle className="text-secondary dark:text-tertiary card-title">
                                Web Application Development with Next.js
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            We specialize in creating custom web applications using Next.js, a
                            powerful React framework. From user interface design to server-side
                            logic, our comprehensive approach covers both frontend and backend
                            development to deliver fully functional and interactive web applications
                            tailored to your needs
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] dark:bg-white  shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={wordpress}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-secondary dark:text-tertiary card-title">
                                WordPress Website Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Our WordPress website development services are perfect for businesses
                            and individuals looking to establish their online presence quickly and
                            efficiently. We handle everything from frontend design and customization
                            to backend configuration and optimization, ensuring your WordPress
                            website is visually appealing, user-friendly, and performs seamlessly.
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] dark:bg-white  shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image className=" h-12 w-12" src={database} alt="research image" />
                            </div>

                            <CardTitle className="text-secondary dark:text-tertiary card-title">
                                Headless CMS Solutions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            With our headless CMS solutions, you can enjoy the flexibility and
                            scalability of a decoupled content management system. Our team handles
                            both frontend integration and backend setup, allowing you to leverage
                            the power of headless CMS platforms like Strapi, Contentful, and
                            GraphCMS while ensuring smooth communication between your content
                            management system and your frontend technologies.
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] dark:bg-white  shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image className=" h-12 w-12" src={store} alt="research image" />
                            </div>

                            <CardTitle className="text-secondary dark:text-tertiary card-title">
                                E-commerce Solutions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            If you're looking to sell products or services online, we can help you
                            set up and optimize your e-commerce platform. Our end-to-end e-commerce
                            solutions cover everything from frontend design and user experience
                            optimization to backend development and database management, ensuring a
                            seamless shopping experience for your customers.
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] dark:bg-white  shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={fullstack}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-secondary dark:text-tertiary card-title">
                                Full-stack Web Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Our full-stack web development services encompass both frontend and
                            backend development, allowing us to create robust, feature-rich web
                            applications from start to finish. Whether you need a custom web portal,
                            a data-driven dashboard, or a dynamic web application, our full-stack
                            developers have the expertise to bring your ideas to life and deliver
                            high-quality solutions that meet your business objectives.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
