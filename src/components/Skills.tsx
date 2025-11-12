import { motion } from "framer-motion";
import { Code2, Palette, Video, Cpu, Smartphone, TrendingUp } from "lucide-react";

const skills = [
  {
    name: "Web Development",
    icon: Code2,
    color: "from-primary to-accent",
    percentage: 95,
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    color: "from-secondary to-primary",
    percentage: 90,
  },
  {
    name: "Video Editing",
    icon: Video,
    color: "from-accent to-secondary",
    percentage: 85,
  },
  {
    name: "C++ Programming",
    icon: Cpu,
    color: "from-primary to-secondary",
    percentage: 80,
  },
  {
    name: "App Development",
    icon: Smartphone,
    color: "from-secondary to-accent",
    percentage: 88,
  },
  {
    name: "Digital Marketing",
    icon: TrendingUp,
    color: "from-accent to-primary",
    percentage: 92,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="glass-card glass-shadow rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center aspect-square hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
                
                {/* Circular progress ring */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="relative">
                    {/* Background circle */}
                    <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-muted/20"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className={`text-primary`}
                        initial={{ strokeDasharray: "0 1000" }}
                        whileInView={{
                          strokeDasharray: `${skill.percentage * 2.83} 1000`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        style={{
                          filter: "drop-shadow(0 0 8px currentColor)",
                        }}
                      />
                    </svg>
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-2.5 md:p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-full h-full text-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-sm md:text-base font-semibold font-display text-center group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Percentage */}
                  <motion.p
                    className="text-xs text-muted-foreground font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    {skill.percentage}%
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto glass-card glass-shadow rounded-3xl p-8 text-center hover:border-primary/30 transition-all duration-500"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Always learning, always growing. I'm constantly exploring new technologies 
            and staying updated with the latest trends in web development and digital marketing. 
            <span className="text-primary font-semibold"> Let's innovate together!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
