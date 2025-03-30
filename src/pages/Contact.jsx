import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Contact Me</h1>
      <p className="lead">Feel free to reach out! I'm happy to connect and discuss opportunities.</p>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <input type="text" name="name" placeholder="Name" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <textarea name="message" placeholder="Message" className="form-control" rows="4" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}