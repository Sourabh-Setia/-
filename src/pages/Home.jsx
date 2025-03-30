import { motion } from "framer-motion";
import "./Home.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      {/* Hero Section */}
      <motion.div
        className="hero-section p-5 rounded shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="src/assets/88CEC0F6-6FB1-4BD6-9EAB-43A163CDAA1F_1_105_c.jpeg"
          alt="Sourabh Setia"
          className="rounded-circle profile-img mb-3"
        />
        <h1 className="display-4 fw-bold">Hey, I'm Sourabh Setia</h1>
        <p className="lead text-muted">
          A passionate <span className="text-primary">Node.js & Express.js Developer</span> building scalable backend applications.
        </p>
        <motion.a
          href="/about"
          className="btn btn-primary btn-lg mt-3"
          whileHover={{ scale: 1.1 }}
        >
          Learn More About Me
        </motion.a>
      </motion.div>

      {/* About Me Section */}
      <div className="about-me mt-5">
        <h2 className="mb-4 fw-bold">About Me</h2>
        <p className="text-muted">
          I specialize in Node.js, Express.js, and MongoDB, creating secure and scalable applications. 
          With hands-on experience in JWT authentication, API integrations, and database management, 
          I bring efficiency and reliability to backend development.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mt-5">
        <h2 className="mb-4 fw-bold">Technologies I Work With</h2>
        <div className="row justify-content-center">
          {[
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React.js",
            "Bootstrap",
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="col-md-2 col-sm-4 col-6 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="tech-card shadow-sm p-3 rounded">{tech}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* My Work Section */}
      <div className="my-work mt-5">
        <h2 className="mb-4 fw-bold">My Work</h2>
        <p className="text-muted">
          I have worked on **RESTful APIs, authentication systems, and scalable server-side applications**.  
        </p>
        <ul className="list-group text-start mx-auto" style={{ maxWidth: "600px" }}>
          <li className="list-group-item">✔ Backend – Built using Node.js, Express, and MongoDB</li>
          <li className="list-group-item">✔ Authentication System – Secure login with JWT authentication</li>
          <li className="list-group-item">✔ API Integrations – Connected third-party services with RESTful APIs</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact mt-5">
        <h2 className="mb-4 fw-bold">Let's Connect</h2>
        <p className="text-muted">
          Feel free to reach out for opportunities or discussions about tech!
        </p>
        <p><strong>Email:</strong> <a href="mailto:jobsforsourabhh@gmail.com">jobsforsourabhh@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 88476 68497</p>
      </div>
    </div>
  );
}