import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="absolute left-1/3 top-1/2 grid max-w-[800px] grid-cols-2 gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardDeck;
