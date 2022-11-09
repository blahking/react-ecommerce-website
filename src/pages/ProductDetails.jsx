import { useParams } from "react-router-dom";
import { useState } from "react";

import Helmet from "../components/Helmet/Helmet";
import Banner from "../components/UI/Banner";
import Container from "../components/Layout/Container";
import products from "../assets/data/products";
import Reviews from "../components/Reviews/Reviews";
import ProductInfo from "../components/Products/ProductInfo";
import ProductsList from "../components/Products/ProductsList";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  return (
    <Helmet title={productName}>
      <Banner title={productName} />
      <ProductInfo
        id={id}
        imgUrl={imgUrl}
        productName={productName}
        avgRating={avgRating}
        price={price}
        shortDesc={shortDesc}
        category={category}
      />
      <section>
        <Container>
          <div className="flex gap-5 items-center">
            <h6
              className={`cursor-pointer ${tab === "desc" ? "active_tab" : ""}`}
              onClick={() => {
                setTab("desc");
              }}
            >
              Description
            </h6>
            <h6
              className={`cursor-pointer ${tab === "rev" ? "active_tab" : ""}`}
              onClick={() => {
                setTab("rev");
              }}
            >
              Reviews ({reviews.length})
            </h6>
          </div>
          <div className="my-5">
            {tab === "desc" && <p className="leading-7">{description}</p>}
            {tab === "rev" && <Reviews reviews={reviews} />}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className="text-2xl font-semibold my-4">You might also like</h2>
          <ProductsList products={relatedProducts} />
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
