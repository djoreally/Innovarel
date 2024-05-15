import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import TopNavbar from "@/components/Homepage/TopNavbar";
import Navbar from "@/components/Homepage/Navbar";
import StoreProvider from "@/redux-toolkit/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Innovarel - Transforming Digital Success Through Expert Web & Software Solutions",
    description:
        "Explore Innovarel's comprehensive digital services, including custom web and software development, designed to elevate your online presence and drive tangible results.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider enableSystem={false} attribute="class">
                    <TopNavbar />
                    <Navbar />
                    <StoreProvider>
                        <div className="dark:bg-primary">{children}</div>
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
