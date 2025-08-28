import { motion } from "framer-motion";
import { Code, Heart, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-gradient rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Full Stack Developer (Java & MERN) with hands-on experience in building scalable web applications. 
                Strong problem-solving skills and passionate about learning new technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, 
                you'll find me exploring new technologies or playing chess.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="card-gradient rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Clean Code Advocate</h4>
              </div>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code that scales well and is easy to understand.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Problem Solver</h4>
              </div>
              <p className="text-muted-foreground">
                I enjoy tackling complex challenges and finding innovative solutions to real-world problems.
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Lifelong Learner</h4>
              </div>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and I'm committed to continuous learning and staying updated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};