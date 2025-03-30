export default function Footer() {
    return (
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          © {new Date().getFullYear()} Sourabh Setia | All Rights Reserved
        </p>
  
        <p className="mb-0">
          Connect with me on:
          <a href="" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            LinkedIn
          </a>
        </p>
  
        <p className="mb-0">
          📧 Email:  
          <a href="mailto:jobsforsourabhh@gmail.com" className="text-white mx-2">
            jobsforsourabhh@gmail.com
          </a>
        </p>
  
        <p className="mb-0">
          📞 Phone:  
          <a href="tel:+918847668497" className="text-white mx-2">
            +91 88476-68497
          </a>
        </p>
      </footer>
    );
  }