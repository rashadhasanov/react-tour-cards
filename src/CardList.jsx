import React from "react";
import Card from "./Card";

function CardList({ cards, onDelete }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CardList;
