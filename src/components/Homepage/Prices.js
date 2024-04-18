import { PlaneIcon, RocketIcon, SendIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const Prices = () => {
    return (
        <section className="bg-cover bg-center mt-32" style={{ backgroundImage: "" }}>
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto my-5">
                    <h1 className="text-white">Pricing Table</h1>
                </div>
                <h3 className="text-center text-4xl font-bold text-primary dark:text-white">
                    Choose A Plan That’s right For You
                </h3>
                <Tabs defaultValue="monthly" className="w-full mt-10">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="yearly">Yearly</TabsTrigger>
                    </TabsList>
                    <TabsContent value="monthly">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Basic Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <SendIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Standard Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <PlaneIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Premium Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <RocketIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="yearly">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Basic Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <SendIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Standard Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <PlaneIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                            <Card className="card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white">
                                <CardContent className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-tertiary p-5 text-4xl">
                                        Premium Plan
                                    </h2>
                                    <div className="card-icon-div rounded-full bg-gradient-to-r from-tertiary to-[#9CFAAC] p-3 w-20 h-20 flex justify-center items-center mx-auto">
                                        <RocketIcon size={32} className="card-icon text-white" />
                                    </div>
                                    <p className="text-black text-base mt-6">
                                        <span className="text-4xl font-bold">$49</span>$/Month
                                    </p>
                                    <ul className="mt-4 text-black">
                                        <li className="mt-3">Graphic Design</li>
                                        <li className="mt-3">Web Design</li>
                                        <li className="mt-3">UI/UX</li>
                                        <li className="mt-3">HTML/CSS</li>
                                        <li className="mt-3">SEO Marketing</li>
                                        <li className="mt-3">Business Analysis</li>
                                    </ul>
                                    <CardFooter>
                                        <Button className="card-button mx-auto mt-5">
                                            Start Now
                                        </Button>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <br />
        </section>
    );
};

export default Prices;
