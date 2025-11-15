import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cleaner deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,50%,8%)] via-[hsl(250,45%,10%)] to-[hsl(260,40%,12%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(220_100%_60%_/_0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(270_90%_65%_/_0.08),transparent_40%)]" />
      </div>

      {/* Reduced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "hsl(220 100% 60%)" : "hsl(270 90% 65%)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.6, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Enhanced glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl opacity-50 animate-glow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent via-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Glass frame with 3D effect */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative glass-card glass-shadow rounded-full p-2 hover:scale-105 transition-transform duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={profileImage}
                    alt="Rajveer Bairagi - Web Developer and Creative Marketer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Rim light effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/20 to-secondary/20 mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Orbiting elements */}
              {[0, 120, 240].map((rotation, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: i === 0 ? "hsl(220 100% 60%)" : i === 1 ? "hsl(270 90% 65%)" : "hsl(280 95% 70%)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                >
                  <div
                    style={{
                      transform: `rotate(${rotation}deg) translateX(180px)`,
                    }}
                    className="w-2 h-2 rounded-full shadow-lg shadow-current"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Available for projects</span>
            </motion.div>

            <div className="space-y-4 lg:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display leading-tight"
              >
                Hey, I'm <br />
                <span className="gradient-text">Rajveer 👋</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl"
              >
                A <span className="text-primary font-bold">Web Developer</span> &{" "}
                <span className="text-secondary font-bold">Creative Marketer</span>
                <br />
                passionate about digital innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-2 text-sm"
              >
                <span className="px-4 py-2 rounded-full glass-card hover:border-primary/50 transition-all duration-300 font-medium">
                  Founder @ WAXA
                </span>
                <span className="px-4 py-2 rounded-full glass-card hover:border-secondary/50 transition-all duration-300 font-medium">
                  Admin @ GDP
                </span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-right-bottom border-0 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500 group animate-pulse-glow font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 View My Work
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="glass-card hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 font-semibold"
              >
                👋 Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
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
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card p-3 rounded-full hover:border-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
