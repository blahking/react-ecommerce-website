import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews?.map((item, index) => {
          return <ReviewItem key={index} review={item} />;
        })}
      </ul>
      <ReviewForm />
    </div>
  );
};

export default Reviews;
