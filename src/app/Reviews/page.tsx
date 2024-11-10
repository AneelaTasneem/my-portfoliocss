import Image from 'next/image';
import '../styles/reviews.css';

export default function Reviews() {
  return (
    <div className="reviews-section">
      <h1 className="title">Clients Reviews</h1>

      <div className="reviewsGrid">
        <div className="reviewCard">
          <Image src="/user.png" alt="Reviewer 1" width={80} height={80} className="avatar" />
          <h3 className="reviewerName">John Doe</h3>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="reviewText">
            “This service is amazing! It has completely transformed the way we do business.”
          </p>
        </div>

    
        <div className="reviewCard">
          <Image src="/user.png" alt="Reviewer 1" width={80} height={80} className="avatar" />
          <h3 className="reviewerName"> Jane Smith</h3>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="reviewText">
          “The team is very professional, and the service exceeded my expectations.”
          </p>
        </div>

        <div className="reviewCard">
          <Image src="/user.png" alt="Reviewer 1" width={80} height={80} className="avatar" />
          <h3 className="reviewerName">Alex Johnson</h3>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="reviewText">
          “I highly recommend this service. Great quality and excellent support.”
          </p>
        </div>
      </div>
</div>
  );
}