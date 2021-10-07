import { useState } from "react";
import cards from "./cards";

export default function Cardimage(props) {
  // const flipcard = props.card.image;
  const [Flipcard, SetFlipcard] = useState(props.card.isFlipped);
  // const [Match, SetMatched] = useState("null");
  function flipcard() {
    SetFlipcard(!Flipcard);

    if (props.cardone) {
      if (props.cardone.name === props.card.name) {
        console.log("it's a Match!");
        props.setCard("");
      } else {
        console.log("it's not a match!");
        props.setCard("");
        console.log(Flipcard);
        SetFlipcard(true);
      }
    } else {
      props.setCard(props.card);
    }
  }

  // cardone,setCard

  return (
    <div className="card-blank imagesd" onClick={flipcard}>
      {Flipcard ? (
        <img className="resize" src={props.card.image} />
      ) : (
        <img className="resize" src={props.card.image2} />
      )}
    </div>
  );
}
