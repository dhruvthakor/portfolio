import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { WorkHighlights } from "@/components/WorkHighlights";
import { Approach } from "@/components/Approach";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <WorkHighlights />
        <Approach />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
