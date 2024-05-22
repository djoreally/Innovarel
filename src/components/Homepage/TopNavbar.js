"use client";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneCallIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopNavbar = () => {
    return (
        <div className="bg-primary">
            <section className="w-11/12 lg:w-8/12 mx-auto">
                <div className="relative flex flex-col md:flex-row justify-center md:justify-between py-4">
                    <div className="flex items-center gap-5 justify-center">
                        <div className="flex flex-row gap-2">
                            <MailIcon className="text-white" />
                            <p className="text-white text-sm sm:text-base">innovare@innovarel.co</p>
                        </div>
                        {/* <div className="flex flex-row gap-2">
                            <PhoneCallIcon className="text-white" />
                            <p className="text-white text-sm sm:text-base">+91 987-654-321</p>
                        </div> */}
                    </div>
                    <div className="flex mt-4 sm:mt-0 gap-3 justify-center">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white hover:bg-secondary text-secondary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-tertiary dark:border dark:border-white"
                        >
                            <FacebookIcon />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white hover:bg-secondary text-secondary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-tertiary dark:border dark:border-white"
                        >
                            <InstagramIcon />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-white hover:bg-secondary text-secondary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-tertiary dark:border dark:border-white"
                        >
                            <TwitterIcon />
                        </Button>
                    </div>
                </div>

                <hr className="relative hidden md:block lg:block"></hr>
            </section>
        </div>
    );
};

export default TopNavbar;
