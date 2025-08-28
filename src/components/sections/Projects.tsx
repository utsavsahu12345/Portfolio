import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Shopping Website",
    description: "Developed an e-commerce website with product listing and shopping cart functionality.",
    techStack: "MERN Stack",
    details: "Implemented React.js for frontend and MongoDB + Express.js for backend database operations.",
  },
  {
    title: "CRUD Application",
    description: "Built a web application with Create, Read, Update, and Delete operations.",
    techStack: "MERN Stack",
    details: "Used React.js for user interface and Node.js, Express.js, MongoDB for backend.",
  },
  {
    title: "Contact Manager",
    description: "Created a web app to manage contacts with add, update, delete, and search functionality.",
    techStack: "MERN Stack",
    details: "Built using React.js, Node.js, Express.js, MongoDB and styled with Bootstrap for responsive UI.",
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and Bootstrap.",
    techStack: "HTML, CSS, JS, Bootstrap",
    details: "Showcases projects, skills, and personal information in a professional layout.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-gradient rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {project.techStack}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details}
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};