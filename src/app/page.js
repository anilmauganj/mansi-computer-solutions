import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

export default function Home() {
  return (
    <>
       <Header />
       <Hero />
       <About />
       <Services />
       <Products />
       <WhyChooseUs />
       <ContactSection />
       <Footer />
       <FloatingWidget />

    </>
  );
}
