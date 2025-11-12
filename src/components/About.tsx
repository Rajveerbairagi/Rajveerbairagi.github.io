import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card glass-shadow rounded-3xl p-8 md:p-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                Hi! I'm <span className="text-primary font-semibold">Rajveer Bairagi</span>, 
                a passionate <span className="text-secondary font-semibold">Web Developer</span> and 
                <span className="text-secondary font-semibold"> Social Media Marketing Expert</span> with 
                a drive to create impactful digital experiences.
              </p>
              
              <p>
                As the <span className="text-primary font-semibold">Founder of WAXA</span>, I lead innovative 
                marketing campaigns that blend creativity with strategy. I'm also proud to serve as an 
                <span className="text-primary font-semibold"> Admin at Growth Driven Pioneers (GDP)</span>, 
                where I help shape the future of digital entrepreneurship.
              </p>
              
              <p>
                My expertise spans across <span className="text-foreground font-semibold">full-stack web development</span>, 
                <span className="text-foreground font-semibold"> video editing</span>, 
                <span className="text-foreground font-semibold"> C++ programming</span>, and 
                <span className="text-foreground font-semibold"> UI/UX design</span>. I'm constantly 
                exploring new technologies and pushing the boundaries of what's possible in the digital space.
              </p>
              
              <p>
                Let's collaborate and build something extraordinary together!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary border-0 glow-effect hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
