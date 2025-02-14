
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Sentigral
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-blue-600 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

