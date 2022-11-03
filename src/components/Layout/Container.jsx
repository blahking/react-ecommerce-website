const Container = (props) => {
  const initial = "py-3 mx-4 md:mx-10 lg:mx-28 ";
  const classes = props.className ? initial + props.className : initial;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
