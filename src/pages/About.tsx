
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Our Story Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Sentigral</h1>
            <p className="text-xl text-gray-700 mb-12">
              At Sentigral, we believe in empowering businesses through innovative software solutions. 
              Our rapid, AI-driven approach ensures instant progress, transparent collaboration, and 
              full control of your project from day one. We work with ideas both big and small—evolving 
              them into robust, scalable software that grows with your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700">
              Our mission is simple: to transform your vision into reality faster than you ever 
              thought possible—without sacrificing quality, scalability, or adaptability. We're 
              not just building software; we're building your future.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
