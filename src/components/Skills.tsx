import { motion } from "framer-motion";
import { Code2, Palette, Video, Cpu, Smartphone, TrendingUp } from "lucide-react";

const skills = [
  {
    name: "Web Development",
    icon: Code2,
    color: "from-primary to-accent",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    color: "from-secondary to-primary",
  },
  {
    name: "Video Editing",
    icon: Video,
    color: "from-accent to-secondary",
  },
  {
    name: "C++ Programming",
    icon: Cpu,
    color: "from-primary to-secondary",
  },
  {
    name: "App Development",
    icon: Smartphone,
    color: "from-secondary to-accent",
  },
  {
    name: "Digital Marketing",
    icon: TrendingUp,
    color: "from-accent to-primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              className="group"
            >
              <div className="glass-card glass-shadow rounded-2xl p-6 flex flex-col items-center justify-center aspect-square hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-full h-full text-foreground" />
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-sm font-semibold text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-16 max-w-4xl mx-auto glass-card glass-shadow rounded-3xl p-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground text-lg"
          >
            Always learning, always growing. I'm constantly exploring new technologies 
            and staying updated with the latest trends in web development and digital marketing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
