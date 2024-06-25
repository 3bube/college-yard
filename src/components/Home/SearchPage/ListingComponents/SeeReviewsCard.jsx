// src/components/SeeReviewsCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { reviewsData } from './DummyData.js';

const SeeReviewsCard = () => {
  const navigate = useNavigate();

  const handleSeeReviewsClick = () => {
    navigate('/reviews'); // Change the path to your reviews page
  };

  return (
    <div className="bg-[#222] mt-4 text-white p-4 rounded-lg w-full max-w-md mx-auto mb-4">
      <h2 className="text-xl font-medium mb-2">What Students Are Saying</h2>
      {reviewsData.slice(0, 1).map(review => (
        <div key={review.id} className="mb-2">
          <p className="italic text-md">"{review.snippet}"</p>
          <p className="text-right text-sm text-gray-400">- {review.author}</p>
        </div>
      ))}
      <button
        className="bg-[#A3FE35] text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleSeeReviewsClick}
      >
        See All Reviews
      </button>
    </div>
  );
};

export default SeeReviewsCard;
