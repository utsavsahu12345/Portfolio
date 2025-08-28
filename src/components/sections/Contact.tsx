import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93435 33040",
    href: "tel:+919343533040",
    color: "text-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "utsavsahu12345@gmail.com",
    href: "mailto:utsavsahu12345@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "www.linkedin.com/in/utsavsahu",
    href: "https://www.linkedin.com/in/utsavsahu",
    color: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/utsavsahu12345",
    href: "https://github.com/utsavsahu12345",
    color: "text-gray-600",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Let's Connect</h3>
            
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center p-6 card-gradient rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 ${contact.color} bg-current/10 rounded-full flex items-center justify-center mr-4`}>
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {contact.label}
                  </h4>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-gradient rounded-2xl p-8 shadow-large text-center"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start a Project?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
            
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium"
                onClick={() => window.open("mailto:utsavsahu12345@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://www.linkedin.com/in/utsavsahu", "_blank")}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};