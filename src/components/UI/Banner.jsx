import BannerImg from "../../assets/images/banner-unsplash.jpg";

const Banner = ({ title }) => {
  return (
    <div
      className="h-[300px] bg-contain bg-center bg-repeat-x flex items-center justify-center"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <h1 className="text-3xl lg:text-5xl text-white font-bold">{title}</h1>
    </div>
  );
};

export default Banner;
