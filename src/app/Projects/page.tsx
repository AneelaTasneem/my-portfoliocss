import Image from 'next/image';  // Import Image from next/image
import '../styles/projects.css'

export default function Projects() {
  return (
    <div className="projects-container">
      {/* Project 1 */}
      <div className="project-card">
        <Image
          src="/countdown timer.jpg"  // Use the correct path to your images
          alt="Countdown Timer"
          className="project-image"
          width={500}  // Specify the width of the image
          height={300} // Specify the height of the image
        />
        <h3 className="project-title">Project 1: Countdown Timer</h3>
        <p className="description-heading">Description Of Project</p>
        <p className="project-description">
          A Next.js, Tailwind CSS project to calculate fixed time.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <Image
          src="/Weather wedget.jpg"  // Use the correct path to your images
          alt="Weather Widget"
          className="project-image"
          width={500}  // Specify the width of the image
          height={300} // Specify the height of the image
        />
        <h3 className="project-title">Project 2: Weather Widget</h3>
        <p className="description-heading">Description Of Project</p>
        <p className="project-description">
          A Next.js, Tailwind CSS project to search for weather updates.
        </p>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <Image
          src="/admission form.jpg"  // Use the correct path to your images
          alt="Application Form"
          className="project-image"
          width={500}  // Specify the width of the image
          height={300} // Specify the height of the image
        />
        <h3 className="project-title">Project 3: Application Form</h3>
        <p className="description-heading">Description Of Project</p>
        <p className="project-description">
          An HTML, CSS-based form project to help keep student data.
        </p>
      </div>
    </div>
  );
}
