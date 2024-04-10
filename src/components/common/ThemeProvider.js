"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const defaultTheme = window.localStorage.getItem("theme");
        setTheme(defaultTheme ?? "dark");
    }, []);

    return (
        <NextThemesProvider {...props} defaultTheme={theme}>
            {children}
        </NextThemesProvider>
    );
}
