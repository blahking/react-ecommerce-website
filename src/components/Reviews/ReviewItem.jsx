import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <li className="mb-4">
      <h6>Jhon Doe</h6>
      <span className="text-[coral] font-semibold">
        {review.rating} (average rating)
      </span>
      <p className="mt-2">{review.text}</p>
    </li>
  );
};

export default ReviewItem;
