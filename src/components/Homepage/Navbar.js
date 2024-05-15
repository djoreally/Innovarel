"use client";
import whiteLogo from "../../assets/images/logo-light.webp";
import darkLogo from "../../assets/images/logo-dark.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { routes } from "@/utils/routes";
import Link from "next/link";
import SideNavbar from "./SideNavbar";

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
            className={`relative z-50 ${
                isSticky ? "bg-white shadow-lg" : "bg-primary"
            } transition-colors duration-300  sticky top-0 py-3`}
        >
            <nav className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center transition-transform">
                    <div className="flex justify-between w-full lg:w-auto">
                        <div>
                            <Image
                                src={isSticky ? whiteLogo : darkLogo}
                                alt="site logo"
                                className="w-20 h-20"
                            />
                        </div>
                        <div className="flex lg:hidden justify-end items-center gap-5">
                            <ThemeSwitcher />
                            <SideNavbar />
                        </div>
                    </div>
                    <div className=" lg:flex flex-wrap gap-4 hidden items-center">
                        {routes.map((route) => {
                            return (
                                <Link
                                    key={route.name}
                                    className={`text-${
                                        isSticky ? "black" : "white"
                                    } text-base font-bold p-1`}
                                    href={route.route}
                                >
                                    {route.name}
                                </Link>
                            );
                        })}
                        <a href="mailto:contactus@innovarel.co" target="_blank">
                            <Button
                                className={
                                    "bg-secondary dark:bg-tertiary border-secondary dark:border-tertiary hover:text-secondary dark:hover:text-tertiary"
                                }
                            >
                                Contact us
                            </Button>
                        </a>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
