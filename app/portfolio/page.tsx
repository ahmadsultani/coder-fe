import ExampleAtom from "@atoms/ExampleAtom";
import PortfolioNav from "@/_components/molecules/PortfolioTab";
import PortfolioBox from "@/_components/organisms/PortfolioBox";
import Navbar from "@/_components/organisms/Navbar";
import Footer from "@/_components/organisms/Footer";
import UpButton from "@/_components/atoms/UpButton";

export default function PortfolioPage() {
  return (
    <main>
      <UpButton />
      <PortfolioBox />
    </main>
  );
}
