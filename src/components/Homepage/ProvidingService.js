import Image from "next/image";
import React from "react";
import ideaImg from "../../assets/images/idea.png";
import terminalImg from "../../assets/images/terminal.png";
import rocketImg from "../../assets/images/rocket.png";
import { Card, CardContent, CardHeader } from "../ui/card";

const ProvidingService = () => {
    return (
        <section className="bg-cover bg-center py-10" style={{ backgroundImage: "" }}>
            <div className="flex flex-col lg:flex-row justify-start gap-0 items-center w-11/12 lg:w-8/12 mx-auto ">
                <div className="lg:w-1/2">
                    <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto lg:mx-0 my-5">
                        <h1 className="text-white">What we do!</h1>
                    </div>
                    <p className="text-5xl text-tertiary font-semibold pt-4 text-center lg:text-start">
                        Behind The Story Of <br />
                        Slack Digital Agency
                    </p>

                    <p className="font-semibold hidden md:block mt-5">
                        Suspendisse potenti. Donec vel massa ut justo efficitur lacinia <br />
                        non ut felis. Etiam euismod, magna et efficitur ullamcorper, <br />
                        justo justo suscipit tellus, quis egestas lectus nulla ac velit. <br />
                        Morbi consequat vehicula tincidunt.
                    </p>
                </div>
                <div className=" mt-12 lg:mt-0 lg:mr-4 grid flex flex-col  justify-start items-center gap-5">
                    <Card className="card w-full p-5 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-tertiary to-[#9CFAAC]">
                        <CardHeader className="m-0 p-0">
                            <Image
                                className="w-28 md:w-20 lg:w-20 md:h-20 lg:h-20"
                                src={ideaImg}
                                alt=""
                            />
                        </CardHeader>
                        <CardContent className="p-0">
                            <h3 className="text-tertiary text-2xl font-bold card-title mb-3">
                                Idea & Analysis Gathering
                            </h3>
                            <p className=" text-black">
                                Maecenas laoreet efficitur sagittis. Aliquam <br />
                                eleifend nisl leo, sit amet consequat augue mattis
                                <br />
                                varius. Suspendisse rhoncus nisl.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="card w-full p-5 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] lg:ml-20">
                        <CardHeader className="m-0 p-0">
                            <Image
                                className="w-28 md:w-20 lg:w-20 md:h-20 lg:h-20"
                                src={ideaImg}
                                alt=""
                            />
                        </CardHeader>
                        <CardContent className="p-0">
                            <h3 className="text-tertiary text-2xl font-bold card-title mb-3">
                                Idea & Analysis Gathering
                            </h3>
                            <p className=" text-black">
                                Maecenas laoreet efficitur sagittis. Aliquam <br />
                                eleifend nisl leo, sit amet consequat augue mattis
                                <br />
                                varius. Suspendisse rhoncus nisl.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="card w-full p-5 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-tertiary to-[#9CFAAC]">
                        <CardHeader className="m-0 p-0">
                            <Image
                                className="w-28 md:w-20 lg:w-20 md:h-20 lg:h-20"
                                src={ideaImg}
                                alt=""
                            />
                        </CardHeader>
                        <CardContent className="p-0">
                            <h3 className="text-tertiary text-2xl font-bold card-title mb-3">
                                Idea & Analysis Gathering
                            </h3>
                            <p className=" text-black">
                                Maecenas laoreet efficitur sagittis. Aliquam <br />
                                eleifend nisl leo, sit amet consequat augue mattis
                                <br />
                                varius. Suspendisse rhoncus nisl.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ProvidingService;
