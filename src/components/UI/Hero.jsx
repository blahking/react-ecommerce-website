import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/hero-img.png";
import Container from "../Layout/Container";

const Hero = () => {
  const year = new Date().getFullYear();

  return (
    <section className="bg-hero text-primary py-[60px]">
      <Container className="flex flex-col items-center lg:flex-row">
        <div className="hero-content flex-1 text-center lg:text-left">
          <p className="leading-7 my-4 text-gray">Trending product in {year}</p>
          <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl my-5">
            Make Your Interior More Minimalistic & Modern
          </h2>
          <p className="mb-10 text-gray leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            perspiciatis dolore esse enim atque tempore veritatis accusamus
            necessitatibus temporibus saepe!
          </p>
          <button className="bg-primary text-white px-5 py-2 rounded">
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
        <div className="hero-img flex-1">
          <img src={HeroImg} alt="hero image" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
