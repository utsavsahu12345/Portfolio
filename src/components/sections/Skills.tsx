import { motion } from "framer-motion";
import { Code, Database, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Backend",
    icon: Code,
    skills: ["Node.js", "Express.js", "Java"],
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    color: "bg-orange-500/10 text-orange-500",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-gradient rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};