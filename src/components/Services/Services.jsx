import services from "../../assets/data/serviceData";
import ServiceItem from "./ServiceItem";
import Container from "../Layout/Container";

const Services = () => {
  return (
    <section>
      <Container className="py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <ServiceItem key={service.title} data={service} />
        ))}
      </Container>
    </section>
  );
};

export default Services;
