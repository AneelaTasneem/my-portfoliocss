import Image from 'next/image';  // Import Image component from Next.js
import '../styles/contact.css'


export default function Contact() {
  return (
    <div className="contact-container">
      {/* Page Title */}
      <h1 className="contact-title">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="contact-box">
        <h2 className="contact-subtitle">Get In Touch</h2>

        <p className="contact-description">
          I would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to me through any of the methods below.
        </p>

        {/* Contact Details */}
        <div className="contact-details">
          {/* Phone */}
          <div className="contact-item">
            <Image
              src="/wu.png"
              alt="WhatsApp Icon"
              width={28}
              height={28}
              className="contact-icon"
            />
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <Image
              src="/em.png"
              alt="Email Icon"
              width={28}
              height={28}
              className="contact-icon"
            />
            <p>Email: contact@yourcompany.com</p>
          </div>

          {/* Address */}
          <div className="contact-item">
            <Image
              src="/gp.png"
              alt="Location Icon"
              width={28}
              height={28}
              className="contact-icon"
            />
            <p>Address: 1234 Elm St, City, Country</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <h3>Follow Me</h3>
          <a href="https://linkedin.com/in/aneela-tasneem-b770192b7" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/AneelaTasneem" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
