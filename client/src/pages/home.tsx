import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import PromotionBanner from "@/components/PromotionBanner";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <PromotionBanner />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
