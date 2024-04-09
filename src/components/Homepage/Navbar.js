"use client";
import { MenuIcon } from "lucide-react";
import whiteLogo from "../../assets/images/logo-white.png";
import blackLogo from "../../assets/images/logo-black.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.pageYOffset >= 48);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className={`relative ${
                isSticky ? "bg-white" : "bg-transparent"
            } transition-colors duration-300  sticky top-0 py-3`}
        >
            <nav className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center transition-transform">
                    <div className="flex justify-between w-full lg:w-auto">
                        <div>
                            <Image src={isSticky ? blackLogo : whiteLogo} alt="site logo" />
                        </div>
                        <div>
                            <MenuIcon className="block mt-5 ml-32 lg:hidden h-6" />
                        </div>
                    </div>
                    <div className=" lg:flex flex-wrap gap-4 hidden items-center">
                        <a
                            className={`text-${
                                isSticky ? "black" : "white"
                            } text-base font-bold p-1`}
                            href="Home"
                        >
                            Home
                        </a>
                        <a
                            className={`text-${
                                isSticky ? "black" : "white"
                            } text-base font-bold p-1`}
                            href="Pages"
                        >
                            Pages
                        </a>
                        <a
                            className={`text-${
                                isSticky ? "black" : "white"
                            } text-base font-bold p-1`}
                            href="Services"
                        >
                            Services
                        </a>
                        <a
                            className={`text-${
                                isSticky ? "black" : "white"
                            } text-base font-bold p-1`}
                            href="Blog"
                        >
                            Blog
                        </a>
                        <a
                            className={`text-${
                                isSticky ? "black" : "white"
                            } text-base font-bold p-1`}
                            href="Contact Us"
                        >
                            Contact Us
                        </a>
                        <Button className={isSticky ? "bg-primary text-white" : null}>
                            Get A Quote
                        </Button>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
