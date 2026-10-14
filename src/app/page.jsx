import RippleGrid from "@/components/module/ripplegrid";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";
import Parcours from "./parcours";
import Method from "./method";
import TechStack from "./tech-stack";
import Footer from "./footer";
import { Project } from "./project";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="bg-ambient" aria-hidden="true">
        <span />
      </div>

      <Navbar />
      <Hero />
      <Parcours />
      <TechStack />
      <Project />
      <Services />
      <Method />
      <Footer />
    </div>
  );
}
