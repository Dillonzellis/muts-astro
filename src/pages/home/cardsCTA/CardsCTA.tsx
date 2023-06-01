import CardDeck from "./CardDeck";

const CardsCTA = () => {
  return (
    <section className="relative pb-20">
      <h2 className="absolute left-1/2 top-20 max-w-3xl -translate-x-1/2 text-center text-3xl font-bold text-white">
        We're a leading provider of short-term and long-term needs for all of
        our members
      </h2>
      <img
        src="http://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
        alt="worker"
        className="lg:px-22 mx-auto px-4 sm:px-6"
        height={870}
        width={1700}
      />
      <CardDeck />
    </section>
  );
};

export default CardsCTA;
