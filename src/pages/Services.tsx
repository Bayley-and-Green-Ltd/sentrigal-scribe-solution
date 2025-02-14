
import { motion } from "framer-motion";
import { Code, Video, Brain, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Rapid Prototyping & Instant Development",
      description: "See your ideas come to life within hours. We build working prototypes—complete with user interfaces and foundational logic—before you even say yes."
    },
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: "Real-Time Iterations & Collaboration",
      description: "Join live video calls where you guide the evolution of your project in real time. We roll out multiple iterations within hours, incorporating your feedback on the fly."
    },
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: "Custom AI Model Creation & Integration",
      description: "Harness the power of artificial intelligence. We create custom AI models and integrate advanced language models into your software, unlocking new possibilities for automation, analytics, and user engagement."
    },
    {
      icon: <Layers className="h-12 w-12 text-blue-600" />,
      title: "Adaptive & Scalable Software Solutions",
      description: "From MVPs to full-scale platforms, our adaptive approach allows your software to grow and evolve alongside your business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From rapid prototyping to custom AI integrations, our suite of services is designed 
            to bring your ideas to life at lightning speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
