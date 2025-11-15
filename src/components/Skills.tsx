import { motion } from "framer-motion";
import { Code2, Palette, Video, Cpu, Smartphone, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    category: "Development",
    skills: [
      { name: "Web Development", icon: Code2, color: "from-primary to-accent", percentage: 95 },
      { name: "App Development", icon: Smartphone, color: "from-secondary to-accent", percentage: 88 },
      { name: "C++ Programming", icon: Cpu, color: "from-primary to-secondary", percentage: 80 },
    ]
  },
  {
    category: "Design",
    skills: [
      { name: "UI/UX Design", icon: Palette, color: "from-secondary to-primary", percentage: 90 },
      { name: "Video Editing", icon: Video, color: "from-accent to-secondary", percentage: 85 },
    ]
  },
  {
    category: "Marketing",
    skills: [
      { name: "Digital Marketing", icon: TrendingUp, color: "from-accent to-primary", percentage: 92 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-background to-muted/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary/10 blur-3xl"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 text-base md:text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold font-display mb-6 text-center md:text-left">
                <span className="gradient-text">{category.category}</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 } 
                    }}
                    className="group"
                  >
                    <div className="glass-card glass-shadow rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden h-full">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <div className="relative z-10 flex items-center gap-4">
                        {/* Icon with glow */}
                        <div className={`p-3 rounded-xl glass-card bg-gradient-to-br ${skill.color} group-hover:shadow-lg group-hover:shadow-current/30 transition-all duration-300 flex-shrink-0`}>
                          <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        
                        {/* Skill info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-base md:text-lg mb-1">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            {/* Progress bar */}
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              />
                            </div>
                            {/* Percentage */}
                            <span className="text-sm font-semibold text-muted-foreground min-w-[3ch]">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Always learning, always growing. Let's create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
