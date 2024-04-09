"use client";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneCallIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopNavbar = () => {
    return (
        <section className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
            <div class="relative hidden md:flex flex-col sm:flex-row justify-between py-4">
                <div class="flex items-center gap-5">
                    <div className="flex flex-row gap-2">
                        <MailIcon className="text-white" />
                        <p class="text-white text-sm sm:text-base">info@example.com</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <PhoneCallIcon className="text-white" />
                        <p class="text-white text-sm sm:text-base">+91 987-654-321</p>
                    </div>
                </div>
                <div class="flex mt-4 sm:mt-0 gap-3">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white"
                    >
                        <FacebookIcon />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white"
                    >
                        <InstagramIcon />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white"
                    >
                        <TwitterIcon />
                    </Button>
                </div>
            </div>

            <hr class="relative hidden md:block lg:block"></hr>
        </section>
    );
};

export default TopNavbar;
