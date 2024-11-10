import Image from 'next/image'; 
import '../app/styles/home.css'; // Import the custom CSS file

export default function Home() {
  return (
    <div className="container">
      {/* Image Section */}
      <div className="image-section">
        <Image 
          src="/fun.png" 
          alt="Image" 
          width={500} 
          height={500} 
          className="image"
        />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h1 className="title">
          Hi, I am ANEELA TASNEEM
        </h1>
        <p className="description">
          I am a <span>FRONTEND DEVELOPER</span>
        </p>
      </div>
    </div>
  );
} 
