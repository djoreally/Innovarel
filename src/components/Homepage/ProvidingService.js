/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import ideaImg from "../../assets/images/idea.png";
import collaborationImg from "../../assets/images/collaboration.png";
import executionImg from "../../assets/images/execution.png";

import { Card, CardContent, CardHeader } from "../ui/card";

const ProvidingService = () => {
    return (
        <section className="bg-cover bg-center py-10" style={{ backgroundImage: "" }}>
            <div className="flex flex-col lg:flex-row justify-start gap-0 items-center w-11/12 lg:w-8/12 mx-auto  gap-5">
                <div className="md:w-1/2">
                    <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-secondary dark:bg-tertiary w-48 mx-auto lg:mx-0 my-5">
                        <h1 className="text-white">What we do!</h1>
                    </div>
                    <p className="text-5xl text-secondary dark:text-tertiary font-semibold pt-4 text-center lg:text-start">
                        Behind The Story Of <br />
                        Slack Digital Agency
                    </p>

                    <p className="font-semibold hidden md:block mt-5">
                        Innovation lies at the heart of everything we do. We strive to push the
                        boundaries of what's possible, constantly seeking new ideas, approaches, and
                        solutions to tackle complex challenges. Whether it's developing
                        groundbreaking technologies, revolutionizing processes, or pioneering novel
                        strategies, we embrace innovation as a driving force for progress and
                        growth.
                    </p>
                </div>
                <div className="lg:w-1/2 mt-12 lg:mt-0 lg:mr-4  flex flex-row flex-wrap lg:flex-col  justify-start items-center gap-5">
                    <Card className="card lg:w-full p-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC]">
                        <CardContent className="p-0 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5 ">
                            <div>
                                <Image
                                    className="lg:w-full lg:h-full w-96 h-96"
                                    src={ideaImg}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h3 className="text-secondary dark:text-tertiary text-2xl font-bold card-title mb-3">
                                    Idea & Analysis Gathering
                                </h3>
                                <p className=" text-black">
                                    We start by listening to your vision and understanding your
                                    unique needs. Whether you're launching a new product, revamping
                                    your website, or exploring innovative solutions, we take the
                                    time to grasp the essence of your goals and aspirations.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card lg:w-full p-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC] lg:ml-20">
                        <CardContent className="p-0 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5">
                            <div>
                                <Image
                                    className="lg:w-full lg:h-full w-96 h-96"
                                    src={collaborationImg}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h3 className="text-secondary dark:text-tertiary text-2xl font-bold card-title mb-3">
                                    Collaborative Exploration
                                </h3>
                                <p className=" text-black">
                                    Together, we explore ideas, evaluate options, and refine our
                                    approach to ensure alignment with your vision and goals. Based
                                    on the collaborative exploration, we refine our strategy and
                                    approach to deliver a solution that exceeds your expectations.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card lg:w-full p-5 card-body rounded-2xl dark:bg-white hover:bg-gradient-to-r from-secondary to-[#9cbafa] dark:from-tertiary dark:to-[#9CFAAC]">
                        <CardContent className="p-0 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-5 ">
                            <div>
                                <Image
                                    className="lg:w-full lg:h-full w-96 h-96"
                                    src={executionImg}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h3 className="text-secondary dark:text-tertiary text-2xl font-bold card-title mb-3">
                                    Aligning Vision & Execution
                                </h3>
                                <p className=" text-black">
                                    Our approach ensures that every solution we deliver drives
                                    tangible results and fosters long-term success for your project.
                                    By combining insights-driven strategy with collaborative
                                    exploration, we bridge the gap between vision and execution.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ProvidingService;
