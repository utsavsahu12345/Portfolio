import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Day Care Website",
    description:
      "A responsive website for a day care center, featuring program details, admission info, and contact forms.",
    techStack: "HTML, CSS, JavaScript",
    details: "Developed using HTML for structure, CSS for styling, and JavaScript for interactive elements. Includes multiple pages such as Home, About, Program, Admission, and Contact. Optimized for desktop and mobile devices.",
    code: "https://github.com/utsavsahu12345/Responsive-Website",
    live: "https://utsavsahu12345.github.io/Responsive-Website/",
  },
  {
    title: "Fashion API Store",
    description:
      "A modern e-commerce website for fashion collections with cart functionality and API-driven data.",
    techStack: "React.js, Vite, Tailwind CSS",
    details:
      "Built with React.js for the frontend, styled using Tailwind CSS, and powered by Vite for fast development. The site fetches product data from APIs and features dynamic collections for men, women, and youth, along with a shopping cart.",
    code: "https://github.com/utsavsahu12345/Fashion-Api-Store",
    live: "https://utsavsahu12345.github.io/Fashion-Api-Store/",
  },
  {
    title: "MERN User Management System",
    description:
      "A full-stack web application for managing users with CRUD operations, built using the MERN stack.",
    techStack: "MongoDB, Express.js, React.js, Node.js, Vite",
    details:
      "This project features a React.js frontend (powered by Vite) and a Node.js/Express backend with MongoDB for data storage. Users can be created, read, updated, and deleted. The app demonstrates RESTful API integration, modern UI components, and efficient state management.",
    code: "https://github.com/utsavsahu12345/MERN-CRUD-App",
  },
  {
    title: "Movie Rent System",
    description: "console-based application for managing movie rentals, allowing customers to rent movies and shopkeepers to manage inventory and customer information.",
    techStack: "Java",
    details: "A Java console application for managing movie rentals. It allows customers to rent movies and shopkeepers to manage inventory and customer records using simple text-based menus. The project demonstrates basic object-oriented programming concepts.",
    code: "https://github.com/utsavsahu12345/Movie-Rent-System",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
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
                  asChild
                  size="sm"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
