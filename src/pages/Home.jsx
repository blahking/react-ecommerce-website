import { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/UI/Hero";
import Services from "../components/Services/Services";
import Section from "../components/Layout/Section";
import ProductsList from "../components/Products/ProductsList";
import products from "../assets/data/products";
import Container from "../components/Layout/Container";
import Clock from "../components/Clock/Clock";
import CounterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (product) => product.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title="Home">
      <Hero />
      <Services />
      <Section title="Trending Products">
        <ProductsList products={trendingProducts} />
      </Section>
      <Section title="Best Sales">
        <ProductsList products={bestSalesProducts} />
      </Section>
      <section className="bg-primary py-6">
        <Container className="flex">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h4 className="text-white text-3xl mb-2">Limited Offers</h4>
            <h3 className="text-white text-xl mb-3">Quality Armchair</h3>
            <Clock />
          </div>
          <div className="flex-1 hidden md:block">
            <img src={CounterImg} alt="counter img" />
          </div>
        </Container>
      </section>
      <Section title="New Arrivals">
        <ProductsList products={[...mobileProducts, ...wirelessProducts]} />
      </Section>
      <Section title="Popular in Category">
        <ProductsList products={popularProducts} />
      </Section>
    </Helmet>
  );
};

export default Home;
