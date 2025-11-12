import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Palette, Megaphone } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Growth Driven Pioneers (GDP)",
    description: "A thriving community platform empowering digital entrepreneurs with resources, networking opportunities, and growth strategies.",
    icon: TrendingUp,
    color: "from-primary to-accent",
    tags: ["Community", "Leadership", "Growth"],
  },
  {
    title: "InkSpace",
    description: "An innovative creative platform designed for artists and designers to showcase their work and collaborate with clients worldwide.",
    icon: Palette,
    color: "from-secondary to-accent",
    tags: ["Design", "Portfolio", "Creative"],
  },
  {
    title: "WAXA Marketing Campaigns",
    description: "Strategic digital marketing campaigns that have driven significant engagement and ROI for diverse clients across multiple industries.",
    icon: Megaphone,
    color: "from-accent to-secondary",
    tags: ["Marketing", "Strategy", "Analytics"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group h-full"
    >
      <Card className="glass-card glass-shadow h-full p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={isHovered ? { backgroundPosition: ["0% 0%", "100% 100%"] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
          {/* Icon */}
          <motion.div
            className="mb-4"
            whileHover={{ scale: 1.15, rotateZ: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-3.5 shadow-lg`}>
              <project.icon className="w-full h-full text-foreground" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-3 py-1 rounded-full glass-card border border-border/30 hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <Button
            variant="outline"
            className="w-full glass-card border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all group/btn"
          >
            <span>View Project</span>
            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Explore some of my recent work and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
