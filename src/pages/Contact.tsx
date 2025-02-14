
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to turn your vision into reality? Contact us today for a free consultation and 
            discover how our rapid, AI-driven approach can work for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">contact@sentigral.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-700 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
