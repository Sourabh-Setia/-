import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router

import "./Header.css"; // Import CSS for styling

export default function Header() {
  return (
    <motion.header
      className="header py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container text-center">
        <h1 className="mb-1">Sourabh Setia</h1>
        <p className="lead">Passionate Node.js & Express.js Developer</p>
      </div>
       </motion.header>
  );
}