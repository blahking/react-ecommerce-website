import LogoImg from "../../assets/images/eco-logo.png";

const Logo = ({ white }) => {
  const imgClassInitial = "w-8 lg:w-10 ";
  const imgClasses = white
    ? imgClassInitial + "brightness-[100]"
    : imgClassInitial;

  const textColor = white ? "text-white" : "text-primary";

  return (
    <div className="logo flex items-center gap-2">
      <img src={LogoImg} alt="logo" className={imgClasses} />
      <div className={textColor}>
        <h1 className="text-sm md:text-base lg:text-xl font-bold">Multimart</h1>
        <p className="text-xs md:text-sm lg:teaxt-base">Since 1995</p>
      </div>
    </div>
  );
};

export default Logo;
