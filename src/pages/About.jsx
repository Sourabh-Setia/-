import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <>
    <Header></Header>
      <div className="container text-center">
        <p></p>

        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4">
            <img
              src="src/assets/88CEC0F6-6FB1-4BD6-9EAB-43A163CDAA1F_1_105_c.jpeg"
              alt="Sourabh Setia"
              className="img-fluid -circle"
              style={{ width: "10000px", height: "800px", objectFit: "cover" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-8 text-start">
            <p className="lead">
              I am a Node.js and Express.js developer with 1 year of hands-on experience. 
              I have worked with JWT authentication, integrated third-party APIs, and built scalable backend applications. 
              Additionally, I have experience working with MongoDB for efficient database management.
            </p>

            {/* Education Section */}
            <h4 className="mt-4">Education</h4>
            <ol type="I">
              <li>
                <strong>Bachelor of Computer Applications (BCA)</strong> <br />
                DAV College, Abohar (2022)
              </li>
              <li>
                <strong>Masters of Computer Applications (MCA)</strong> <br />
                Chandigarh University (Expected 2026)
              </li>
            </ol>

            {/* Work Experience Section */}
            <h4 className="mt-4">Work Experience</h4>
            <ul className="list-group text-start">
              <li className="list-group-item">
                <strong>Node.js Developer <br />
                SoftwareHub Solutions (April 2024 - Present) </strong> <br />
                - Developed RESTful APIs using Node.js and Express.js.  <br />
                - Implemented JWT authentication for user security.  <br />
                - Integrated third-party APIs and optimized database performance.  <br />
                - Worked with MongoDB for handling large datasets efficiently.  
              </li>
          
            </ul>

            {/* Skills & Expertise */}
            <h4 className="mt-4">Skills & Expertise</h4>
            <ul className="list-group text-start">
              <li className="list-group-item">✔ JavaScript (ES6+)</li>
              <li className="list-group-item">✔ Node.js & Express.js</li>
              <li className="list-group-item">✔ MongoDB & Mongoose</li>
              <li className="list-group-item">✔ RESTful API Development</li>
              <li className="list-group-item">✔ JWT Authentication</li>
              <li className="list-group-item">✔ Third-Party API Integrations</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}