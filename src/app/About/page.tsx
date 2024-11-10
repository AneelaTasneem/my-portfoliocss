import '../styles/about.css'

export default function About() {
  return (
    <div className="about-container">
      {/* About Me Heading */}
      <h1 className="about-heading">About Me</h1>

      {/* Introduction Text */}
      <p className="introduction-text">
        Hello! I am <span className="highlight-text">ANEELA TASNEEM</span>,<br />
        It is my first project using Next.js and Tailwind CSS. I am excited to share a little about myself.
      </p>

      {/* Qualification Section */}
      <div className="qualification-card">
        <h2 className="highlight-text">My Qualification</h2>
        <ul className="qualification-list">
          <li>Bachelors Degree in Micro Biology</li>
          <li>Certificate in CIT</li>
          <li>Currently learning web development with Next.js and Tailwind CSS</li>
        </ul>
      </div>
    </div>
  )}
