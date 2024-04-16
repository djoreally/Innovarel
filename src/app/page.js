import About from "@/components/Homepage/About";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Homepage/Navbar";
import Services from "@/components/Homepage/Services";
import Summary from "@/components/Homepage/Summary";
import TopNavbar from "@/components/Homepage/TopNavbar";

export default function Home() {
    return (
        <div className=" dark:bg-primary">
            <TopNavbar />
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Summary />
        </div>
    );
}
