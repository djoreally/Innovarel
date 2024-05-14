/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/utils/routes";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SideNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

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
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon
                    className={`block lg:hidden h-6 ${isSticky ? "text-primary" : "text-white"}`}
                />
            </SheetTrigger>
            <SheetContent className="dark:bg-primary">
                <div className="space-y-4 py-4 flex flex-col gap-5 w-full  overflow-y-scroll text-white">
                    <div className="px-3 py-2 flex-1">
                        <div className="space-y-1">
                            {routes.map((route) => (
                                <Link
                                    key={route.route}
                                    href={route.route}
                                    className={`text-base group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white  hover:bg-secondary dark:hover:bg-tertiary rounded-lg transition
                                ${
                                    pathname === route.route
                                        ? "text-white bg-secondary  dark:bg-tertiary"
                                        : "text-primary dark:text-white"
                                }`}
                                >
                                    <div className="flex items-center flex-1">{route.name}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SideNavbar;
