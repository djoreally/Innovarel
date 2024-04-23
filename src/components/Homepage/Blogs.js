import Image from "next/image";
import React from "react";
import blog from "../../assets/images/blog1.jpg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Blogs = () => {
    return (
        <section className="bg-cover bg-center">
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="mx-auto">
                    <h2 className="text-center mx-auto px-4 py-2 bg-[#FEEFF3] text-tertiary shadow-2xl rounded-xl mt-32 md:w-36 md:items-center mb-10 w-32">
                        OUR BLOG
                    </h2>

                    <h1 className="text-center text-4xl font-bold text-black dark:text-white">
                        Latest News & Blog
                    </h1>
                    <div className="flex flex-col md:flex-row gap-5 py-8">
                        <Card className="relative flex-shrink-0 w-full md:w-1/2 dark:bg-white rounded-lg">
                            <CardHeader>
                                <div className="rounded-lg">
                                    <Image className="rounded-lg" src={blog} alt="" />
                                    <p className="absolute transform rotate-90 - bg-tertiary py-2 px-4 rounded-xl text-white font-semibold md:mt-[-310px] ml-[-25px] mt-[-158px]">
                                        25 / March
                                    </p>
                                </div>
                                <br />
                            </CardHeader>
                            <CardContent>
                                <small className="text-tertiary text-base">
                                    Design // Development
                                </small>
                                <h3 className="text-3xl font-bold text-black mt-4">
                                    Maecenas maximus augue eget libero dictum, vitae tempus erat
                                    pretium.
                                </h3>
                                <p className="text-base text-black mt-4">
                                    Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                                    aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula
                                    tempus elit. Pellentesque ut scelerisque ante.
                                </p>
                                <button className="text-tertiary text-base mt-4">Read More</button>
                            </CardContent>
                        </Card>
                        <Card className="relative flex-shrink-0 w-full md:w-1/2 dark:bg-white rounded-lg">
                            <CardHeader>
                                <div className="rounded-lg">
                                    <Image className="rounded-lg" src={blog} alt="" />
                                    <p className="absolute transform rotate-90 - bg-tertiary py-2 px-4 rounded-xl text-white font-semibold md:mt-[-310px] ml-[-25px] mt-[-158px]">
                                        25 / March
                                    </p>
                                </div>
                                <br />
                            </CardHeader>
                            <CardContent>
                                <small className="text-tertiary text-base">
                                    Design // Development
                                </small>
                                <h3 className="text-3xl font-bold text-black mt-4">
                                    Maecenas maximus augue eget libero dictum, vitae tempus erat
                                    pretium.
                                </h3>
                                <p className="text-base text-black mt-4">
                                    Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac
                                    aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula
                                    tempus elit. Pellentesque ut scelerisque ante.
                                </p>
                                <button className="text-tertiary text-base mt-4">Read More</button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
