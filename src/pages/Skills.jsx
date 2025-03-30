import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import './Skills.css';  // ✅ Import CSS
import Footer from './Footer';

export default function Skills() {
  const coreSkills = [
    'JavaScript (ES6+)',
    'Node.js & Express.js',
    'MongoDB & Mongoose',
    'RESTful APIs',
    'JWT Authentication',
  ];

  const toolsAndTechnologies = [
    'React.js',
    'Bootstrap',
    'Git & GitHub',
    'Postman API Testing',
    'VS Code & Debugging',
  ];

  const learning = [
    'TypeScript',
    'Java',
    'Angular.js',

  ];

  return (
    <div className="container text-center mt-4">
      {/* Home Button */}
      <motion.div 
        className="mb-3"
        whileHover={{ scale: 1.1 }}
      >
        <Link to="/" className="btn btn-outline-primary">
          ⬅️ Home
        </Link>
      </motion.div>

      <h1 className="display-5">My Technical Skills</h1>
      <p className="text-muted">
        Over my journey as a Node.js Developer, I have gained experience with the following technologies:
      </p>

      {/* Core Skills */}
      <section className="mt-4">
        <h3>💻 Core Skills</h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              {coreSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="list-group-item bg-light text-dark shadow-sm mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="mt-4">
        <h3>⚙️ Tools & Technologies</h3>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              {toolsAndTechnologies.map((tool, index) => (
                <motion.li
                  key={index}
                  className="list-group-item bg-light text-dark shadow-sm mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="mt-4">
        <h3>🚀 Learning & Growth</h3>
        <p className="text-muted">I am continuously learning new technologies to enhance my skillset:</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              {learning.map((tech, index) => (
                <motion.li
                  key={index}
                  className="list-group-item bg-light text-dark shadow-sm mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}