import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ReviewForm = () => {
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
  };

  return (
    <form className="lg:w-[70%] m-auto" onSubmit={submitHandler}>
      <h4 className="text-xl font-semibold mb-4">Leave your experience</h4>
      <div className="form-group">
        <input
          ref={reviewUser}
          type="text"
          placeholder="Enter Name"
          className="w-full outline-none"
          required
        />
      </div>
      <div className="form-group border-none flex gap-5 items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <motion.span
            whileTap={{ scale: 1.2 }}
            key={num}
            className="flex items-center text-[coral] gap-1 cursor-pointer"
            onClick={() => {
              setRating(num);
            }}
          >
            {num}
            <i className="ri-star-s-fill"></i>
          </motion.span>
        ))}
      </div>
      <div className="form-group">
        <textarea
          ref={reviewMsg}
          rows="4"
          type="text"
          placeholder="Review Message"
          className="w-full outline-none"
          required
        />
      </div>
      <motion.button whileTap={{ scale: 1.2 }} type="submit" className="btn">
        Submit
      </motion.button>
    </form>
  );
};

export default ReviewForm;
