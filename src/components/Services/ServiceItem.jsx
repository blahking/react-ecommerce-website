import { motion } from "framer-motion";

const ServiceItem = ({ data }) => {
  const bg = `bg-[${data.bg}]`;
  //console.log(bg); //为啥tailwindcss不应用这个bg呢👀

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`${bg} flex items-center gap-4 p-5 mx-3 cursor-pointer rounded-md`}
      style={{ backgroundColor: data.bg }}
    >
      <span>
        <i
          className={
            data.icon +
            " text-[2.2rem] p-[10px] bg-primary text-white rounded-full"
          }
        ></i>
      </span>
      <div>
        <h3 className="text-lg text-primary">{data.title}</h3>
        <p className="text-sm text-[#222]">{data.subtitle}</p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
