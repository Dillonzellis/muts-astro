import Container from "../../layout/Container";
import CardDeck from "./CardDeck";

const CardsCTA = () => {
  return (
    <section className="relative pb-20">
      <div className="relative">
        <Container>
          <h2 className="text-xl absolute top-1/2 left-1/2 lg:top-20 max-w-3xl -translate-y-1/2 -translate-x-1/2 text-center md:text-3xl font-bold text-white">
            We're a leading provider of short-term and long-term needs for all
            of our members
          </h2>
        </Container>
        <img
          src="http://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="worker"
          className="lg:px-22 mx-auto px-4 sm:px-6"
          height={870}
          width={1700}
        />
      </div>
      <CardDeck />
    </section>
  );
};

export default CardsCTA;
