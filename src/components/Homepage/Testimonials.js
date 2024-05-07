"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SingleTestimonialSkeleton from "../skeletons/SingleTestimonialSkeleton";
import { useGetTestimonialsQuery } from "@/redux-toolkit/testimonials/testimonialApi";
import Image from "next/image";

const Testimonials = () => {
    const { data: testimonials, isLoading, error } = useGetTestimonialsQuery();
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
                        {isLoading && <SingleTestimonialSkeleton />}
                        {error && <h1>{error.message}</h1>}
                        {!isLoading && testimonials.result.length === 0 && <h3>No Data Found</h3>}
                        {!isLoading &&
                            testimonials.result.length > 0 &&
                            testimonials.result.map((testimonial) => (
                                <CarouselItem key={testimonial._id}>
                                    <Card className="w-full card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white p-5 text-black">
                                        <CardContent className="mt-2">
                                            <p className="mt-2 text-gray-600 dark:text-black">
                                                {testimonial.text}
                                            </p>
                                        </CardContent>

                                        <CardFooter className="flex items-center justify-start mt-4">
                                            <div>
                                                <Image
                                                    className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
                                                    src={testimonial.image.url}
                                                    alt="avatar"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <h6
                                                    className="font-bold text-gray-700 cursor-pointer dark:text-black"
                                                    tabindex="0"
                                                    role="link"
                                                >
                                                    {testimonial.name}
                                                </h6>
                                                <p className="text-black">
                                                    {testimonial.designation}
                                                </p>
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
