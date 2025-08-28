import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "BBA with Information Technology Excellence Group (ITEG)",
    institution: "Sant Singaji Institute of Science & Management, Sandalpur, MP",
    year: "2023 - Present, 3rd Year",
    type: "current",
  },
  {
    degree: "Higher Secondary (12th Class)",
    institution: "Gyan Ganga Higher Secondary School, Harda",
    year: "2022",
    percentage: "75%",
    type: "completed",
  },
  {
    degree: "Secondary (10th Class)",
    institution: "Gyan Ganga Higher Secondary School, Harda",
    year: "2020",
    percentage: "65%",
    type: "completed",
  },
];

const certifications = [
  {
    title: "Java Programming Certification",
    institution: "Sant Singaji Institute of Science & Management",
    year: "2024",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center"
            >
              <GraduationCap className="w-6 h-6 mr-2 text-primary" />
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border" />

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-12 pb-8"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 top-2 w-4 h-4 rounded-full border-2 ${
                    edu.type === 'current' 
                      ? 'bg-primary border-primary' 
                      : 'bg-background border-primary'
                  }`} />

                  <div className="card-gradient rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300">
                    <h4 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{edu.year}</span>
                      {edu.percentage && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {edu.percentage}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-2 text-accent" />
              Certifications
            </motion.h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-gradient rounded-xl p-6 shadow-medium hover:shadow-large transition-all duration-300 mb-6"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground mb-2">{cert.institution}</p>
                    <span className="text-accent font-medium">{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Hobbies Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card-gradient rounded-xl p-6 shadow-medium mt-8"
            >
              <h4 className="text-xl font-bold text-foreground mb-4">Hobbies & Interests</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Chess (Strategic thinking, problem-solving)
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Exploring new technologies (Continuous learning mindset)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};