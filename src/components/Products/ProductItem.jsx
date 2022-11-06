import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/features/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        image: product.imgUrl,
      })
    );
  };

  return (
    <div className="px-3 mb-4 cursor-pointer text-primary">
      <div>
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl font-semibold">
          <Link to={`/shop/${product.id}`}>{product.productName}</Link>
        </h3>
        <span className="text-sm">{product.category}</span>
      </div>
      <div className="flex justify-between items-center p-2">
        <span className="text-lg font-semibold">${product.price}</span>
        <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
          <i className="ri-add-line text-white bg-primary text-xl p-[5px] rounded-full"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default ProductItem;
