import Container from "./Container";

const Section = (props) => {
  const classes = props.className;
  return (
    <section>
      <Container className={classes}>
        <h2 className="text-[2rem] text-center font-semibold my-5">
          {props.title}
        </h2>
        {props.children}
      </Container>
    </section>
  );
};

export default Section;
