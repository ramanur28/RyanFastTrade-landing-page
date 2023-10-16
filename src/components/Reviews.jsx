import "../style/Reviews.css";
import review from "../assets/Reviews.json";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < review.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
  }, [index]);

  const renderReview = review.map((data) => {
    return (
      <div className="quote" key={data.nama}>
        <p className="quote-feedback">"{data.feedback}"</p>
        <p className="quote-name">- {data.nama}</p>
      </div>
    );
  });

  return (
    <div className="reviews container">
      <h2 className="subtitle">Reviews</h2>
      {renderReview[index]}
    </div>
  );
};

export default Reviews;
