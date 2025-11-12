import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_91%_60%_/_0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(262_83%_58%_/_0.15),transparent_50%)]" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image with 3D Glass Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-glow" />
              
              {/* Glass frame */}
              <div className="relative glass-card glass-shadow rounded-3xl p-3 transform-gpu hover:scale-105 transition-transform duration-300">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Rajveer Bairagi"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Rajveer Bairagi</span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground">
              <span className="hover:text-primary transition-colors">Web Developer</span>
              <span className="text-primary">•</span>
              <span className="hover:text-secondary transition-colors">Social Media Marketer</span>
              <span className="text-secondary">•</span>
              <span className="hover:text-primary transition-colors">Founder @ WAXA</span>
              <span className="text-primary">•</span>
              <span className="hover:text-secondary transition-colors">Admin @ GDP</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="glow-effect hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-secondary border-0"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="glass-card hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 rounded-full hover:bg-primary/10 transition-all duration-300 group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
