import Footer from "@organisms/Footer";
import Navbar from "@organisms/Navbar";
import Projects from "./_components/organisms/Projects";
import ProjectCard from "./_components/molecules/ProjectCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
