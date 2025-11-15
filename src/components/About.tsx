import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Code2, Rocket, TrendingUp, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="glass-card glass-shadow rounded-3xl p-6 md:p-10 space-y-6 hover:border-primary/30 transition-all duration-500"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main intro */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl glass-card flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                  <span className="text-foreground font-bold">Web Developer</span> and{" "}
                  <span className="text-foreground font-bold">Creative Marketer</span> passionate about crafting digital experiences that drive results.
                </p>
              </div>

              {/* Roles */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl glass-card flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                  <span className="text-primary font-semibold">Founder @ WAXA</span> — leading innovative marketing campaigns.
                  <br />
                  <span className="text-secondary font-semibold">Admin @ GDP</span> — shaping digital entrepreneurship.
                </p>
              </div>

              {/* Skills */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl glass-card flex-shrink-0">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                  Expertise: <span className="text-foreground font-semibold">React, Tailwind, UI/UX Design, Video Editing, C++, App Development</span>
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl glass-card flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-lg md:text-xl font-semibold flex-1">
                  Let's collaborate and build something extraordinary! ✨
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 group w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
