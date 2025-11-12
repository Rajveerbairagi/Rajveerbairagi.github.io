import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have a project in mind? Let's build something impactful together!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card glass-shadow rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="glass-card border-border/50 focus:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="glass-card border-border/50 focus:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="glass-card border-border/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary border-0 glow-effect hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card glass-shadow rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "rajveer@example.com",
                    href: "mailto:rajveer@example.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 XXXXX XXXXX",
                    href: "tel:+91XXXXXXXXXX",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "India",
                    href: "#",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 glass-card rounded-2xl hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-full h-full text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card glass-shadow rounded-3xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <p className="text-center text-sm text-muted-foreground">
                Available for freelance opportunities and exciting collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
