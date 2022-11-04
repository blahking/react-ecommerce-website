const Badge = ({ num }) => {
  return (
    <span className="flex items-center justify-center w-4 h-4 text-white bg-primary  font-semibold text-xs  rounded-full absolute top-0 right-0 translate-x-1/2">
      {num}
    </span>
  );
};

export default Badge;
