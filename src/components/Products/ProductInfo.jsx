import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import Container from "../Layout/Container";
import { addItem } from "../../redux/features/cartSlice";

const ProductInfo = ({
  id,
  imgUrl,
  productName,
  avgRating,
  price,
  shortDesc,
  category,
}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="product-img">
        <img src={imgUrl} alt={productName} className="max-h-[600px]" />
      </div>
      <div className="product-content mt-10">
        <h2 className="text-3xl mb-3">{productName}</h2>
        <div className="rating flex items-center gap-5 mb-3">
          <div>
            <span>
              <i className="text-[coral] ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-s-fill"></i>
            </span>
            <span>
              <i className="ri-star-half-s-line"></i>
            </span>
          </div>
          <p>
            (<span className="text-[coral] font-semibold">{avgRating}</span>{" "}
            ratings)
          </p>
        </div>
        <p>
          <span className="text-xl font-semibold">${price}</span>
          <span className="ml-6 text-lg">Category: {category}</span>
        </p>
        <p className="my-4">{shortDesc}</p>
        <motion.button
          whileTap={{ scale: 1.2 }}
          className="btn"
          onClick={addToCart}
        >
          Add to Cart
        </motion.button>
      </div>
    </Container>
  );
};

export default ProductInfo;
