import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import Banner from "../components/UI/Banner";
import Container from "../components/Layout/Container";
import { deleteItem } from "../redux/features/cartSlice";

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <tr key={item.id} className="text-center my-2">
      <td>
        <img src={item.imgUrl} alt={item.productName} className="w-[80px]" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line cursor-pointer"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <Banner title="Shopping Cart" />
      <section className="my-10">
        <Container>
          {cartItems.length === 0 && (
            <h2 className="text-3xl text-center py-5">
              No item added to the cart.
            </h2>
          )}
          {cartItems.length !== 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              <table className="lg:col-span-3 border border-primary">
                <thead>
                  <tr className="border text-lg lg:text-2xl">
                    <th className="py-4">Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <Tr key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
              <div>
                <div className="flex items-center justify-between my-5">
                  <h6 className="text-3xl">Subtotal</h6>
                  <span className="text-2xl font-semibold">${totalAmount}</span>
                </div>
                <p className="my-4">
                  taxes and shipping will calculate in checkout
                </p>
                <div>
                  <button className="btn w-full mb-4">
                    <Link to="/checkout">Checkout</Link>
                  </button>
                  <button className="btn w-full">
                    <Link to="/shop"> Continue Shopping</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
