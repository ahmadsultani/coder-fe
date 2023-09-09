import Navbar from "@organisms/Navbar";
import HeroSection from "@organisms/Hero";
import Projects from "@organisms/Projects";
import Footer from "@organisms/Footer";
import ContactUs from "./_components/organisms/ContactUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Projects />
      <ContactUs />
    </main>
  );
}
