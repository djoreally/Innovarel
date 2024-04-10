import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Homepage/Navbar";
import TopNavbar from "@/components/Homepage/TopNavbar";

export default function Home() {
    return (
        <div className="h-[2400px] dark:bg-primary">
            <div className="bg-primary relative">
                <TopNavbar />
                <Navbar />
                <Hero />
                <div className=" bottom-0 left-0 w-full h-[100px] lg:h-[350px] overflow-hidden">
                    <svg
                        viewBox="0 0 1440 300"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                                <stop offset="5%" stopColor="#010280" />
                                <stop offset="95%" stopColor="#1973d1" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0,300 L 0,112 C 151.46428571428572,64.82142857142856 302.92857142857144,17.64285714285714 406,23 C 509.07142857142856,28.357142857142857 563.75,86.25 682,141 C 800.25,195.75 982.0714285714284,247.35714285714283 1119,242 C 1255.9285714285716,236.64285714285717 1347.9642857142858,174.32142857142856 1440,112 L 1440,300 L 0,300 Z"
                            stroke="none"
                            strokeWidth="0"
                            fill="#fff"
                            fillOpacity="1"
                            className="transition-all duration-300 ease-in-out delay-150 path-0"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
