import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Homepage/Navbar";
import Services from "@/components/Homepage/Services";
import TopNavbar from "@/components/Homepage/TopNavbar";

export default function Home() {
    return (
        <div className="h-[2400px] dark:bg-primary">
            <TopNavbar />
            <Navbar />
            <Hero />

            <Services />
        </div>
    );
}
