import Cards from "../Cards";

function CardsList() {
  return (
    <div className="images">
      {Cards.sort(() => Math.random() - 0.5).map((element) => {
        return (
          <div
            className="image image-blank"
            style={{ background: `url(${element.image})` }}
          />
        );
      })}
    </div>
  );
}

// let cardsArray = props.cards.map((element) => <Card info={element} />);
// return <div className="images">{cardsArray}</div>;

export default CardsList;
