import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Users,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Smooth Scroll Helper
const scrollToSection = (id, closeMenu) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  if (closeMenu) closeMenu(false);
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="fixed top-0 left-0 w-full bg-white shadow z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            onClick={() => scrollToSection("hero", setMenuOpen)}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            TaskFlow
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            {[
              { name: "Features", id: "features" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Pricing", id: "pricing" },
            ].map(({ name, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-blue-600 transition"
              >
                {name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4"
            >
              {[
                { name: "Features", id: "features" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Pricing", id: "pricing" },
              ].map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id, setMenuOpen)}
                  className="text-gray-700 text-left text-lg hover:text-blue-600 transition"
                >
                  {name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Header Section */}
      <motion.header
        id="hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white min-h-screen"
      >
        <h1 className="text-5xl font-bold mt-10">TaskFlow</h1>
        <p className="mt-4 text-lg max-w-lg">
          Organize your life, boost productivity, and collaborate effortlessly.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("pricing")}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-blue-50 transition"
        >
          Get Started
        </motion.button>
      </motion.header>

      {/* Features Section */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center"
      >
        {[
          {
            Icon: CheckCircle,
            title: "Organize Easily",
            desc: "Sort and prioritize tasks with just a few clicks for maximum productivity.",
            color: "text-blue-500",
          },
          {
            Icon: Zap,
            title: "Boost Your Focus",
            desc: "Stay on track with reminders and distraction-free modes.",
            color: "text-yellow-500",
          },
          {
            Icon: Users,
            title: "Team Collaboration",
            desc: "Share tasks and work seamlessly with your whole team.",
            color: "text-green-500",
          },
        ].map(({ Icon, title, desc, color }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-white"
          >
            <div className="flex justify-center mb-4">
              <Icon size={40} className={color} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              text: "TaskFlow completely changed the way I manage my projects. I feel in control every day!",
              name: "Sarah W.",
              role: "Freelancer",
            },
            {
              text: "Our team productivity doubled. The collaboration tools are just perfect!",
              name: "David L.",
              role: "Startup Founder",
            },
            {
              text: "Finally, an app that’s simple, fast, and keeps me on track with my goals!",
              name: "Emily R.",
              role: "Marketing Manager",
            },
          ].map(({ text, name, role }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-gray-50"
            >
              <Star className="text-yellow-400 mx-auto mb-3" size={36} />
              <p className="italic text-gray-600 mb-4">"{text}"</p>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-gray-500 text-sm">{role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        id="pricing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 bg-gray-50 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Choose Your Plan</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Free", price: "$0", desc: "Perfect for personal use.", btn: "Get Started", highlight: false },
            { name: "Pro", price: "$12/mo", desc: "For power users and small teams.", btn: "Upgrade", highlight: true },
            { name: "Team", price: "$30/mo", desc: "For larger groups and companies.", btn: "Get Started", highlight: false },
          ].map(({ name, price, desc, btn, highlight }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl shadow-lg transition flex flex-col ${
                highlight ? "bg-blue-50 border-2 border-blue-500" : "bg-white hover:shadow-xl"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{name}</h3>
              <p className="text-gray-600 mb-6">{desc}</p>
              <p className="text-4xl font-bold mb-6">{price}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-auto px-6 py-3 rounded-full font-semibold text-white ${
                  highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {btn}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gray-900 text-gray-300 py-10 mt-10"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-white transition"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
