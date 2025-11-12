import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Palette, Megaphone } from "lucide-react";

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

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Explore some of my recent work and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Card className="glass-card glass-shadow h-full p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-full h-full text-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
                        className="text-xs px-3 py-1 rounded-full glass-card border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <Button
                    variant="outline"
                    className="w-full glass-card border-border/50 hover:border-primary/50 group-hover:bg-primary/10 transition-all"
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
