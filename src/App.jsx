import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
