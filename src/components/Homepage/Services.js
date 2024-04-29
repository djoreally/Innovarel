import React from "react";
import researchImage from "../../assets/images/research.png";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
    return (
        <section className="mt-12" style={{ backgroundImage: "url()" }}>
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="grid grid-cols-1  lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto lg:mx-0">
                            <h1 className="text-white">Our Services</h1>
                        </div>
                        <h3 className="font-bold mt-8 text-center lg:text-left text-4xl text-tertiary mb-20">
                            We Are Providing <br />
                            Digital Services
                        </h3>
                    </div>

                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] dark:bg-white mb-5 shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={researchImage}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-tertiary card-title">
                                Strategy & Research
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus
                            magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis
                            venenatis
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] dark:bg-white mb-5 shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={researchImage}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-tertiary card-title">
                                Strategy & Research
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus
                            magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis
                            venenatis
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-3 ">
                    <div className="xl:mt-[-110px]">
                        <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] dark:bg-white mb-5 shadow-md card">
                            <CardHeader>
                                <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                    <Image
                                        className=" h-12 w-12"
                                        src={researchImage}
                                        alt="research image"
                                    />
                                </div>

                                <CardTitle className="text-tertiary card-title">
                                    Strategy & Research
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-black mt-4">
                                Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
                                lacus magna, rhoncus quis magna quis, pellentesque luctus leoam
                                iaculis venenatis
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] dark:bg-white mb-5 shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={researchImage}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-tertiary card-title">
                                Strategy & Research
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus
                            magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis
                            venenatis
                        </CardContent>
                    </Card>
                    <Card className="w-full lg:w-96 glass hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] dark:bg-white mb-5 shadow-md card">
                        <CardHeader>
                            <div className="rounded-full bg-white p-3 w-20 h-20 flex justify-center items-center">
                                <Image
                                    className=" h-12 w-12"
                                    src={researchImage}
                                    alt="research image"
                                />
                            </div>

                            <CardTitle className="text-tertiary card-title">
                                Strategy & Research
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-black mt-4">
                            Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent lacus
                            magna, rhoncus quis magna quis, pellentesque luctus leoam iaculis
                            venenatis
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
