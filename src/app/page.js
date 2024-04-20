import About from "@/components/Homepage/About";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Homepage/Navbar";
import Prices from "@/components/Homepage/Prices";
import Projects from "@/components/Homepage/Projects";
import ProvidingService from "@/components/Homepage/ProvidingService";
import Services from "@/components/Homepage/Services";
import Summary from "@/components/Homepage/Summary";
import Testimonials from "@/components/Homepage/Testimonials";
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
            <ProvidingService />
            <Projects />
            <Prices />
            <Testimonials />
        </div>
    );
}
