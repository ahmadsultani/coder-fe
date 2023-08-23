import Navbar from "@organisms/Navbar";
import HeroSection from "@organisms/Hero";
import Projects from "@organisms/Projects";
import Footer from "@organisms/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Projects />
      <Footer />
    </main>
  );
}
