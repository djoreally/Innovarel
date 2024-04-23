import Image from "next/image";
import React from "react";
import testimonial1 from "../../assets/images/1.jpg";
import testimonial2 from "../../assets/images/2.jpg";
import testimonial3 from "../../assets/images/3.jpg";
import quote from "../../assets/images/close.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Testimonials = () => {
    return (
        <section className="bg-cover bg-center mt-20" style={{ backgroundImage: "" }}>
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto my-5">
                    <h1 className="text-white">Testimonials</h1>
                </div>
                <h3 className="text-center text-2xl md:text-4xl font-bold text-black dark:text-white">
                    See What Our Clients Say’s
                </h3>
                <Carousel className="w-full mt-10">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card className="w-full card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white p-5 text-black">
                                    <CardContent class="mt-2">
                                        <p class="mt-2 text-gray-600 dark:text-black">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Tempora expedita dicta totam aspernatur
                                            doloremque. Excepturi iste iusto eos enim reprehenderit
                                            nisi, accusamus delectus nihil quis facere in modi
                                            ratione libero!
                                        </p>
                                    </CardContent>

                                    <CardFooter class="flex items-center justify-start mt-4">
                                        <div>
                                            <img
                                                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                                                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div>
                                            <h6
                                                class="font-bold text-gray-700 cursor-pointer dark:text-black"
                                                tabindex="0"
                                                role="link"
                                            >
                                                Khatab wedaa
                                            </h6>
                                            <p className="text-black">CEO,xyz company</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <br />
        </section>
    );
};

export default Testimonials;
