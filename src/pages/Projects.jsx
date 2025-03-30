import { motion } from "framer-motion";
import "./Projects.css"; // Ensure you have a CSS file for extra styling
import Footer from "./Footer";

export default function Projects() {
  const projects = [
    {
      name: "User Authentication System",
      description:
        "A secure authentication system with user registration, login, forgot password, and user details display.",
      link: "https://github.com/your-github/auth-system",
    },
    {
      name: "Upcoming Project",
      description: "More exciting projects coming soon!",
      link: "#",
    },
  ];

  return (
    <div className="container">
      <h1 className="display-4 text-center mb-4">🚀 My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <div className="card project-card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    🔗 View Project
                  </a>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    🚧 Coming Soon
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}