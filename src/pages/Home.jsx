import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Potentials from "../components/Potentials";
import Marketplace from "../components/Marketplace";
import News from "../components/News";
import Gallery from "../components/Gallery";
import Government from "../components/Government";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Government />
      <Potentials />
      <Marketplace />
      <News />
      <Gallery />
      
    </>
  );
}