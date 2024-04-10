"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const themeHandler = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };
    return (
        <Button
            className="border-none rounded-full bg-white hover:dark:bg-black"
            variant="outline"
            size="icon"
            onClick={themeHandler}
        >
            <MoonIcon
                // fill="black"
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black"
            />
            <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-yellow-500" />
        </Button>
    );
}
