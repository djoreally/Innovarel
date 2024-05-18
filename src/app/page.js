import About from "@/components/Homepage/About";
import Blogs from "@/components/Homepage/Blogs";
import ContactUs from "@/components/Homepage/Contact";
import Footer from "@/components/Homepage/Footer";
import Hero from "@/components/Homepage/Hero";
import Projects from "@/components/Homepage/Projects";
import ProvidingService from "@/components/Homepage/ProvidingService";
import Services from "@/components/Homepage/Services";
import Sponsors from "@/components/Homepage/Sponsors";
import Summary from "@/components/Homepage/Summary";
import Testimonials from "@/components/Homepage/Testimonials";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Summary />
            <ProvidingService />
            <Projects />
            {/* <Prices /> */}
            <Testimonials />
            <Blogs />
            <ContactUs />
            <Sponsors />
            <Footer />
        </div>
    );
}
