const Icon = (props) => {
  const icon = props.name;
  const classes =
    "relative text-xl lg:text-2xl cursor-pointer " + props.className;
  return (
    <span className={classes} onClick={props?.onClick}>
      <i className={icon}></i>
      {props.children}
    </span>
  );
};

export default Icon;
