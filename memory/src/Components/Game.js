import React from "react";
import CardsList from "./CardsList";
import Cards from "../Cards";

function Game() {
  return (
    <div className="game">
      <CardsList cards={Cards} />
    </div>
  );
}

export default Game;
