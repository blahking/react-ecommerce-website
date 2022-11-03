const Helmet = (props) => {
  document.title = "Maltimart - " + props.title;

  return <>{props.children}</>;
};

export default Helmet;
