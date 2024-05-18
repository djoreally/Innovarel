import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
    return (
        <div className="py-20 mx-auto w-11/12 md:w-4xl " id="contact">
            <div className="text-center mb-10">
                <h1 className="text-base font-semibold leading-7 text-primary">Contact Us</h1>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                    Share a message to us.
                </p>
            </div>
            <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
                <form action="" className="space-y-5">
                    <Input type="text" placeholder="Enter Your Name" />
                    <Input type="email" placeholder="Enter Your Email" />
                    <Textarea placeholder="Enter your message" />
                    <Button className="w-full h-8 bg-secondary dark:bg-tertiary border-secondary dark:border-tertiary hover:text-secondary dark:hover:text-tertiary">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
