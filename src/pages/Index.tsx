import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  return (
    <main className="relative">
      <CursorEffect />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2025 Rajveer Bairagi. Crafted with passion and innovation.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
